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
	"strings"
	"time"

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
}

// getaAcountUsageInfo fetches a list of all buckets allowed to that particular client from MinIO Servers
func getaAcountUsageInfo(ctx context.Context, client MinioAdmin) ([]*models.Bucket, error) {
	info, err := client.accountUsageInfo(ctx)
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
	buckets, err := getaAcountUsageInfo(ctx, adminClient)
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
func makeBucket(ctx context.Context, client MinioClient, bucketName string) error {
	// creates a new bucket with bucketName with a context to control cancellations and timeouts.
	if err := client.makeBucketWithContext(ctx, bucketName, "us-east-1"); err != nil {
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

	if err := makeBucket(ctx, minioClient, *br.Name); err != nil {
		return prepareError(err)
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
