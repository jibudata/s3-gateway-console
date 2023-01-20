// This file is part of MinIO Console Server
// Copyright (c) 2023 MinIO, Inc.
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

package operatorapi

import (
	"context"
	"errors"
	"fmt"
	"net/http"
	"strings"
	"testing"

	"github.com/minio/console/models"
	"github.com/minio/console/operatorapi/operations"
	"github.com/minio/console/operatorapi/operations/operator_api"
	miniov2 "github.com/minio/operator/pkg/apis/minio.min.io/v2"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/suite"
	corev1 "k8s.io/api/core/v1"
	v1 "k8s.io/api/core/v1"
	k8sErrors "k8s.io/apimachinery/pkg/api/errors"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime/schema"
)

type TenantTestSuite struct {
	suite.Suite
	assert    *assert.Assertions
	opClient  opClientMock
	k8sclient k8sClientMock
}

func (suite *TenantTestSuite) SetupSuite() {
	suite.assert = assert.New(suite.T())
	suite.opClient = opClientMock{}
	suite.k8sclient = k8sClientMock{}
	k8sClientDeleteSecretsCollectionMock = func(ctx context.Context, namespace string, opts metav1.DeleteOptions, listOpts metav1.ListOptions) error {
		return nil
	}
}

func (suite *TenantTestSuite) SetupTest() {
}

func (suite *TenantTestSuite) TearDownSuite() {
}

func (suite *TenantTestSuite) TearDownTest() {
}

func (suite *TenantTestSuite) TestRegisterTenantLogsHandlers() {
	api := &operations.OperatorAPI{}
	suite.assertHandlersAreNil(api)
	registerTenantHandlers(api)
	suite.assertHandlersAreNotNil(api)
}

func (suite *TenantTestSuite) assertHandlersAreNil(api *operations.OperatorAPI) {
	suite.assert.Nil(api.OperatorAPICreateTenantHandler)
	suite.assert.Nil(api.OperatorAPIListAllTenantsHandler)
	suite.assert.Nil(api.OperatorAPIListTenantsHandler)
	suite.assert.Nil(api.OperatorAPITenantDetailsHandler)
	suite.assert.Nil(api.OperatorAPITenantConfigurationHandler)
	suite.assert.Nil(api.OperatorAPIUpdateTenantConfigurationHandler)
	suite.assert.Nil(api.OperatorAPITenantSecurityHandler)
	suite.assert.Nil(api.OperatorAPIUpdateTenantSecurityHandler)
	suite.assert.Nil(api.OperatorAPISetTenantAdministratorsHandler)
	suite.assert.Nil(api.OperatorAPITenantIdentityProviderHandler)
	suite.assert.Nil(api.OperatorAPIUpdateTenantIdentityProviderHandler)
	suite.assert.Nil(api.OperatorAPIDeleteTenantHandler)
	suite.assert.Nil(api.OperatorAPIDeletePodHandler)
	suite.assert.Nil(api.OperatorAPIUpdateTenantHandler)
	suite.assert.Nil(api.OperatorAPITenantAddPoolHandler)
	suite.assert.Nil(api.OperatorAPIGetTenantUsageHandler)
	suite.assert.Nil(api.OperatorAPIGetTenantPodsHandler)
	suite.assert.Nil(api.OperatorAPIGetPodLogsHandler)
	suite.assert.Nil(api.OperatorAPIGetPodEventsHandler)
	suite.assert.Nil(api.OperatorAPIDescribePodHandler)
	suite.assert.Nil(api.OperatorAPIGetTenantMonitoringHandler)
	suite.assert.Nil(api.OperatorAPISetTenantMonitoringHandler)
	suite.assert.Nil(api.OperatorAPITenantUpdatePoolsHandler)
	suite.assert.Nil(api.OperatorAPITenantUpdateCertificateHandler)
	suite.assert.Nil(api.OperatorAPITenantUpdateEncryptionHandler)
	suite.assert.Nil(api.OperatorAPITenantDeleteEncryptionHandler)
	suite.assert.Nil(api.OperatorAPITenantEncryptionInfoHandler)
	suite.assert.Nil(api.OperatorAPIGetTenantYAMLHandler)
	suite.assert.Nil(api.OperatorAPIPutTenantYAMLHandler)
	suite.assert.Nil(api.OperatorAPIGetTenantEventsHandler)
	suite.assert.Nil(api.OperatorAPIUpdateTenantDomainsHandler)
}

func (suite *TenantTestSuite) assertHandlersAreNotNil(api *operations.OperatorAPI) {
	suite.assert.NotNil(api.OperatorAPICreateTenantHandler)
	suite.assert.NotNil(api.OperatorAPIListAllTenantsHandler)
	suite.assert.NotNil(api.OperatorAPIListTenantsHandler)
	suite.assert.NotNil(api.OperatorAPITenantDetailsHandler)
	suite.assert.NotNil(api.OperatorAPITenantConfigurationHandler)
	suite.assert.NotNil(api.OperatorAPIUpdateTenantConfigurationHandler)
	suite.assert.NotNil(api.OperatorAPITenantSecurityHandler)
	suite.assert.NotNil(api.OperatorAPIUpdateTenantSecurityHandler)
	suite.assert.NotNil(api.OperatorAPISetTenantAdministratorsHandler)
	suite.assert.NotNil(api.OperatorAPITenantIdentityProviderHandler)
	suite.assert.NotNil(api.OperatorAPIUpdateTenantIdentityProviderHandler)
	suite.assert.NotNil(api.OperatorAPIDeleteTenantHandler)
	suite.assert.NotNil(api.OperatorAPIDeletePodHandler)
	suite.assert.NotNil(api.OperatorAPIUpdateTenantHandler)
	suite.assert.NotNil(api.OperatorAPITenantAddPoolHandler)
	suite.assert.NotNil(api.OperatorAPIGetTenantUsageHandler)
	suite.assert.NotNil(api.OperatorAPIGetTenantPodsHandler)
	suite.assert.NotNil(api.OperatorAPIGetPodLogsHandler)
	suite.assert.NotNil(api.OperatorAPIGetPodEventsHandler)
	suite.assert.NotNil(api.OperatorAPIDescribePodHandler)
	suite.assert.NotNil(api.OperatorAPIGetTenantMonitoringHandler)
	suite.assert.NotNil(api.OperatorAPISetTenantMonitoringHandler)
	suite.assert.NotNil(api.OperatorAPITenantUpdatePoolsHandler)
	suite.assert.NotNil(api.OperatorAPITenantUpdateCertificateHandler)
	suite.assert.NotNil(api.OperatorAPITenantUpdateEncryptionHandler)
	suite.assert.NotNil(api.OperatorAPITenantDeleteEncryptionHandler)
	suite.assert.NotNil(api.OperatorAPITenantEncryptionInfoHandler)
	suite.assert.NotNil(api.OperatorAPIGetTenantYAMLHandler)
	suite.assert.NotNil(api.OperatorAPIPutTenantYAMLHandler)
	suite.assert.NotNil(api.OperatorAPIGetTenantEventsHandler)
	suite.assert.NotNil(api.OperatorAPIUpdateTenantDomainsHandler)
}

func (suite *TenantTestSuite) TestCreateTenantHandlerWithError() {
	params, api := suite.initCreateTenantRequest()
	response := api.OperatorAPICreateTenantHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.CreateTenantDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) TestCreateTenantWithWrongECP() {
	params, _ := suite.initCreateTenantRequest()
	params.Body.ErasureCodingParity = 1
	k8sClientCreateSecretMock = func(ctx context.Context, namespace string, secret *v1.Secret, opts metav1.CreateOptions) (*v1.Secret, error) {
		return nil, nil
	}
	_, err := createTenant(context.Background(), params, suite.k8sclient, &models.Principal{})
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestCreateTenantWithWrongActiveDirectoryConfig() {
	params, _ := suite.initCreateTenantRequest()
	params.Body.ErasureCodingParity = 2
	url := "mock-url"
	lookup := "mock-lookup"
	params.Body.Idp = &models.IdpConfiguration{
		ActiveDirectory: &models.IdpConfigurationActiveDirectory{
			SkipTLSVerification: true,
			ServerInsecure:      true,
			ServerStartTLS:      true,
			UserDNS:             []string{"mock-user"},
			URL:                 &url,
			LookupBindDn:        &lookup,
		},
	}
	k8sClientCreateSecretMock = func(ctx context.Context, namespace string, secret *v1.Secret, opts metav1.CreateOptions) (*v1.Secret, error) {
		if strings.HasPrefix(secret.Name, fmt.Sprintf("%s-user-", *params.Body.Name)) {
			return nil, errors.New("mock-create-error")
		}

		return nil, nil
	}
	_, err := createTenant(context.Background(), params, suite.k8sclient, &models.Principal{})
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestCreateTenantWithWrongBuiltInUsers() {
	params, _ := suite.initCreateTenantRequest()
	accessKey := "mock-access-key"
	secretKey := "mock-secret-key"
	params.Body.Idp = &models.IdpConfiguration{
		Keys: []*models.IdpConfigurationKeysItems0{
			{
				AccessKey: &accessKey,
				SecretKey: &secretKey,
			},
		},
	}
	k8sClientCreateSecretMock = func(ctx context.Context, namespace string, secret *v1.Secret, opts metav1.CreateOptions) (*v1.Secret, error) {
		if strings.HasPrefix(secret.Name, fmt.Sprintf("%s-user-", *params.Body.Name)) {
			return nil, errors.New("mock-create-error")
		}
		return nil, nil
	}
	_, err := createTenant(context.Background(), params, suite.k8sclient, &models.Principal{})
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestCreateTenantWithOIDCAndWrongServerCertificates() {
	params, _ := suite.initCreateTenantRequest()
	url := "mock-url"
	clientID := "mock-client-id"
	clientSecret := "mock-client-secret"
	claimName := "mock-claim-name"
	crt := "mock-crt"
	key := "mock-key"
	params.Body.Idp = &models.IdpConfiguration{
		Oidc: &models.IdpConfigurationOidc{
			ClientID:         &clientID,
			SecretID:         &clientSecret,
			ClaimName:        &claimName,
			ConfigurationURL: &url,
		},
	}
	params.Body.TLS = &models.TLSConfiguration{
		MinioServerCertificates: []*models.KeyPairConfiguration{
			{
				Crt: &crt,
				Key: &key,
			},
		},
	}
	k8sClientDeleteSecretMock = func(ctx context.Context, namespace, name string, opts metav1.DeleteOptions) error {
		return nil
	}
	_, err := createTenant(context.Background(), params, suite.k8sclient, &models.Principal{})
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestCreateTenantWithWrongClientCertificates() {
	params, _ := suite.initCreateTenantRequest()
	crt := "mock-crt"
	key := "mock-key"
	params.Body.TLS = &models.TLSConfiguration{
		MinioClientCertificates: []*models.KeyPairConfiguration{
			{
				Crt: &crt,
				Key: &key,
			},
		},
	}
	k8sClientDeleteSecretMock = func(ctx context.Context, namespace, name string, opts metav1.DeleteOptions) error {
		return nil
	}
	_, err := createTenant(context.Background(), params, suite.k8sclient, &models.Principal{})
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestCreateTenantWithWrongCAsCertificates() {
	params, _ := suite.initCreateTenantRequest()
	params.Body.TLS = &models.TLSConfiguration{
		MinioCAsCertificates: []string{"bW9jay1jcnQ="},
	}
	k8sClientDeleteSecretMock = func(ctx context.Context, namespace, name string, opts metav1.DeleteOptions) error {
		return nil
	}
	k8sClientCreateSecretMock = func(ctx context.Context, namespace string, secret *v1.Secret, opts metav1.CreateOptions) (*v1.Secret, error) {
		if strings.HasPrefix(secret.Name, fmt.Sprintf("%s-ca-certificate-", *params.Body.Name)) {
			return nil, errors.New("mock-create-error")
		}
		return nil, nil
	}
	_, err := createTenant(context.Background(), params, suite.k8sclient, &models.Principal{})
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestCreateTenantWithWrongMtlsCertificates() {
	params, _ := suite.initCreateTenantRequest()
	crt := "mock-crt"
	key := "mock-key"
	enableTLS := true
	params.Body.EnableTLS = &enableTLS
	params.Body.Encryption = &models.EncryptionConfiguration{
		MinioMtls: &models.KeyPairConfiguration{
			Crt: &crt,
			Key: &key,
		},
	}
	k8sClientDeleteSecretMock = func(ctx context.Context, namespace, name string, opts metav1.DeleteOptions) error {
		return nil
	}
	_, err := createTenant(context.Background(), params, suite.k8sclient, &models.Principal{})
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestCreateTenantWithWrongKESConfig() {
	params, _ := suite.initCreateTenantRequest()
	crt := "mock-crt"
	key := "mock-key"
	enableTLS := true
	params.Body.EnableTLS = &enableTLS
	params.Body.Encryption = &models.EncryptionConfiguration{
		ServerTLS: &models.KeyPairConfiguration{
			Crt: &crt,
			Key: &key,
		},
		Image:    "mock-image",
		Replicas: "1",
	}
	k8sClientDeleteSecretMock = func(ctx context.Context, namespace, name string, opts metav1.DeleteOptions) error {
		return nil
	}
	_, err := createTenant(context.Background(), params, suite.k8sclient, &models.Principal{})
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestCreateTenantWithWrongPool() {
	params, _ := suite.initCreateTenantRequest()
	params.Body.Annotations = map[string]string{"mock": "mock"}
	params.Body.Pools = []*models.Pool{{}}
	k8sClientCreateSecretMock = func(ctx context.Context, namespace string, secret *v1.Secret, opts metav1.CreateOptions) (*v1.Secret, error) {
		return nil, nil
	}
	k8sClientDeleteSecretMock = func(ctx context.Context, namespace, name string, opts metav1.DeleteOptions) error {
		return nil
	}
	_, err := createTenant(context.Background(), params, suite.k8sclient, &models.Principal{})
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestCreateTenantWithImageRegistryCreateError() {
	params, _ := suite.initCreateTenantRequest()
	params.Body.MountPath = "/mock-path"
	registry := "mock-registry"
	username := "mock-username"
	password := "mock-password"
	params.Body.ImageRegistry = &models.ImageRegistry{
		Registry: &registry,
		Username: &username,
		Password: &password,
	}

	k8sClientCreateSecretMock = func(ctx context.Context, namespace string, secret *v1.Secret, opts metav1.CreateOptions) (*v1.Secret, error) {
		if strings.HasPrefix(secret.Name, fmt.Sprintf("%s-secret", *params.Body.Name)) {
			return nil, nil
		}
		return nil, errors.New("mock-create-error")
	}
	k8sclientGetSecretMock = func(ctx context.Context, namespace, secretName string, opts metav1.GetOptions) (*corev1.Secret, error) {
		return nil, k8sErrors.NewNotFound(schema.GroupResource{}, "")
	}
	_, err := createTenant(context.Background(), params, suite.k8sclient, &models.Principal{})
	suite.assert.NotNil(err)
}
func (suite *TenantTestSuite) TestCreateTenantWithImageRegistryUpdateError() {
	params, _ := suite.initCreateTenantRequest()
	registry := "mock-registry"
	username := "mock-username"
	password := "mock-password"
	params.Body.ImageRegistry = &models.ImageRegistry{
		Registry: &registry,
		Username: &username,
		Password: &password,
	}
	k8sClientCreateSecretMock = func(ctx context.Context, namespace string, secret *v1.Secret, opts metav1.CreateOptions) (*v1.Secret, error) {
		return nil, nil
	}
	k8sClientUpdateSecretMock = func(ctx context.Context, namespace string, secret *v1.Secret, opts metav1.UpdateOptions) (*v1.Secret, error) {
		return nil, errors.New("mock-update-error")
	}
	k8sclientGetSecretMock = func(ctx context.Context, namespace, secretName string, opts metav1.GetOptions) (*corev1.Secret, error) {
		return &v1.Secret{}, nil
	}
	_, err := createTenant(context.Background(), params, suite.k8sclient, &models.Principal{})
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) initCreateTenantRequest() (params operator_api.CreateTenantParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	ns := "mock-namespace"
	name := "mock-tenant-name"
	params.Body = &models.CreateTenantRequest{
		Image:     "",
		Namespace: &ns,
		Name:      &name,
	}
	return params, api
}

func (suite *TenantTestSuite) TestListAllTenantsHandlerWithoutError() {
	params, api := suite.initListAllTenantsRequest()
	response := api.OperatorAPIListAllTenantsHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.ListTenantsDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initListAllTenantsRequest() (params operator_api.ListAllTenantsParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	return params, api
}

func (suite *TenantTestSuite) TestListTenantsHandlerWithoutError() {
	params, api := suite.initListTenantsRequest()
	response := api.OperatorAPIListTenantsHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.ListTenantsDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initListTenantsRequest() (params operator_api.ListTenantsParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	return params, api
}

func (suite *TenantTestSuite) TestTenantDetailsHandlerWithError() {
	params, api := suite.initTenantDetailsRequest()
	response := api.OperatorAPITenantDetailsHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.TenantDetailsDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initTenantDetailsRequest() (params operator_api.TenantDetailsParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	return params, api
}

func (suite *TenantTestSuite) TestTenantConfigurationHandlerWithError() {
	params, api := suite.initTenantConfigurationRequest()
	response := api.OperatorAPITenantConfigurationHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.TenantConfigurationDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initTenantConfigurationRequest() (params operator_api.TenantConfigurationParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	return params, api
}

func (suite *TenantTestSuite) TestParseTenantConfigurationWithoutError() {
	tenant := &miniov2.Tenant{
		Spec: miniov2.TenantSpec{
			Env: []corev1.EnvVar{
				{Name: "mock", Value: "mock-env"},
				{Name: "mock", Value: "mock-env-2"},
			},
		},
	}
	config, err := parseTenantConfiguration(context.Background(), suite.k8sclient, tenant)
	suite.assert.NotNil(config)
	suite.assert.Nil(err)
}

func (suite *TenantTestSuite) TestUpdateTenantConfigurationHandlerWithError() {
	params, api := suite.initUpdateTenantConfigurationRequest()
	response := api.OperatorAPIUpdateTenantConfigurationHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.UpdateTenantConfigurationDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initUpdateTenantConfigurationRequest() (params operator_api.UpdateTenantConfigurationParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	return params, api
}

func (suite *TenantTestSuite) TestTenantSecurityHandlerWithError() {
	params, api := suite.initTenantSecurityRequest()
	response := api.OperatorAPITenantSecurityHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.TenantSecurityDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initTenantSecurityRequest() (params operator_api.TenantSecurityParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	return params, api
}

func (suite *TenantTestSuite) TestGetTenantSecurityWithWrongServerCertificates() {
	ctx := context.Background()
	tenant := &miniov2.Tenant{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "mock-tenant",
			Namespace: "mock-namespace",
		},
		Spec: miniov2.TenantSpec{
			ExternalCertSecret: []*miniov2.LocalCertificateReference{{}},
		},
	}
	k8sclientGetSecretMock = func(ctx context.Context, namespace, secretName string, opts metav1.GetOptions) (*corev1.Secret, error) {
		return nil, errors.New("mock-get-error")
	}
	_, err := getTenantSecurity(ctx, suite.k8sclient, tenant)
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestGetTenantSecurityWithWrongClientCertificates() {
	ctx := context.Background()
	tenant := &miniov2.Tenant{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "mock-tenant",
			Namespace: "mock-namespace",
		},
		Spec: miniov2.TenantSpec{
			ExternalClientCertSecrets: []*miniov2.LocalCertificateReference{{}},
		},
	}
	k8sclientGetSecretMock = func(ctx context.Context, namespace, secretName string, opts metav1.GetOptions) (*corev1.Secret, error) {
		return nil, errors.New("mock-get-error")
	}
	_, err := getTenantSecurity(ctx, suite.k8sclient, tenant)
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestGetTenantSecurityWithWrongCACertificates() {
	ctx := context.Background()
	tenant := &miniov2.Tenant{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "mock-tenant",
			Namespace: "mock-namespace",
		},
		Spec: miniov2.TenantSpec{
			ExternalCaCertSecret: []*miniov2.LocalCertificateReference{{}},
		},
	}
	k8sclientGetSecretMock = func(ctx context.Context, namespace, secretName string, opts metav1.GetOptions) (*corev1.Secret, error) {
		return nil, errors.New("mock-get-error")
	}
	_, err := getTenantSecurity(ctx, suite.k8sclient, tenant)
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestGetTenantSecurityWithoutError() {
	ctx := context.Background()
	tenant := &miniov2.Tenant{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "mock-tenant",
			Namespace: "mock-namespace",
		},
		Spec: miniov2.TenantSpec{
			ExternalCaCertSecret: []*miniov2.LocalCertificateReference{},
		},
	}
	k8sclientGetSecretMock = func(ctx context.Context, namespace, secretName string, opts metav1.GetOptions) (*corev1.Secret, error) {
		return nil, errors.New("mock-get-error")
	}
	sec, err := getTenantSecurity(ctx, suite.k8sclient, tenant)
	suite.assert.NotNil(sec)
	suite.assert.Nil(err)
}

func (suite *TenantTestSuite) TestUpdateTenantSecurityHandlerWithError() {
	params, api := suite.initUpdateTenantSecurityRequest()
	response := api.OperatorAPIUpdateTenantSecurityHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.UpdateTenantSecurityDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) TestUpdateTenantSecurityWrongServerCertificates() {
	ctx := context.Background()
	opClientTenantGetMock = func(ctx context.Context, namespace string, tenantName string, options metav1.GetOptions) (*miniov2.Tenant, error) {
		return &miniov2.Tenant{
			Spec: miniov2.TenantSpec{
				ExternalCertSecret: []*miniov2.LocalCertificateReference{{
					Name: "mock-crt",
				}},
			},
		}, nil
	}
	params, _ := suite.initUpdateTenantSecurityRequest()
	params.Body.CustomCertificates.MinioServerCertificates = []*models.KeyPairConfiguration{{}}
	err := updateTenantSecurity(ctx, suite.opClient, suite.k8sclient, "mock-namespace", params)
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestUpdateTenantSecurityWrongClientCertificates() {
	ctx := context.Background()
	opClientTenantGetMock = func(ctx context.Context, namespace string, tenantName string, options metav1.GetOptions) (*miniov2.Tenant, error) {
		return &miniov2.Tenant{
			Spec: miniov2.TenantSpec{
				ExternalClientCertSecrets: []*miniov2.LocalCertificateReference{{
					Name: "mock-crt",
				}},
			},
		}, nil
	}
	params, _ := suite.initUpdateTenantSecurityRequest()
	params.Body.CustomCertificates.MinioClientCertificates = []*models.KeyPairConfiguration{{}}
	err := updateTenantSecurity(ctx, suite.opClient, suite.k8sclient, "mock-namespace", params)
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestUpdateTenantSecurityWrongCACertificates() {
	ctx := context.Background()
	opClientTenantGetMock = func(ctx context.Context, namespace string, tenantName string, options metav1.GetOptions) (*miniov2.Tenant, error) {
		return &miniov2.Tenant{
			Spec: miniov2.TenantSpec{
				ExternalCaCertSecret: []*miniov2.LocalCertificateReference{{
					Name: "mock-crt",
				}},
			},
		}, nil
	}
	params, _ := suite.initUpdateTenantSecurityRequest()
	params.Body.CustomCertificates.MinioCAsCertificates = []string{"mock-ca-certificate"}
	err := updateTenantSecurity(ctx, suite.opClient, suite.k8sclient, "mock-namespace", params)
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestUpdateTenantSecurityWrongCASecretCertificates() {
	ctx := context.Background()
	opClientTenantGetMock = func(ctx context.Context, namespace string, tenantName string, options metav1.GetOptions) (*miniov2.Tenant, error) {
		return &miniov2.Tenant{
			Spec: miniov2.TenantSpec{
				ExternalCaCertSecret: []*miniov2.LocalCertificateReference{{
					Name: "mock-crt",
				}},
			},
		}, nil
	}
	k8sClientCreateSecretMock = func(ctx context.Context, namespace string, secret *v1.Secret, opts metav1.CreateOptions) (*v1.Secret, error) {
		return nil, errors.New("mock-create-error")
	}
	params, _ := suite.initUpdateTenantSecurityRequest()
	params.Body.CustomCertificates.MinioCAsCertificates = []string{"bW9jaw=="}
	err := updateTenantSecurity(ctx, suite.opClient, suite.k8sclient, "mock-namespace", params)
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestUpdateTenantSecurityWrongSC() {
	ctx := context.Background()
	opClientTenantGetMock = func(ctx context.Context, namespace string, tenantName string, options metav1.GetOptions) (*miniov2.Tenant, error) {
		return &miniov2.Tenant{}, nil
	}
	params, _ := suite.initUpdateTenantSecurityRequest()
	err := updateTenantSecurity(ctx, suite.opClient, suite.k8sclient, "mock-namespace", params)
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestUpdateTenantSecurityWithoutError() {
	ctx := context.Background()
	opClientTenantGetMock = func(ctx context.Context, namespace string, tenantName string, options metav1.GetOptions) (*miniov2.Tenant, error) {
		return &miniov2.Tenant{
			Spec: miniov2.TenantSpec{
				Pools: []miniov2.Pool{{}},
			},
		}, nil
	}
	opClientTenantUpdateMock = func(ctx context.Context, tenant *miniov2.Tenant, opts metav1.UpdateOptions) (*miniov2.Tenant, error) {
		return &miniov2.Tenant{}, nil
	}
	runAsUser := "1000"
	runAsGroup := "1000"
	fsGroup := "1000"
	params, _ := suite.initUpdateTenantSecurityRequest()
	params.Body.SecurityContext = &models.SecurityContext{
		RunAsUser:  &runAsUser,
		RunAsGroup: &runAsGroup,
		FsGroup:    fsGroup,
	}
	err := updateTenantSecurity(ctx, suite.opClient, suite.k8sclient, "mock-namespace", params)
	suite.assert.Nil(err)
}

func (suite *TenantTestSuite) initUpdateTenantSecurityRequest() (params operator_api.UpdateTenantSecurityParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	params.Body = &models.UpdateTenantSecurityRequest{
		CustomCertificates: &models.UpdateTenantSecurityRequestCustomCertificates{
			SecretsToBeDeleted: []string{"mock-certificate"},
		},
	}

	return params, api
}

func (suite *TenantTestSuite) TestSetTenantAdministratorsHandlerWithError() {
	params, api := suite.initSetTenantAdministratorsRequest()
	response := api.OperatorAPISetTenantAdministratorsHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.SetTenantAdministratorsDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) TestSetTenantAdministratorsWithAdminClientError() {
	params, _ := suite.initSetTenantAdministratorsRequest()
	tenant := &miniov2.Tenant{}
	err := setTenantAdministrators(context.Background(), tenant, suite.k8sclient, params)
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestSetTenantAdministratorsWithUserPolicyError() {
	params, _ := suite.initSetTenantAdministratorsRequest()
	tenant := &miniov2.Tenant{
		Spec: miniov2.TenantSpec{
			Env: []corev1.EnvVar{
				{Name: "accesskey", Value: "mock-access"},
				{Name: "secretkey", Value: "mock-secret"},
			},
		},
	}
	params.Body.UserDNS = []string{"mock-user"}
	err := setTenantAdministrators(context.Background(), tenant, suite.k8sclient, params)
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestSetTenantAdministratorsWithGroupPolicyError() {
	params, _ := suite.initSetTenantAdministratorsRequest()
	tenant := &miniov2.Tenant{
		Spec: miniov2.TenantSpec{
			Env: []corev1.EnvVar{
				{Name: "accesskey", Value: "mock-access"},
				{Name: "secretkey", Value: "mock-secret"},
			},
		},
	}
	params.Body.GroupDNS = []string{"mock-user"}
	err := setTenantAdministrators(context.Background(), tenant, suite.k8sclient, params)
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestSetTenantAdministratorsWithoutError() {
	params, _ := suite.initSetTenantAdministratorsRequest()
	tenant := &miniov2.Tenant{
		Spec: miniov2.TenantSpec{
			Env: []corev1.EnvVar{
				{Name: "accesskey", Value: "mock-access"},
				{Name: "secretkey", Value: "mock-secret"},
			},
		},
	}
	err := setTenantAdministrators(context.Background(), tenant, suite.k8sclient, params)
	suite.assert.Nil(err)
}

func (suite *TenantTestSuite) initSetTenantAdministratorsRequest() (params operator_api.SetTenantAdministratorsParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	params.Body = &models.SetAdministratorsRequest{}
	return params, api
}

func (suite *TenantTestSuite) TestTenantIdentityProviderHandlerWithError() {
	params, api := suite.initTenantIdentityProviderRequest()
	response := api.OperatorAPITenantIdentityProviderHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.TenantIdentityProviderDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initTenantIdentityProviderRequest() (params operator_api.TenantIdentityProviderParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	return params, api
}

func (suite *TenantTestSuite) TestGetTenantIdentityProviderWithIDPConfig() {
	ctx := context.Background()
	tenant := &miniov2.Tenant{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "mock-tenant",
			Namespace: "mock-namespace",
		},
		Spec: miniov2.TenantSpec{
			Env: []corev1.EnvVar{
				{Name: "MINIO_IDENTITY_OPENID_CONFIG_URL", Value: "mock"},
				{Name: "MINIO_IDENTITY_OPENID_REDIRECT_URI", Value: "mock"},
				{Name: "MINIO_IDENTITY_OPENID_CLAIM_NAME", Value: "mock"},
				{Name: "MINIO_IDENTITY_OPENID_CLIENT_ID", Value: "mock"},
				{Name: "MINIO_IDENTITY_OPENID_CLIENT_SECRET", Value: "mock"},
			},
		},
	}
	res, err := getTenantIdentityProvider(ctx, suite.k8sclient, tenant)
	suite.assert.NotNil(res)
	suite.assert.NotNil(res.Oidc)
	suite.assert.Nil(err)
}

func (suite *TenantTestSuite) TestGetTenantIdentityProviderWithLDAPConfig() {
	ctx := context.Background()
	tenant := &miniov2.Tenant{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "mock-tenant",
			Namespace: "mock-namespace",
		},
		Spec: miniov2.TenantSpec{
			Env: []corev1.EnvVar{
				{Name: "MINIO_IDENTITY_LDAP_GROUP_SEARCH_BASE_DN", Value: "mock"},
				{Name: "MINIO_IDENTITY_LDAP_GROUP_SEARCH_FILTER", Value: "mock"},
				{Name: "MINIO_IDENTITY_LDAP_LOOKUP_BIND_DN", Value: "mock"},
				{Name: "MINIO_IDENTITY_LDAP_LOOKUP_BIND_PASSWORD", Value: "mock"},
				{Name: "MINIO_IDENTITY_LDAP_SERVER_INSECURE", Value: "mock"},
				{Name: "MINIO_IDENTITY_LDAP_SERVER_STARTTLS", Value: "mock"},
				{Name: "MINIO_IDENTITY_LDAP_TLS_SKIP_VERIFY", Value: "mock"},
				{Name: "MINIO_IDENTITY_LDAP_SERVER_ADDR", Value: "mock"},
				{Name: "MINIO_IDENTITY_LDAP_USER_DN_SEARCH_BASE_DN", Value: "mock"},
				{Name: "MINIO_IDENTITY_LDAP_USER_DN_SEARCH_FILTER", Value: "mock"},
			},
		},
	}
	res, err := getTenantIdentityProvider(ctx, suite.k8sclient, tenant)
	suite.assert.NotNil(res)
	suite.assert.NotNil(res.ActiveDirectory)
	suite.assert.Nil(err)
}

func (suite *TenantTestSuite) TestUpdateTenantIdentityProviderHandlerWithError() {
	params, api := suite.initUpdateTenantIdentityProviderRequest()
	response := api.OperatorAPIUpdateTenantIdentityProviderHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.UpdateTenantIdentityProviderDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initUpdateTenantIdentityProviderRequest() (params operator_api.UpdateTenantIdentityProviderParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	params.Body = &models.IdpConfiguration{}
	return params, api
}

func (suite *TenantTestSuite) TestUpdateTenantIdentityProviderWithTenantError() {
	ctx := context.Background()
	opClientTenantGetMock = func(ctx context.Context, namespace string, tenantName string, options metav1.GetOptions) (*miniov2.Tenant, error) {
		return nil, errors.New("mock")
	}
	params, _ := suite.initUpdateTenantIdentityProviderRequest()
	err := updateTenantIdentityProvider(ctx, suite.opClient, suite.k8sclient, "mock-namespace", params)
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestUpdateTenantIdentityProviderWithTenantConfigurationError() {
	ctx := context.Background()
	opClientTenantGetMock = func(ctx context.Context, namespace string, tenantName string, options metav1.GetOptions) (*miniov2.Tenant, error) {
		return &miniov2.Tenant{
			Spec: miniov2.TenantSpec{
				CredsSecret: &corev1.LocalObjectReference{
					Name: "mock",
				},
			},
		}, nil
	}
	k8sclientGetSecretMock = func(ctx context.Context, namespace, secretName string, opts metav1.GetOptions) (*corev1.Secret, error) {
		return nil, errors.New("mock-get-error")
	}
	params, _ := suite.initUpdateTenantIdentityProviderRequest()
	err := updateTenantIdentityProvider(ctx, suite.opClient, suite.k8sclient, "mock-namespace", params)
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestUpdateTenantIdentityProviderWithSecretCreationError() {
	ctx := context.Background()
	opClientTenantGetMock = func(ctx context.Context, namespace string, tenantName string, options metav1.GetOptions) (*miniov2.Tenant, error) {
		return &miniov2.Tenant{
			Spec: miniov2.TenantSpec{
				Env: []corev1.EnvVar{
					{Name: "mock", Value: "mock"},
				},
			},
		}, nil
	}
	k8sClientCreateSecretMock = func(ctx context.Context, namespace string, secret *v1.Secret, opts metav1.CreateOptions) (*v1.Secret, error) {
		return nil, errors.New("mock-create-error")
	}
	params, _ := suite.initUpdateTenantIdentityProviderRequest()
	err := updateTenantIdentityProvider(ctx, suite.opClient, suite.k8sclient, "mock-namespace", params)
	suite.assert.NotNil(err)
}

func (suite *TenantTestSuite) TestUpdateTenantIdentityProviderWithoutError() {
	ctx := context.Background()
	opClientTenantGetMock = func(ctx context.Context, namespace string, tenantName string, options metav1.GetOptions) (*miniov2.Tenant, error) {
		return &miniov2.Tenant{}, nil
	}
	opClientTenantUpdateMock = func(ctx context.Context, tenant *miniov2.Tenant, opts metav1.UpdateOptions) (*miniov2.Tenant, error) {
		return &miniov2.Tenant{}, nil
	}
	k8sClientCreateSecretMock = func(ctx context.Context, namespace string, secret *v1.Secret, opts metav1.CreateOptions) (*v1.Secret, error) {
		return nil, nil
	}
	params, _ := suite.initUpdateTenantIdentityProviderRequest()
	params.Body.ActiveDirectory = &models.IdpConfigurationActiveDirectory{}
	configURL := "mock"
	clientID := "mock"
	clientSecret := "mock"
	claimName := "mock"
	params.Body.Oidc = &models.IdpConfigurationOidc{
		ConfigurationURL: &configURL,
		ClientID:         &clientID,
		SecretID:         &clientSecret,
		ClaimName:        &claimName,
	}
	params.Body.ActiveDirectory = &models.IdpConfigurationActiveDirectory{
		URL:                 &configURL,
		LookupBindDn:        &claimName,
		SkipTLSVerification: true,
		ServerInsecure:      true,
		ServerStartTLS:      true,
	}
	err := updateTenantIdentityProvider(ctx, suite.opClient, suite.k8sclient, "mock-namespace", params)
	suite.assert.Nil(err)
}

func (suite *TenantTestSuite) TestDeleteTenantHandlerWithError() {
	params, api := suite.initDeleteTenantRequest()
	response := api.OperatorAPIDeleteTenantHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.DeleteTenantDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initDeleteTenantRequest() (params operator_api.DeleteTenantParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	return params, api
}

func (suite *TenantTestSuite) TestDeletePodHandlerWithoutError() {
	params, api := suite.initDeletePodRequest()
	response := api.OperatorAPIDeletePodHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.DeletePodDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initDeletePodRequest() (params operator_api.DeletePodParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	params.PodName = "mock-tenantmock-pod"
	return params, api
}

func (suite *TenantTestSuite) TestUpdateTenantHandlerWithError() {
	params, api := suite.initUpdateTenantRequest()
	response := api.OperatorAPIUpdateTenantHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.UpdateTenantDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initUpdateTenantRequest() (params operator_api.UpdateTenantParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	params.Body = &models.UpdateTenantRequest{
		Image: "mock-image",
	}
	return params, api
}

func (suite *TenantTestSuite) TestTenantAddPoolHandlerWithError() {
	params, api := suite.initTenantAddPoolRequest()
	response := api.OperatorAPITenantAddPoolHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.TenantAddPoolDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initTenantAddPoolRequest() (params operator_api.TenantAddPoolParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	return params, api
}

func (suite *TenantTestSuite) TestGetTenantUsageHandlerWithError() {
	params, api := suite.initGetTenantUsageRequest()
	response := api.OperatorAPIGetTenantUsageHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.GetTenantUsageDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initGetTenantUsageRequest() (params operator_api.GetTenantUsageParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	return params, api
}

func (suite *TenantTestSuite) TestGetTenantPodsHandlerWithoutError() {
	params, api := suite.initGetTenantPodsRequest()
	response := api.OperatorAPIGetTenantPodsHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.GetTenantPodsDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initGetTenantPodsRequest() (params operator_api.GetTenantPodsParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	return params, api
}

func (suite *TenantTestSuite) TestGetPodLogsHandlerWithError() {
	params, api := suite.initGetPodLogsRequest()
	response := api.OperatorAPIGetPodLogsHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.GetPodLogsDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initGetPodLogsRequest() (params operator_api.GetPodLogsParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	params.PodName = "mokc-pod"
	return params, api
}

func (suite *TenantTestSuite) TestGetPodEventsHandlerWithError() {
	params, api := suite.initGetPodEventsRequest()
	response := api.OperatorAPIGetPodEventsHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.GetPodEventsDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initGetPodEventsRequest() (params operator_api.GetPodEventsParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	params.PodName = "mock-pod"
	return params, api
}

func (suite *TenantTestSuite) TestDescribePodHandlerWithError() {
	params, api := suite.initDescribePodRequest()
	response := api.OperatorAPIDescribePodHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.DescribePodDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initDescribePodRequest() (params operator_api.DescribePodParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	params.PodName = "mock-pod"
	return params, api
}

func (suite *TenantTestSuite) TestGetTenantMonitoringHandlerWithError() {
	params, api := suite.initGetTenantMonitoringRequest()
	response := api.OperatorAPIGetTenantMonitoringHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.GetTenantMonitoringDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initGetTenantMonitoringRequest() (params operator_api.GetTenantMonitoringParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	return params, api
}

func (suite *TenantTestSuite) TestSetTenantMonitoringHandlerWithError() {
	params, api := suite.initSetTenantMonitoringRequest()
	response := api.OperatorAPISetTenantMonitoringHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.SetTenantMonitoringDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initSetTenantMonitoringRequest() (params operator_api.SetTenantMonitoringParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	return params, api
}

func (suite *TenantTestSuite) TestTenantUpdatePoolsHandlerWithError() {
	params, api := suite.initTenantUpdatePoolsRequest()
	response := api.OperatorAPITenantUpdatePoolsHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.TenantUpdatePoolsDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initTenantUpdatePoolsRequest() (params operator_api.TenantUpdatePoolsParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	params.Body = &models.PoolUpdateRequest{
		Pools: []*models.Pool{},
	}
	return params, api
}

func (suite *TenantTestSuite) TestTenantUpdateCertificateHandlerWithError() {
	params, api := suite.initTenantUpdateCertificateRequest()
	response := api.OperatorAPITenantUpdateCertificateHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.TenantUpdateCertificateDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initTenantUpdateCertificateRequest() (params operator_api.TenantUpdateCertificateParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	return params, api
}

func (suite *TenantTestSuite) TestTenantUpdateEncryptionHandlerWithError() {
	params, api := suite.initTenantUpdateEncryptionRequest()
	response := api.OperatorAPITenantUpdateEncryptionHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.TenantUpdateEncryptionDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initTenantUpdateEncryptionRequest() (params operator_api.TenantUpdateEncryptionParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	return params, api
}

func (suite *TenantTestSuite) TestTenantDeleteEncryptionHandlerWithError() {
	params, api := suite.initTenantDeleteEncryptionRequest()
	response := api.OperatorAPITenantDeleteEncryptionHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.TenantDeleteEncryptionDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initTenantDeleteEncryptionRequest() (params operator_api.TenantDeleteEncryptionParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	return params, api
}

func (suite *TenantTestSuite) TestTenantEncryptionInfoHandlerWithError() {
	params, api := suite.initTenantEncryptionInfoRequest()
	response := api.OperatorAPITenantEncryptionInfoHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.TenantEncryptionInfoDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initTenantEncryptionInfoRequest() (params operator_api.TenantEncryptionInfoParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	return params, api
}

func (suite *TenantTestSuite) TestGetTenantYAMLHandlerWithError() {
	params, api := suite.initGetTenantYAMLRequest()
	response := api.OperatorAPIGetTenantYAMLHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.GetTenantYAMLDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initGetTenantYAMLRequest() (params operator_api.GetTenantYAMLParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	return params, api
}

func (suite *TenantTestSuite) TestPutTenantYAMLHandlerWithError() {
	params, api := suite.initPutTenantYAMLRequest()
	response := api.OperatorAPIPutTenantYAMLHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.PutTenantYAMLDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initPutTenantYAMLRequest() (params operator_api.PutTenantYAMLParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	params.Body = &models.TenantYAML{
		Yaml: "",
	}
	return params, api
}

func (suite *TenantTestSuite) TestGetTenantEventsHandlerWithError() {
	params, api := suite.initGetTenantEventsRequest()
	response := api.OperatorAPIGetTenantEventsHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.GetTenantEventsDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initGetTenantEventsRequest() (params operator_api.GetTenantEventsParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace"
	params.Tenant = "mock-tenant"
	return params, api
}

func (suite *TenantTestSuite) TestUpdateTenantDomainsHandlerWithError() {
	params, api := suite.initUpdateTenantDomainsRequest()
	response := api.OperatorAPIUpdateTenantDomainsHandler.Handle(params, &models.Principal{})
	_, ok := response.(*operator_api.UpdateTenantDomainsDefault)
	suite.assert.True(ok)
}

func (suite *TenantTestSuite) initUpdateTenantDomainsRequest() (params operator_api.UpdateTenantDomainsParams, api operations.OperatorAPI) {
	registerTenantHandlers(&api)
	params.HTTPRequest = &http.Request{}
	params.Namespace = "mock-namespace-domain"
	params.Tenant = "mock-tenant-domain"
	params.Body = &models.UpdateDomainsRequest{
		Domains: &models.DomainsConfiguration{},
	}
	return params, api
}

func TestTenant(t *testing.T) {
	suite.Run(t, new(TenantTestSuite))
}
