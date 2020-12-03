// This file is part of MinIO Console Server
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
	"fmt"
	"log"
	"strings"
	"time"

	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/replication"
	"github.com/minio/minio-go/v7/pkg/sse"

	"errors"

	"github.com/go-openapi/runtime/middleware"
	"github.com/go-openapi/swag"
	"github.com/minio/console/models"
	"github.com/minio/console/restapi/operations"
	"github.com/minio/console/restapi/operations/user_api"
	"github.com/minio/minio-go/v7/pkg/policy"
	minioIAMPolicy "github.com/minio/minio/pkg/iam/policy"
)

func registerBucketsHandlers(api *operations.ConsoleAPI) {
	// list buckets
	api.UserAPIListBucketsHandler = user_api.ListBucketsHandlerFunc(func(params user_api.ListBucketsParams, session *models.Principal) middleware.Responder {
		listBucketsResponse, err := getListBucketsResponse(session)
		if err != nil {
			return user_api.NewListBucketsDefault(int(err.Code)).WithPayload(err)
		}
		return user_api.NewListBucketsOK().WithPayload(listBucketsResponse)
	})
	// make bucket
	api.UserAPIMakeBucketHandler = user_api.MakeBucketHandlerFunc(func(params user_api.MakeBucketParams, session *models.Principal) middleware.Responder {
		if err := getMakeBucketResponse(session, params.Body); err != nil {
			return user_api.NewMakeBucketDefault(int(err.Code)).WithPayload(err)
		}
		return user_api.NewMakeBucketCreated()
	})
	// delete bucket
	api.UserAPIDeleteBucketHandler = user_api.DeleteBucketHandlerFunc(func(params user_api.DeleteBucketParams, session *models.Principal) middleware.Responder {
		if err := getDeleteBucketResponse(session, params); err != nil {
			return user_api.NewMakeBucketDefault(int(err.Code)).WithPayload(err)

		}
		return user_api.NewDeleteBucketNoContent()
	})
	// get bucket info
	api.UserAPIBucketInfoHandler = user_api.BucketInfoHandlerFunc(func(params user_api.BucketInfoParams, session *models.Principal) middleware.Responder {
		bucketInfoResp, err := getBucketInfoResponse(session, params)
		if err != nil {
			return user_api.NewBucketInfoDefault(int(err.Code)).WithPayload(err)
		}

		return user_api.NewBucketInfoOK().WithPayload(bucketInfoResp)
	})
	// set bucket policy
	api.UserAPIBucketSetPolicyHandler = user_api.BucketSetPolicyHandlerFunc(func(params user_api.BucketSetPolicyParams, session *models.Principal) middleware.Responder {
		bucketSetPolicyResp, err := getBucketSetPolicyResponse(session, params.Name, params.Body)
		if err != nil {
			return user_api.NewBucketSetPolicyDefault(int(err.Code)).WithPayload(err)
		}
		return user_api.NewBucketSetPolicyOK().WithPayload(bucketSetPolicyResp)
	})
	// get bucket versioning
	api.UserAPIGetBucketVersioningHandler = user_api.GetBucketVersioningHandlerFunc(func(params user_api.GetBucketVersioningParams, session *models.Principal) middleware.Responder {
		getBucketVersioning, err := getBucketVersionedResponse(session, params.BucketName)
		if err != nil {
			return user_api.NewGetBucketVersioningDefault(500).WithPayload(&models.Error{Code: 500, Message: swag.String(err.Error())})
		}
		return user_api.NewGetBucketVersioningOK().WithPayload(getBucketVersioning)
	})

	// get bucket replication
	api.UserAPIGetBucketReplicationHandler = user_api.GetBucketReplicationHandlerFunc(func(params user_api.GetBucketReplicationParams, session *models.Principal) middleware.Responder {
		getBucketReplication, err := getBucketReplicationdResponse(session, params.BucketName)
		if err != nil {
			return user_api.NewGetBucketReplicationDefault(500).WithPayload(&models.Error{Code: 500, Message: swag.String(err.Error())})
		}
		return user_api.NewGetBucketReplicationOK().WithPayload(getBucketReplication)
	})
	// get bucket replication
	api.UserAPIAddBucketReplicationHandler = user_api.AddBucketReplicationHandlerFunc(func(params user_api.AddBucketReplicationParams, session *models.Principal) middleware.Responder {
		err := getAddBucketReplicationdResponse(session, params.BucketName, &params)
		if err != nil {
			return user_api.NewAddBucketReplicationDefault(500).WithPayload(&models.Error{Code: 500, Message: swag.String(err.Error())})
		}
		return user_api.NewAddBucketReplicationCreated()
	})
	// enable bucket encryption
	api.UserAPIEnableBucketEncryptionHandler = user_api.EnableBucketEncryptionHandlerFunc(func(params user_api.EnableBucketEncryptionParams, session *models.Principal) middleware.Responder {
		if err := enableBucketEncryptionResponse(session, params); err != nil {
			return user_api.NewEnableBucketEncryptionDefault(int(err.Code)).WithPayload(err)
		}
		return user_api.NewEnableBucketEncryptionOK()
	})
	// disable bucket encryption
	api.UserAPIDisableBucketEncryptionHandler = user_api.DisableBucketEncryptionHandlerFunc(func(params user_api.DisableBucketEncryptionParams, session *models.Principal) middleware.Responder {
		if err := disableBucketEncryptionResponse(session, params); err != nil {
			return user_api.NewDisableBucketEncryptionDefault(int(err.Code)).WithPayload(err)
		}
		return user_api.NewDisableBucketEncryptionOK()
	})
	// get bucket encryption info
	api.UserAPIGetBucketEncryptionInfoHandler = user_api.GetBucketEncryptionInfoHandlerFunc(func(params user_api.GetBucketEncryptionInfoParams, session *models.Principal) middleware.Responder {
		response, err := getBucketEncryptionInfoResponse(session, params)
		if err != nil {
			return user_api.NewGetBucketEncryptionInfoDefault(int(err.Code)).WithPayload(err)
		}
		return user_api.NewGetBucketEncryptionInfoOK().WithPayload(response)
	})
	// set bucket retention config
	api.UserAPISetBucketRetentionConfigHandler = user_api.SetBucketRetentionConfigHandlerFunc(func(params user_api.SetBucketRetentionConfigParams, session *models.Principal) middleware.Responder {
		if err := getSetBucketRetentionConfigResponse(session, params); err != nil {
			return user_api.NewSetBucketRetentionConfigDefault(int(err.Code)).WithPayload(err)
		}
		return user_api.NewSetBucketRetentionConfigOK()
	})
}

func getAddBucketReplicationdResponse(session *models.Principal, bucketName string, params *user_api.AddBucketReplicationParams) error {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*20)
	defer cancel()

	mClient, err := newMinioClient(session)
	if err != nil {
		log.Println("error creating MinIO Client:", err)
		return err
	}
	// create a minioClient interface implementation
	// defining the client to be used
	minioClient := minioClient{client: mClient}

	// we will tolerate this call failing
	cfg, err := minioClient.getBucketReplication(ctx, bucketName)
	if err != nil {
		log.Println("error versioning bucket:", err)
	}

	// add rule

	maxPrio := 0
	for _, r := range cfg.Rules {
		if r.Priority > maxPrio {
			maxPrio = r.Priority
		}
	}
	maxPrio++

	s3Client, err := newS3BucketClient(session, bucketName, "")
	if err != nil {
		log.Println("error creating S3Client:", err)
		return err
	}
	// create a mc S3Client interface implementation
	// defining the client to be used
	mcClient := mcClient{client: s3Client}

	opts := replication.Options{
		RoleArn:    params.Body.Arn,
		Priority:   fmt.Sprintf("%d", maxPrio),
		RuleStatus: "enable",
		//ID:         cliCtx.String("id"),
		DestBucket: params.Body.DestinationBucket,
		Op:         replication.AddOption,
	}

	err2 := mcClient.setReplication(ctx, &cfg, opts)
	if err2 != nil {
		log.Println("error creating replication for bucket:", err2.Cause)
		return err2.Cause
	}
	return nil
}

func getBucketReplicationdResponse(session *models.Principal, bucketName string) (*models.BucketReplicationResponse, error) {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*20)
	defer cancel()

	mClient, err := newMinioClient(session)
	if err != nil {
		log.Println("error creating MinIO Client:", err)
		return nil, err
	}
	// create a minioClient interface implementation
	// defining the client to be used
	minioClient := minioClient{client: mClient}

	// we will tolerate this call failing
	res, err := minioClient.getBucketReplication(ctx, bucketName)
	if err != nil {
		log.Println("error versioning bucket:", err)
	}

	var rules []*models.BucketReplicationRule

	for _, rule := range res.Rules {
		rules = append(rules, &models.BucketReplicationRule{
			DeleteMarkerReplication: &models.BucketReplicationRuleMarker{Status: string(rule.DeleteMarkerReplication.Status)},
			Destination:             &models.BucketReplicationDestination{Bucket: rule.Destination.Bucket},
			ID:                      rule.ID,
			Priority:                int32(rule.Priority),
			Status:                  string(rule.Status),
		})
	}

	// serialize output
	listBucketsResponse := &models.BucketReplicationResponse{
		Rules: rules,
	}
	return listBucketsResponse, nil
}

func getBucketVersionedResponse(session *models.Principal, bucketName string) (*models.BucketVersioningResponse, error) {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*20)
	defer cancel()

	mClient, err := newMinioClient(session)
	if err != nil {
		log.Println("error creating MinIO Client:", err)
		return nil, err
	}
	// create a minioClient interface implementation
	// defining the client to be used
	minioClient := minioClient{client: mClient}

	// we will tolerate this call failing
	res, err := minioClient.getBucketVersioning(ctx, bucketName)
	if err != nil {
		log.Println("error versioning bucket:", err)
	}

	// serialize output
	listBucketsResponse := &models.BucketVersioningResponse{
		IsVersioned: res.Status == "Enabled",
	}
	return listBucketsResponse, nil
}

// getAccountInfo fetches a list of all buckets allowed to that particular client from MinIO Servers
func getAccountInfo(ctx context.Context, client MinioAdmin) ([]*models.Bucket, error) {
	info, err := client.accountInfo(ctx)
	if err != nil {
		return []*models.Bucket{}, err
	}
	var bucketInfos []*models.Bucket
	for _, bucket := range info.Buckets {
		bucketElem := &models.Bucket{Name: swag.String(bucket.Name), CreationDate: bucket.Created.String(), Size: int64(bucket.Size)}
		bucketInfos = append(bucketInfos, bucketElem)
	}
	return bucketInfos, nil
}

// getListBucketsResponse performs listBuckets() and serializes it to the handler's output
func getListBucketsResponse(session *models.Principal) (*models.ListBucketsResponse, *models.Error) {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*20)
	defer cancel()

	mAdmin, err := newMAdminClient(session)
	if err != nil {
		return nil, prepareError(err)
	}
	// create a minioClient interface implementation
	// defining the client to be used
	adminClient := adminClient{client: mAdmin}
	buckets, err := getAccountInfo(ctx, adminClient)
	if err != nil {
		return nil, prepareError(err)
	}

	// serialize output
	listBucketsResponse := &models.ListBucketsResponse{
		Buckets: buckets,
		Total:   int64(len(buckets)),
	}
	return listBucketsResponse, nil
}

// makeBucket creates a bucket for an specific minio client
func makeBucket(ctx context.Context, client MinioClient, bucketName string, objectLocking bool) error {
	// creates a new bucket with bucketName with a context to control cancellations and timeouts.
	if err := client.makeBucketWithContext(ctx, bucketName, "us-east-1", objectLocking); err != nil {
		return err
	}
	return nil
}

// getMakeBucketResponse performs makeBucket() to create a bucket with its access policy
func getMakeBucketResponse(session *models.Principal, br *models.MakeBucketRequest) *models.Error {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*20)
	defer cancel()
	// bucket request needed to proceed
	if br == nil {
		return prepareError(errBucketBodyNotInRequest)
	}
	mClient, err := newMinioClient(session)
	if err != nil {
		return prepareError(err)
	}
	// create a minioClient interface implementation
	// defining the client to be used
	minioClient := minioClient{client: mClient}

	if err := makeBucket(ctx, minioClient, *br.Name, br.Versioning); err != nil {
		return prepareError(err)
	}

	// if it has support for
	if br.Quota != nil && br.Quota.Enabled != nil && *br.Quota.Enabled {
		mAdmin, err := newMAdminClient(session)
		if err != nil {
			return prepareError(err)
		}
		// create a minioClient interface implementation
		// defining the client to be used
		adminClient := adminClient{client: mAdmin}
		// we will tolerate this call failing
		if err := setBucketQuota(ctx, &adminClient, br.Name, br.Quota); err != nil {
			log.Println("error versioning bucket:", err)
		}
	}
	return nil
}

// setBucketAccessPolicy set the access permissions on an existing bucket.
func setBucketAccessPolicy(ctx context.Context, client MinioClient, bucketName string, access models.BucketAccess) error {
	if strings.TrimSpace(bucketName) == "" {
		return fmt.Errorf("error: bucket name not present")
	}
	if strings.TrimSpace(string(access)) == "" {
		return fmt.Errorf("error: bucket access not present")
	}
	// Prepare policyJSON corresponding to the access type
	if access != models.BucketAccessPRIVATE && access != models.BucketAccessPUBLIC {
		return fmt.Errorf("access: `%s` not supported", access)
	}
	bucketPolicy := consoleAccess2policyAccess(access)

	bucketAccessPolicy := policy.BucketAccessPolicy{Version: minioIAMPolicy.DefaultVersion}
	bucketAccessPolicy.Statements = policy.SetPolicy(bucketAccessPolicy.Statements,
		policy.BucketPolicy(bucketPolicy), bucketName, "")
	// implemented like minio/mc/ s3Client.SetAccess()
	if len(bucketAccessPolicy.Statements) == 0 {
		return client.setBucketPolicyWithContext(ctx, bucketName, "")
	}
	policyJSON, err := json.Marshal(bucketAccessPolicy)
	if err != nil {
		return err
	}
	return client.setBucketPolicyWithContext(ctx, bucketName, string(policyJSON))
}

// getBucketSetPolicyResponse calls setBucketAccessPolicy() to set a access policy to a bucket
//   and returns the serialized output.
func getBucketSetPolicyResponse(session *models.Principal, bucketName string, req *models.SetBucketPolicyRequest) (*models.Bucket, *models.Error) {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*20)
	defer cancel()

	mClient, err := newMinioClient(session)
	if err != nil {
		return nil, prepareError(err)
	}
	// create a minioClient interface implementation
	// defining the client to be used
	minioClient := minioClient{client: mClient}

	// set bucket access policy
	if err := setBucketAccessPolicy(ctx, minioClient, bucketName, req.Access); err != nil {
		return nil, prepareError(err)
	}
	// get updated bucket details and return it
	bucket, err := getBucketInfo(minioClient, bucketName)
	if err != nil {
		return nil, prepareError(err)
	}
	return bucket, nil
}

// removeBucket deletes a bucket
func removeBucket(client MinioClient, bucketName string) error {
	return client.removeBucket(context.Background(), bucketName)
}

// getDeleteBucketResponse performs removeBucket() to delete a bucket
func getDeleteBucketResponse(session *models.Principal, params user_api.DeleteBucketParams) *models.Error {
	if params.Name == "" {
		return prepareError(errBucketNameNotInRequest)
	}
	bucketName := params.Name

	mClient, err := newMinioClient(session)
	if err != nil {
		return prepareError(err)
	}
	// create a minioClient interface implementation
	// defining the client to be used
	minioClient := minioClient{client: mClient}
	if err := removeBucket(minioClient, bucketName); err != nil {
		return prepareError(err)
	}
	return nil
}

// getBucketInfo return bucket information including name, policy access, size and creation date
func getBucketInfo(client MinioClient, bucketName string) (*models.Bucket, error) {
	policyStr, err := client.getBucketPolicy(context.Background(), bucketName)
	if err != nil {
		return nil, err
	}
	var policyAccess policy.BucketPolicy
	if policyStr == "" {
		policyAccess = policy.BucketPolicyNone
	} else {
		var p policy.BucketAccessPolicy
		if err = json.Unmarshal([]byte(policyStr), &p); err != nil {
			return nil, err
		}
		policyAccess = policy.GetPolicy(p.Statements, bucketName, "")
	}
	bucketAccess := policyAccess2consoleAccess(policyAccess)
	if bucketAccess == models.BucketAccessPRIVATE && policyStr != "" {
		bucketAccess = models.BucketAccessCUSTOM
	}
	bucket := &models.Bucket{
		Name:         &bucketName,
		Access:       bucketAccess,
		CreationDate: "", // to be implemented
		Size:         0,  // to be implemented
	}
	return bucket, nil
}

// getBucketInfoResponse calls getBucketInfo() to get the bucket's info
func getBucketInfoResponse(session *models.Principal, params user_api.BucketInfoParams) (*models.Bucket, *models.Error) {
	mClient, err := newMinioClient(session)
	if err != nil {
		return nil, prepareError(err)
	}
	// create a minioClient interface implementation
	// defining the client to be used
	minioClient := minioClient{client: mClient}

	bucket, err := getBucketInfo(minioClient, params.Name)
	if err != nil {
		return nil, prepareError(err)
	}
	return bucket, nil

}

// policyAccess2consoleAccess gets the equivalent of policy.BucketPolicy to models.BucketAccess
func policyAccess2consoleAccess(bucketPolicy policy.BucketPolicy) (bucketAccess models.BucketAccess) {
	switch bucketPolicy {
	case policy.BucketPolicyReadWrite:
		bucketAccess = models.BucketAccessPUBLIC
	case policy.BucketPolicyNone:
		bucketAccess = models.BucketAccessPRIVATE
	default:
		bucketAccess = models.BucketAccessCUSTOM
	}
	return bucketAccess
}

// consoleAccess2policyAccess gets the equivalent of models.BucketAccess to policy.BucketPolicy
func consoleAccess2policyAccess(bucketAccess models.BucketAccess) (bucketPolicy policy.BucketPolicy) {
	switch bucketAccess {
	case models.BucketAccessPUBLIC:
		bucketPolicy = policy.BucketPolicyReadWrite
	case models.BucketAccessPRIVATE:
		bucketPolicy = policy.BucketPolicyNone
	}
	return bucketPolicy
}

// enableBucketEncryption will enable bucket encryption based on two encryption algorithms, sse-s3 (server side encryption with external KMS) or sse-kms (aws s3 kms key)
func enableBucketEncryption(ctx context.Context, client MinioClient, bucketName string, encryptionType models.BucketEncryptionType, kmsKeyID string) error {
	var config *sse.Configuration
	switch encryptionType {
	case models.BucketEncryptionTypeSseKms:
		config = sse.NewConfigurationSSEKMS(kmsKeyID)
	case models.BucketEncryptionTypeSseS3:
		config = sse.NewConfigurationSSES3()
	default:
		return errInvalidEncryptionAlgorithm
	}
	return client.setBucketEncryption(ctx, bucketName, config)
}

// enableBucketEncryptionResponse calls enableBucketEncryption() to create new encryption configuration for provided bucket name
func enableBucketEncryptionResponse(session *models.Principal, params user_api.EnableBucketEncryptionParams) *models.Error {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*20)
	defer cancel()
	mClient, err := newMinioClient(session)
	if err != nil {
		return prepareError(err)
	}
	// create a minioClient interface implementation
	// defining the client to be used
	minioClient := minioClient{client: mClient}
	if err := enableBucketEncryption(ctx, minioClient, params.BucketName, params.Body.EncType, params.Body.KmsKeyID); err != nil {
		return prepareError(err)
	}
	return nil
}

// disableBucketEncryption will disable bucket for the provided bucket name
func disableBucketEncryption(ctx context.Context, client MinioClient, bucketName string) error {
	return client.removeBucketEncryption(ctx, bucketName)
}

// disableBucketEncryptionResponse calls disableBucketEncryption()
func disableBucketEncryptionResponse(session *models.Principal, params user_api.DisableBucketEncryptionParams) *models.Error {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*20)
	defer cancel()
	mClient, err := newMinioClient(session)
	if err != nil {
		return prepareError(err)
	}
	// create a minioClient interface implementation
	// defining the client to be used
	minioClient := minioClient{client: mClient}
	if err := disableBucketEncryption(ctx, minioClient, params.BucketName); err != nil {
		return prepareError(err)
	}
	return nil
}

func getBucketEncryptionInfo(ctx context.Context, client MinioClient, bucketName string) (*models.BucketEncryptionInfo, error) {
	bucketInfo, err := client.getBucketEncryption(ctx, bucketName)
	if err != nil {
		return nil, err
	}
	if len(bucketInfo.Rules) == 0 {
		return nil, errorGeneric
	}
	return &models.BucketEncryptionInfo{Algorithm: bucketInfo.Rules[0].Apply.SSEAlgorithm, KmsMasterKeyID: bucketInfo.Rules[0].Apply.KmsMasterKeyID}, nil
}

func getBucketEncryptionInfoResponse(session *models.Principal, params user_api.GetBucketEncryptionInfoParams) (*models.BucketEncryptionInfo, *models.Error) {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*20)
	defer cancel()
	mClient, err := newMinioClient(session)
	if err != nil {
		return nil, prepareError(err)
	}
	// create a minioClient interface implementation
	// defining the client to be used
	minioClient := minioClient{client: mClient}
	bucketInfo, err := getBucketEncryptionInfo(ctx, minioClient, params.BucketName)
	if err != nil {
		return nil, prepareError(errSSENotConfigured, err)
	}
	return bucketInfo, nil
}

// setBucketRetentionConfig sets object lock configuration on a bucket
func setBucketRetentionConfig(ctx context.Context, client MinioClient, bucketName string, mode models.ObjectRetentionMode, unit models.ObjectRetentionUnit, validity *int32) error {
	if validity == nil {
		return errors.New("retention validity can't be nil")
	}

	var retentionMode minio.RetentionMode
	switch mode {
	case models.ObjectRetentionModeGovernance:
		retentionMode = minio.Governance
	case models.ObjectRetentionModeCompliance:
		retentionMode = minio.Compliance
	default:
		return errors.New("invalid retention mode")
	}

	var retentionUnit minio.ValidityUnit
	switch unit {
	case models.ObjectRetentionUnitDays:
		retentionUnit = minio.Days
	case models.ObjectRetentionUnitYears:
		retentionUnit = minio.Years
	default:
		return errors.New("invalid retention unit")
	}

	retentionValidity := uint(*validity)
	return client.setObjectLockConfig(ctx, bucketName, &retentionMode, &retentionValidity, &retentionUnit)
}

func getSetBucketRetentionConfigResponse(session *models.Principal, params user_api.SetBucketRetentionConfigParams) *models.Error {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*20)
	defer cancel()
	mClient, err := newMinioClient(session)
	if err != nil {
		return prepareError(err)
	}
	// create a minioClient interface implementation
	// defining the client to be used
	minioClient := minioClient{client: mClient}

	err = setBucketRetentionConfig(ctx, minioClient, params.BucketName, params.Body.Mode, params.Body.Unit, params.Body.Validity)
	if err != nil {
		return prepareError(err)
	}
	return nil
}
