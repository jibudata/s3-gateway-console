// This file is part of MinIO Kubernetes Cloud
// Copyright (c) 2020 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

package restapi

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"

	"k8s.io/apimachinery/pkg/api/resource"
	types "k8s.io/apimachinery/pkg/types"

	corev1 "k8s.io/api/core/v1"

	"github.com/minio/console/cluster"
	madmin "github.com/minio/minio/pkg/madmin"

	"github.com/go-openapi/runtime/middleware"
	"github.com/go-openapi/swag"
	"github.com/minio/console/models"
	"github.com/minio/console/restapi/operations"
	"github.com/minio/console/restapi/operations/admin_api"
	operator "github.com/minio/operator/pkg/apis/minio.min.io/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func registerTenantHandlers(api *operations.ConsoleAPI) {
	// Add Tenant
	api.AdminAPICreateTenantHandler = admin_api.CreateTenantHandlerFunc(func(params admin_api.CreateTenantParams, session *models.Principal) middleware.Responder {
		resp, err := getTenantCreatedResponse(session, params)
		if err != nil {
			return admin_api.NewCreateTenantDefault(500).WithPayload(&models.Error{Code: 500, Message: swag.String(err.Error())})
		}
		return admin_api.NewCreateTenantOK().WithPayload(resp)
	})
	// List All Tenants of all namespaces
	api.AdminAPIListAllTenantsHandler = admin_api.ListAllTenantsHandlerFunc(func(params admin_api.ListAllTenantsParams, session *models.Principal) middleware.Responder {
		resp, err := getListAllTenantsResponse(session, params)
		if err != nil {
			return admin_api.NewListTenantsDefault(500).WithPayload(&models.Error{Code: 500, Message: swag.String(err.Error())})
		}
		return admin_api.NewListTenantsOK().WithPayload(resp)

	})
	// List Tenants by namespace
	api.AdminAPIListTenantsHandler = admin_api.ListTenantsHandlerFunc(func(params admin_api.ListTenantsParams, session *models.Principal) middleware.Responder {
		resp, err := getListTenantsResponse(session, params)
		if err != nil {
			return admin_api.NewListTenantsDefault(500).WithPayload(&models.Error{Code: 500, Message: swag.String(err.Error())})
		}
		return admin_api.NewListTenantsOK().WithPayload(resp)

	})
	// Detail Tenant
	api.AdminAPITenantInfoHandler = admin_api.TenantInfoHandlerFunc(func(params admin_api.TenantInfoParams, session *models.Principal) middleware.Responder {
		resp, err := getTenantInfoResponse(session, params)
		if err != nil {
			return admin_api.NewTenantInfoDefault(500).WithPayload(&models.Error{Code: 500, Message: swag.String(err.Error())})
		}
		return admin_api.NewTenantInfoOK().WithPayload(resp)

	})

	// Delete Tenant
	api.AdminAPIDeleteTenantHandler = admin_api.DeleteTenantHandlerFunc(func(params admin_api.DeleteTenantParams, session *models.Principal) middleware.Responder {
		err := getDeleteTenantResponse(session, params)
		if err != nil {
			log.Println(err)
			return admin_api.NewTenantInfoDefault(500).WithPayload(&models.Error{Code: 500, Message: swag.String("Unable to delete tenant")})
		}
		return admin_api.NewTenantInfoOK()

	})

	// Update Tenant
	api.AdminAPIUpdateTenantHandler = admin_api.UpdateTenantHandlerFunc(func(params admin_api.UpdateTenantParams, session *models.Principal) middleware.Responder {
		err := getUpdateTenantResponse(session, params)
		if err != nil {
			log.Println(err)
			return admin_api.NewUpdateTenantDefault(500).WithPayload(&models.Error{Code: 500, Message: swag.String("Unable to update tenant")})
		}
		return admin_api.NewUpdateTenantCreated()
	})

	api.AdminAPITenantAddZoneHandler = admin_api.TenantAddZoneHandlerFunc(func(params admin_api.TenantAddZoneParams, session *models.Principal) middleware.Responder {
		err := getTenantAddZoneResponse(session, params)
		if err != nil {
			log.Println(err)
			return admin_api.NewTenantAddZoneDefault(500).WithPayload(&models.Error{Code: 500, Message: swag.String("Unable to add zone")})
		}
		return admin_api.NewTenantAddZoneCreated()
	})

	api.AdminAPIGetTenantUsageHandler = admin_api.GetTenantUsageHandlerFunc(func(params admin_api.GetTenantUsageParams, session *models.Principal) middleware.Responder {
		payload, err := getTenantUsageResponse(session, params)
		if err != nil {
			log.Println(err)
			return admin_api.NewGetTenantUsageDefault(500).WithPayload(&models.Error{Code: 500, Message: swag.String("Unable to get tenant usage")})
		}
		return admin_api.NewGetTenantUsageOK().WithPayload(payload)
	})
}

// deleteTenantAction performs the actions of deleting a tenant
func deleteTenantAction(ctx context.Context, operatorClient OperatorClient, nameSpace, instanceName string) error {
	err := operatorClient.TenantDelete(ctx, nameSpace, instanceName, metav1.DeleteOptions{})
	if err != nil {
		return err
	}
	return nil
}

// getDeleteTenantResponse gets the output of deleting a minio instance
func getDeleteTenantResponse(session *models.Principal, params admin_api.DeleteTenantParams) error {
	opClientClientSet, err := cluster.OperatorClient(session.SessionToken)
	if err != nil {
		return err
	}
	opClient := &operatorClient{
		client: opClientClientSet,
	}
	return deleteTenantAction(context.Background(), opClient, params.Namespace, params.Tenant)
}

func getTenantScheme(mi *operator.Tenant) string {
	scheme := "http"
	if mi.AutoCert() || mi.ExternalCert() {
		scheme = "https"
	}
	return scheme
}

func getTenantAdminClient(ctx context.Context, client K8sClient, namespace, tenantName, serviceName, scheme string) (*madmin.AdminClient, error) {
	// get admin credentials from secret
	creds, err := client.getSecret(ctx, namespace, fmt.Sprintf("%s-secret", tenantName), metav1.GetOptions{})
	if err != nil {
		return nil, err
	}
	accessKey, ok := creds.Data["accesskey"]
	if !ok {
		log.Println("tenant's secret doesn't contain accesskey")
		return nil, errorGeneric
	}
	secretkey, ok := creds.Data["secretkey"]
	if !ok {
		log.Println("tenant's secret doesn't contain secretkey")
		return nil, errorGeneric
	}
	service, err := client.getService(ctx, namespace, serviceName, metav1.GetOptions{})
	if err != nil {
		return nil, err
	}
	mAdmin, pErr := NewAdminClient(scheme+"://"+net.JoinHostPort(service.Spec.ClusterIP, strconv.Itoa(operator.MinIOPort)), string(accessKey), string(secretkey))
	if pErr != nil {
		return nil, pErr.Cause
	}
	return mAdmin, nil
}

func getTenant(ctx context.Context, operatorClient OperatorClient, namespace, tenantName string) (*operator.Tenant, error) {
	minInst, err := operatorClient.TenantGet(ctx, namespace, tenantName, metav1.GetOptions{})
	if err != nil {
		return nil, err
	}
	return minInst, nil
}

func getTenantInfo(tenant *operator.Tenant) *models.Tenant {
	var instanceCount int64
	var volumeCount int64
	for _, zone := range tenant.Spec.Zones {
		instanceCount = instanceCount + int64(zone.Servers)
		volumeCount = volumeCount + int64(zone.Servers*zone.VolumesPerServer)
	}

	var zones []*models.Zone

	var totalSize int64
	for _, z := range tenant.Spec.Zones {
		zones = append(zones, parseTenantZone(&z))
		zoneSize := int64(z.Servers) * int64(z.VolumesPerServer) * z.VolumeClaimTemplate.Spec.Resources.Requests.Storage().Value()
		totalSize = totalSize + zoneSize
	}

	return &models.Tenant{
		CreationDate: tenant.ObjectMeta.CreationTimestamp.String(),
		Name:         tenant.Name,
		TotalSize:    totalSize,
		CurrentState: tenant.Status.CurrentState,
		Zones:        zones,
		Namespace:    tenant.ObjectMeta.Namespace,
		Image:        tenant.Spec.Image,
	}
}

func getTenantInfoResponse(session *models.Principal, params admin_api.TenantInfoParams) (*models.Tenant, error) {
	// 5 seconds timeout
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	opClientClientSet, err := cluster.OperatorClient(session.SessionToken)
	if err != nil {
		return nil, err
	}

	opClient := &operatorClient{
		client: opClientClientSet,
	}

	minTenant, err := getTenant(ctx, opClient, params.Namespace, params.Tenant)
	if err != nil {
		log.Println("error getting minioTenant:", err)
		return nil, err
	}

	info := getTenantInfo(minTenant)
	return info, nil
}

func listTenants(ctx context.Context, operatorClient OperatorClient, namespace string, limit *int32) (*models.ListTenantsResponse, error) {
	listOpts := metav1.ListOptions{
		Limit: 10,
	}

	if limit != nil {
		listOpts.Limit = int64(*limit)
	}

	minTenants, err := operatorClient.TenantList(ctx, namespace, listOpts)
	if err != nil {
		return nil, err
	}

	var tenants []*models.TenantList
	var totalSize int64

	for _, minInst := range minTenants.Items {
		var instanceCount int64
		var volumeCount int64
		for _, zone := range minInst.Spec.Zones {
			instanceCount = instanceCount + int64(zone.Servers)
			volumeCount = volumeCount + int64(zone.Servers*zone.VolumesPerServer)
			if zone.VolumeClaimTemplate != nil {
				zoneSize := int64(zone.VolumesPerServer) * int64(zone.Servers) * zone.VolumeClaimTemplate.Spec.Resources.Requests.Storage().Value()
				totalSize = totalSize + zoneSize
			}
		}

		tenants = append(tenants, &models.TenantList{
			CreationDate:  minInst.ObjectMeta.CreationTimestamp.String(),
			Name:          minInst.ObjectMeta.Name,
			ZoneCount:     int64(len(minInst.Spec.Zones)),
			InstanceCount: instanceCount,
			VolumeCount:   volumeCount,
			CurrentState:  minInst.Status.CurrentState,
			Namespace:     minInst.ObjectMeta.Namespace,
			TotalSize:     totalSize,
		})
	}

	return &models.ListTenantsResponse{
		Tenants: tenants,
		Total:   0,
	}, nil
}

func getListAllTenantsResponse(session *models.Principal, params admin_api.ListAllTenantsParams) (*models.ListTenantsResponse, error) {
	ctx := context.Background()
	opClientClientSet, err := cluster.OperatorClient(session.SessionToken)
	if err != nil {
		log.Println("error getting operator client:", err)
		return nil, err
	}
	opClient := &operatorClient{
		client: opClientClientSet,
	}
	listT, err := listTenants(ctx, opClient, "", params.Limit)
	if err != nil {
		log.Println("error listing tenants:", err)
		return nil, err
	}
	return listT, nil
}

// getListTenantsResponse list tenants by namespace
func getListTenantsResponse(session *models.Principal, params admin_api.ListTenantsParams) (*models.ListTenantsResponse, error) {
	ctx := context.Background()
	opClientClientSet, err := cluster.OperatorClient(session.SessionToken)
	if err != nil {
		log.Println("error getting operator client:", err)
		return nil, err
	}
	opClient := &operatorClient{
		client: opClientClientSet,
	}
	listT, err := listTenants(ctx, opClient, params.Namespace, params.Limit)
	if err != nil {
		log.Println("error listing tenants:", err)
		return nil, err
	}
	return listT, nil
}

func getTenantCreatedResponse(session *models.Principal, params admin_api.CreateTenantParams) (*models.CreateTenantResponse, error) {
	minioImage := params.Body.Image
	if minioImage == "" {
		minImg, err := cluster.GetMinioImage()
		if err != nil {
			return nil, err
		}
		minioImage = *minImg
	}

	// if access/secret are provided, use them, else create a random pair
	accessKey := RandomCharString(16)
	secretKey := RandomCharString(32)
	if params.Body.AccessKey != "" {
		accessKey = params.Body.AccessKey
	}
	if params.Body.SecretKey != "" {
		secretKey = params.Body.SecretKey
	}
	secretName := fmt.Sprintf("%s-secret", *params.Body.Name)
	imm := true
	instanceSecret := corev1.Secret{
		ObjectMeta: metav1.ObjectMeta{
			Name: secretName,
		},
		Immutable: &imm,
		Data: map[string][]byte{
			"accesskey": []byte(accessKey),
			"secretkey": []byte(secretKey),
		},
	}

	clientset, err := cluster.K8sClient(session.SessionToken)
	if err != nil {
		return nil, err
	}
	ns := *params.Body.Namespace
	_, err = clientset.CoreV1().Secrets(ns).Create(context.Background(), &instanceSecret, metav1.CreateOptions{})
	if err != nil {
		return nil, err
	}

	enableSSL := false
	if params.Body.EnableSsl != nil {
		enableSSL = *params.Body.EnableSsl
	}
	enableConsole := true
	if params.Body.EnableConsole != nil {
		enableConsole = *params.Body.EnableConsole
	}

	//Construct a MinIO Instance with everything we are getting from parameters
	minInst := operator.Tenant{
		ObjectMeta: metav1.ObjectMeta{
			Name: *params.Body.Name,
		},
		Spec: operator.TenantSpec{
			Image:     minioImage,
			Mountpath: "/export",
			CredsSecret: &corev1.LocalObjectReference{
				Name: secretName,
			},
			RequestAutoCert: enableSSL,
		},
	}
	// optionals are set below

	if enableConsole {
		consoleSelector := fmt.Sprintf("%s-console", *params.Body.Name)
		consoleSecretName := fmt.Sprintf("%s-secret", consoleSelector)
		imm := true
		instanceSecret := corev1.Secret{
			ObjectMeta: metav1.ObjectMeta{
				Name: consoleSecretName,
			},
			Immutable: &imm,
			Data: map[string][]byte{
				"CONSOLE_HMAC_JWT_SECRET":  []byte(RandomCharString(16)),
				"CONSOLE_PBKDF_PASSPHRASE": []byte(RandomCharString(16)),
				"CONSOLE_PBKDF_SALT":       []byte(RandomCharString(8)),
				"CONSOLE_ACCESS_KEY":       []byte(RandomCharString(16)),
				"CONSOLE_SECRET_KEY":       []byte(RandomCharString(32)),
			},
		}
		_, err = clientset.CoreV1().Secrets(ns).Create(context.Background(), &instanceSecret, metav1.CreateOptions{})
		if err != nil {
			return nil, err
		}

		const consoleVersion = "minio/console:v0.3.0"
		minInst.Spec.Console = &operator.ConsoleConfiguration{
			Replicas:      2,
			Image:         consoleVersion,
			ConsoleSecret: &corev1.LocalObjectReference{Name: consoleSecretName},
		}
	}

	// set the service name if provided
	if params.Body.ServiceName != "" {
		minInst.Spec.ServiceName = params.Body.ServiceName
	}
	// set the zones if they are provided
	for _, zone := range params.Body.Zones {
		zone, err := parseTenantZoneRequest(zone)
		if err != nil {
			return nil, err
		}
		minInst.Spec.Zones = append(minInst.Spec.Zones, *zone)
	}

	// Set Mount Path if provided
	if params.Body.MounthPath != "" {
		minInst.Spec.Mountpath = params.Body.MounthPath
	}
	// add annotations
	if len(params.Body.Annotations) > 0 {
		if minInst.Spec.Metadata == nil {
			minInst.Spec.Metadata = &metav1.ObjectMeta{}
		}
		minInst.Spec.Metadata.Annotations = params.Body.Annotations
	}

	opClient, err := cluster.OperatorClient(session.SessionToken)
	if err != nil {
		return nil, err
	}

	_, err = opClient.MinioV1().Tenants(ns).Create(context.Background(), &minInst, metav1.CreateOptions{})
	if err != nil {
		return nil, err
	}

	// Integratrions
	if os.Getenv("GKE_INTEGRATION") != "" {
		err := gkeIntegration(clientset, *params.Body.Name, ns, session.SessionToken)
		if err != nil {
			return nil, err
		}
	}

	return &models.CreateTenantResponse{
		AccessKey: accessKey,
		SecretKey: secretKey,
	}, nil
}

// updateTenantAction does an update on the minioTenant by patching the desired changes
func updateTenantAction(ctx context.Context, operatorClient OperatorClient, httpCl cluster.HTTPClientI, nameSpace string, params admin_api.UpdateTenantParams) error {
	imageToUpdate := params.Body.Image
	minInst, err := operatorClient.TenantGet(ctx, nameSpace, params.Tenant, metav1.GetOptions{})
	if err != nil {
		return err
	}

	// if image to update is empty we'll use the latest image by default
	if strings.TrimSpace(imageToUpdate) != "" {
		minInst.Spec.Image = params.Body.Image
	} else {
		im, err := cluster.GetLatestMinioImage(httpCl)
		if err != nil {
			return err
		}
		minInst.Spec.Image = *im
	}

	payloadBytes, err := json.Marshal(minInst)
	if err != nil {
		return err
	}
	_, err = operatorClient.TenantPatch(ctx, nameSpace, minInst.Name, types.MergePatchType, payloadBytes, metav1.PatchOptions{})
	if err != nil {
		return err
	}
	return nil
}

func getUpdateTenantResponse(session *models.Principal, params admin_api.UpdateTenantParams) error {
	ctx := context.Background()
	opClientClientSet, err := cluster.OperatorClient(session.SessionToken)
	if err != nil {
		log.Println("error getting operator client:", err)
		return err
	}

	opClient := &operatorClient{
		client: opClientClientSet,
	}
	httpC := &cluster.HTTPClient{
		Client: &http.Client{
			Timeout: 4 * time.Second,
		},
	}
	if err := updateTenantAction(ctx, opClient, httpC, params.Namespace, params); err != nil {
		log.Println("error patching Tenant:", err)
		return err
	}
	return nil
}

// addTenantZone creates a zone to a defined tenant
func addTenantZone(ctx context.Context, operatorClient OperatorClient, params admin_api.TenantAddZoneParams) error {
	tenant, err := operatorClient.TenantGet(ctx, params.Namespace, params.Tenant, metav1.GetOptions{})
	if err != nil {
		return err
	}

	zoneParams := params.Body
	zone, err := parseTenantZoneRequest(zoneParams)
	if err != nil {
		return err
	}
	tenant.Spec.Zones = append(tenant.Spec.Zones, *zone)
	payloadBytes, err := json.Marshal(tenant)
	if err != nil {
		return err
	}

	_, err = operatorClient.TenantPatch(ctx, params.Namespace, tenant.Name, types.MergePatchType, payloadBytes, metav1.PatchOptions{})
	if err != nil {
		return err
	}
	return nil
}

func getTenantAddZoneResponse(session *models.Principal, params admin_api.TenantAddZoneParams) error {
	ctx := context.Background()
	opClientClientSet, err := cluster.OperatorClient(session.SessionToken)
	if err != nil {
		log.Println("error getting operator client:", err)
		return err
	}
	opClient := &operatorClient{
		client: opClientClientSet,
	}
	if err := addTenantZone(ctx, opClient, params); err != nil {
		log.Println("error patching Tenant:", err)
		return err
	}
	return nil
}

// getTenantUsageResponse returns the usage of a tenant
func getTenantUsageResponse(session *models.Principal, params admin_api.GetTenantUsageParams) (*models.TenantUsage, error) {
	// 5 seconds timeout
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	opClientClientSet, err := cluster.OperatorClient(session.SessionToken)
	if err != nil {
		return nil, err
	}
	clientset, err := cluster.K8sClient(session.SessionToken)
	if err != nil {
		log.Println("error getting k8sClient:", err)
		return nil, err
	}

	opClient := &operatorClient{
		client: opClientClientSet,
	}
	k8sClient := &k8sClient{
		client: clientset,
	}

	minTenant, err := getTenant(ctx, opClient, params.Namespace, params.Tenant)
	if err != nil {
		log.Println("error getting minioTenant:", err)
		return nil, err
	}
	tenantScheme := getTenantScheme(minTenant)

	svcName := minTenant.Spec.ServiceName
	if svcName == "" {
		svcName = minTenant.Name
		// TODO:
		// 1 get tenant services
		// 2 filter out cluster ip svc
	}

	mAdmin, err := getTenantAdminClient(
		ctx,
		k8sClient,
		params.Namespace,
		params.Tenant,
		svcName,
		tenantScheme)
	if err != nil {
		log.Println("error getting tenant's admin client:", err)
		return nil, err
	}
	// create a minioClient interface implementation
	// defining the client to be used
	adminClient := adminClient{client: mAdmin}
	// serialize output
	adminInfo, err := getAdminInfo(ctx, adminClient)
	if err != nil {
		log.Println("error getting admin info:", err)
		return nil, err
	}
	info := &models.TenantUsage{UsedSize: adminInfo.Usage}
	return info, nil
}

// parseTenantZoneRequest parse zone request and returns the equivalent
// operator.Zone object
func parseTenantZoneRequest(zoneParams *models.Zone) (*operator.Zone, error) {
	if zoneParams.VolumeConfiguration == nil {
		return nil, errors.New("a volume configuration must be specified")
	}

	if zoneParams.VolumeConfiguration.Size == nil || *zoneParams.VolumeConfiguration.Size <= int64(0) {
		return nil, errors.New("volume size must be greater than 0")
	}

	if zoneParams.Servers == nil || *zoneParams.Servers <= 0 {
		return nil, errors.New("number of servers must be greater than 0")
	}

	if zoneParams.VolumesPerServer == nil || *zoneParams.VolumesPerServer <= 0 {
		return nil, errors.New("number of volumes per server must be greater than 0")
	}

	volumeSize := resource.NewQuantity(*zoneParams.VolumeConfiguration.Size, resource.DecimalExponent)
	volTemp := corev1.PersistentVolumeClaimSpec{
		AccessModes: []corev1.PersistentVolumeAccessMode{
			corev1.ReadWriteOnce,
		},
		Resources: corev1.ResourceRequirements{
			Requests: corev1.ResourceList{
				corev1.ResourceStorage: *volumeSize,
			},
		},
	}
	if zoneParams.VolumeConfiguration.StorageClassName != "" {
		volTemp.StorageClassName = &zoneParams.VolumeConfiguration.StorageClassName
	}

	// parse resources' requests
	var resourcesRequests corev1.ResourceList
	var resourcesLimits corev1.ResourceList
	if zoneParams.Resources != nil {
		for key, val := range zoneParams.Resources.Requests {
			resourcesRequests[corev1.ResourceName(key)] = *resource.NewQuantity(val, resource.BinarySI)
		}
		for key, val := range zoneParams.Resources.Limits {
			resourcesLimits[corev1.ResourceName(key)] = *resource.NewQuantity(val, resource.BinarySI)
		}
	}

	// parse Node Affinity
	nodeSelectorTerms := []corev1.NodeSelectorTerm{}
	preferredSchedulingTerm := []corev1.PreferredSchedulingTerm{}
	if zoneParams.Affinity != nil && zoneParams.Affinity.NodeAffinity != nil {
		if zoneParams.Affinity.NodeAffinity.RequiredDuringSchedulingIgnoredDuringExecution != nil {
			for _, elem := range zoneParams.Affinity.NodeAffinity.RequiredDuringSchedulingIgnoredDuringExecution.NodeSelectorTerms {
				term := parseModelsNodeSelectorTerm(elem)
				nodeSelectorTerms = append(nodeSelectorTerms, term)
			}
		}
		for _, elem := range zoneParams.Affinity.NodeAffinity.PreferredDuringSchedulingIgnoredDuringExecution {
			pst := corev1.PreferredSchedulingTerm{
				Weight:     *elem.Weight,
				Preference: parseModelsNodeSelectorTerm(elem.Preference),
			}
			preferredSchedulingTerm = append(preferredSchedulingTerm, pst)
		}
	}
	var nodeAffinity *corev1.NodeAffinity
	if len(nodeSelectorTerms) > 0 || len(preferredSchedulingTerm) > 0 {
		nodeAffinity = &corev1.NodeAffinity{
			RequiredDuringSchedulingIgnoredDuringExecution: &corev1.NodeSelector{
				NodeSelectorTerms: nodeSelectorTerms,
			},
			PreferredDuringSchedulingIgnoredDuringExecution: preferredSchedulingTerm,
		}
	}

	// parse Pod Affinity
	podAffinityTerms := []corev1.PodAffinityTerm{}
	weightedPodAffinityTerms := []corev1.WeightedPodAffinityTerm{}
	if zoneParams.Affinity != nil && zoneParams.Affinity.PodAffinity != nil {
		for _, elem := range zoneParams.Affinity.PodAffinity.RequiredDuringSchedulingIgnoredDuringExecution {
			podAffinityTerms = append(podAffinityTerms, parseModelPodAffinityTerm(elem))
		}
		for _, elem := range zoneParams.Affinity.PodAffinity.PreferredDuringSchedulingIgnoredDuringExecution {
			wAffinityTerm := corev1.WeightedPodAffinityTerm{
				Weight:          *elem.Weight,
				PodAffinityTerm: parseModelPodAffinityTerm(elem.PodAffinityTerm),
			}
			weightedPodAffinityTerms = append(weightedPodAffinityTerms, wAffinityTerm)
		}
	}
	var podAffinity *corev1.PodAffinity
	if len(podAffinityTerms) > 0 || len(weightedPodAffinityTerms) > 0 {
		podAffinity = &corev1.PodAffinity{
			RequiredDuringSchedulingIgnoredDuringExecution:  podAffinityTerms,
			PreferredDuringSchedulingIgnoredDuringExecution: weightedPodAffinityTerms,
		}
	}

	// parse Pod Anti Affinity
	podAntiAffinityTerms := []corev1.PodAffinityTerm{}
	weightedPodAntiAffinityTerms := []corev1.WeightedPodAffinityTerm{}
	if zoneParams.Affinity != nil && zoneParams.Affinity.PodAntiAffinity != nil {
		for _, elem := range zoneParams.Affinity.PodAntiAffinity.RequiredDuringSchedulingIgnoredDuringExecution {
			podAntiAffinityTerms = append(podAntiAffinityTerms, parseModelPodAffinityTerm(elem))
		}
		for _, elem := range zoneParams.Affinity.PodAntiAffinity.PreferredDuringSchedulingIgnoredDuringExecution {
			wAffinityTerm := corev1.WeightedPodAffinityTerm{
				Weight:          *elem.Weight,
				PodAffinityTerm: parseModelPodAffinityTerm(elem.PodAffinityTerm),
			}
			weightedPodAntiAffinityTerms = append(weightedPodAntiAffinityTerms, wAffinityTerm)
		}
	}
	var podAntiAffinity *corev1.PodAntiAffinity
	if len(podAntiAffinityTerms) > 0 || len(weightedPodAntiAffinityTerms) > 0 {
		podAntiAffinity = &corev1.PodAntiAffinity{
			RequiredDuringSchedulingIgnoredDuringExecution:  podAntiAffinityTerms,
			PreferredDuringSchedulingIgnoredDuringExecution: weightedPodAntiAffinityTerms,
		}
	}

	var affinity *corev1.Affinity
	if nodeAffinity != nil || podAffinity != nil || podAntiAffinity != nil {
		affinity = &corev1.Affinity{
			NodeAffinity:    nodeAffinity,
			PodAffinity:     podAffinity,
			PodAntiAffinity: podAntiAffinity,
		}
	}

	// parse tolerations
	tolerations := []corev1.Toleration{}
	for _, elem := range zoneParams.Tolerations {
		toleration := corev1.Toleration{
			Key:               elem.Key,
			Operator:          corev1.TolerationOperator(elem.Operator),
			Value:             elem.Value,
			Effect:            corev1.TaintEffect(elem.Effect),
			TolerationSeconds: &elem.TolerationSeconds,
		}
		tolerations = append(tolerations, toleration)
	}

	zone := &operator.Zone{
		Name:             zoneParams.Name,
		Servers:          int32(*zoneParams.Servers),
		VolumesPerServer: *zoneParams.VolumesPerServer,
		VolumeClaimTemplate: &corev1.PersistentVolumeClaim{
			ObjectMeta: metav1.ObjectMeta{
				Name: "data",
			},
			Spec: volTemp,
		},
		Resources: corev1.ResourceRequirements{
			Requests: resourcesRequests,
			Limits:   resourcesLimits,
		},
		NodeSelector: zoneParams.NodeSelector,
		Affinity:     affinity,
		Tolerations:  tolerations,
	}
	return zone, nil
}

func parseModelPodAffinityTerm(term *models.PodAffinityTerm) corev1.PodAffinityTerm {
	labelMatchExpressions := []metav1.LabelSelectorRequirement{}
	for _, exp := range term.LabelSelector.MatchExpressions {
		labelSelectorReq := metav1.LabelSelectorRequirement{
			Key:      *exp.Key,
			Operator: metav1.LabelSelectorOperator(*exp.Operator),
			Values:   exp.Values,
		}
		labelMatchExpressions = append(labelMatchExpressions, labelSelectorReq)
	}

	podAffinityTerm := corev1.PodAffinityTerm{
		LabelSelector: &metav1.LabelSelector{
			MatchExpressions: labelMatchExpressions,
			MatchLabels:      term.LabelSelector.MatchLabels,
		},
		Namespaces:  term.Namespaces,
		TopologyKey: *term.TopologyKey,
	}
	return podAffinityTerm
}

func parseModelsNodeSelectorTerm(elem *models.NodeSelectorTerm) corev1.NodeSelectorTerm {
	var term corev1.NodeSelectorTerm
	for _, matchExpression := range elem.MatchExpressions {
		matchExp := corev1.NodeSelectorRequirement{
			Key:      *matchExpression.Key,
			Operator: corev1.NodeSelectorOperator(*matchExpression.Operator),
			Values:   matchExpression.Values,
		}
		term.MatchExpressions = append(term.MatchExpressions, matchExp)
	}
	for _, matchField := range elem.MatchFields {
		matchF := corev1.NodeSelectorRequirement{
			Key:      *matchField.Key,
			Operator: corev1.NodeSelectorOperator(*matchField.Operator),
			Values:   matchField.Values,
		}
		term.MatchFields = append(term.MatchFields, matchF)
	}
	return term
}

// parseTenantZone operator Zone object and returns the equivalent
// models.Zone object
func parseTenantZone(zone *operator.Zone) *models.Zone {
	var size *int64
	var storageClassName string
	if zone.VolumeClaimTemplate != nil {
		size = swag.Int64(zone.VolumeClaimTemplate.Spec.Resources.Requests.Storage().Value())
		if zone.VolumeClaimTemplate.Spec.StorageClassName != nil {
			storageClassName = *zone.VolumeClaimTemplate.Spec.StorageClassName
		}
	}

	// parse resources' requests
	var resources *models.ZoneResources
	resourcesRequests := make(map[string]int64)
	resourcesLimits := make(map[string]int64)
	for key, val := range zone.Resources.Requests {
		resourcesRequests[key.String()] = val.Value()
	}
	for key, val := range zone.Resources.Limits {
		resourcesLimits[key.String()] = val.Value()
	}
	if len(resourcesRequests) > 0 || len(resourcesLimits) > 0 {
		resources = &models.ZoneResources{
			Limits:   resourcesLimits,
			Requests: resourcesRequests,
		}
	}

	// parse Node Affinity
	nodeSelectorTerms := []*models.NodeSelectorTerm{}
	preferredSchedulingTerm := []*models.ZoneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionItems0{}

	if zone.Affinity != nil && zone.Affinity.NodeAffinity != nil {
		if zone.Affinity.NodeAffinity.RequiredDuringSchedulingIgnoredDuringExecution != nil {
			for _, elem := range zone.Affinity.NodeAffinity.RequiredDuringSchedulingIgnoredDuringExecution.NodeSelectorTerms {
				term := parseNodeSelectorTerm(&elem)
				nodeSelectorTerms = append(nodeSelectorTerms, term)
			}
		}
		for _, elem := range zone.Affinity.NodeAffinity.PreferredDuringSchedulingIgnoredDuringExecution {
			pst := &models.ZoneAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionItems0{
				Weight:     swag.Int32(elem.Weight),
				Preference: parseNodeSelectorTerm(&elem.Preference),
			}
			preferredSchedulingTerm = append(preferredSchedulingTerm, pst)
		}
	}

	var nodeAffinity *models.ZoneAffinityNodeAffinity
	if len(nodeSelectorTerms) > 0 || len(preferredSchedulingTerm) > 0 {
		nodeAffinity = &models.ZoneAffinityNodeAffinity{
			RequiredDuringSchedulingIgnoredDuringExecution: &models.ZoneAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution{
				NodeSelectorTerms: nodeSelectorTerms,
			},
			PreferredDuringSchedulingIgnoredDuringExecution: preferredSchedulingTerm,
		}
	}

	// parse Pod Affinity
	podAffinityTerms := []*models.PodAffinityTerm{}
	weightedPodAffinityTerms := []*models.ZoneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionItems0{}

	if zone.Affinity != nil && zone.Affinity.PodAffinity != nil {
		for _, elem := range zone.Affinity.PodAffinity.RequiredDuringSchedulingIgnoredDuringExecution {
			podAffinityTerms = append(podAffinityTerms, parsePodAffinityTerm(&elem))
		}
		for _, elem := range zone.Affinity.PodAffinity.PreferredDuringSchedulingIgnoredDuringExecution {
			wAffinityTerm := &models.ZoneAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionItems0{
				Weight:          swag.Int32(elem.Weight),
				PodAffinityTerm: parsePodAffinityTerm(&elem.PodAffinityTerm),
			}
			weightedPodAffinityTerms = append(weightedPodAffinityTerms, wAffinityTerm)
		}
	}
	var podAffinity *models.ZoneAffinityPodAffinity
	if len(podAffinityTerms) > 0 || len(weightedPodAffinityTerms) > 0 {
		podAffinity = &models.ZoneAffinityPodAffinity{
			RequiredDuringSchedulingIgnoredDuringExecution:  podAffinityTerms,
			PreferredDuringSchedulingIgnoredDuringExecution: weightedPodAffinityTerms,
		}
	}

	// parse Pod Anti Affinity
	podAntiAffinityTerms := []*models.PodAffinityTerm{}
	weightedPodAntiAffinityTerms := []*models.ZoneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionItems0{}

	if zone.Affinity != nil && zone.Affinity.PodAntiAffinity != nil {
		for _, elem := range zone.Affinity.PodAntiAffinity.RequiredDuringSchedulingIgnoredDuringExecution {
			podAntiAffinityTerms = append(podAntiAffinityTerms, parsePodAffinityTerm(&elem))
		}
		for _, elem := range zone.Affinity.PodAntiAffinity.PreferredDuringSchedulingIgnoredDuringExecution {
			wAffinityTerm := &models.ZoneAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionItems0{
				Weight:          swag.Int32(elem.Weight),
				PodAffinityTerm: parsePodAffinityTerm(&elem.PodAffinityTerm),
			}
			weightedPodAntiAffinityTerms = append(weightedPodAntiAffinityTerms, wAffinityTerm)
		}
	}

	var podAntiAffinity *models.ZoneAffinityPodAntiAffinity
	if len(podAntiAffinityTerms) > 0 || len(weightedPodAntiAffinityTerms) > 0 {
		podAntiAffinity = &models.ZoneAffinityPodAntiAffinity{
			RequiredDuringSchedulingIgnoredDuringExecution:  podAntiAffinityTerms,
			PreferredDuringSchedulingIgnoredDuringExecution: weightedPodAntiAffinityTerms,
		}
	}

	// build affinity object
	var affinity *models.ZoneAffinity
	if nodeAffinity != nil || podAffinity != nil || podAntiAffinity != nil {
		affinity = &models.ZoneAffinity{
			NodeAffinity:    nodeAffinity,
			PodAffinity:     podAffinity,
			PodAntiAffinity: podAntiAffinity,
		}
	}

	// parse tolerations
	var tolerations models.ZoneTolerations
	for _, elem := range zone.Tolerations {
		toleration := &models.ZoneTolerationsItems0{
			Key:               elem.Key,
			Operator:          string(elem.Operator),
			Value:             elem.Value,
			Effect:            string(elem.Effect),
			TolerationSeconds: *elem.TolerationSeconds,
		}
		tolerations = append(tolerations, toleration)
	}

	zoneModel := &models.Zone{
		Name:             zone.Name,
		Servers:          swag.Int64(int64(zone.Servers)),
		VolumesPerServer: swag.Int32(zone.VolumesPerServer),
		VolumeConfiguration: &models.ZoneVolumeConfiguration{
			Size:             size,
			StorageClassName: storageClassName,
		},
		NodeSelector: zone.NodeSelector,
		Resources:    resources,
		Affinity:     affinity,
		Tolerations:  tolerations,
	}
	return zoneModel
}

func parsePodAffinityTerm(term *corev1.PodAffinityTerm) *models.PodAffinityTerm {
	labelMatchExpressions := []*models.PodAffinityTermLabelSelectorMatchExpressionsItems0{}
	for _, exp := range term.LabelSelector.MatchExpressions {
		labelSelectorReq := &models.PodAffinityTermLabelSelectorMatchExpressionsItems0{
			Key:      swag.String(exp.Key),
			Operator: swag.String(string(exp.Operator)),
			Values:   exp.Values,
		}
		labelMatchExpressions = append(labelMatchExpressions, labelSelectorReq)
	}

	podAffinityTerm := &models.PodAffinityTerm{
		LabelSelector: &models.PodAffinityTermLabelSelector{
			MatchExpressions: labelMatchExpressions,
			MatchLabels:      term.LabelSelector.MatchLabels,
		},
		Namespaces:  term.Namespaces,
		TopologyKey: swag.String(term.TopologyKey),
	}
	return podAffinityTerm
}

func parseNodeSelectorTerm(term *corev1.NodeSelectorTerm) *models.NodeSelectorTerm {
	var t models.NodeSelectorTerm
	for _, matchExpression := range term.MatchExpressions {
		matchExp := &models.NodeSelectorTermMatchExpressionsItems0{
			Key:      swag.String(matchExpression.Key),
			Operator: swag.String(string(matchExpression.Operator)),
			Values:   matchExpression.Values,
		}
		t.MatchExpressions = append(t.MatchExpressions, matchExp)
	}
	for _, matchField := range term.MatchFields {
		matchF := &models.NodeSelectorTermMatchFieldsItems0{
			Key:      swag.String(matchField.Key),
			Operator: swag.String(string(matchField.Operator)),
			Values:   matchField.Values,
		}
		t.MatchFields = append(t.MatchFields, matchF)
	}
	return &t
}
