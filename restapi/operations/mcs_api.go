// Code generated by go-swagger; DO NOT EDIT.

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
//

package operations

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/loads"
	"github.com/go-openapi/runtime"
	"github.com/go-openapi/runtime/middleware"
	"github.com/go-openapi/runtime/security"
	"github.com/go-openapi/spec"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"

	"github.com/minio/mcs/models"
	"github.com/minio/mcs/restapi/operations/admin_api"
	"github.com/minio/mcs/restapi/operations/user_api"
)

// NewMcsAPI creates a new Mcs instance
func NewMcsAPI(spec *loads.Document) *McsAPI {
	return &McsAPI{
		handlers:            make(map[string]map[string]http.Handler),
		formats:             strfmt.Default,
		defaultConsumes:     "application/json",
		defaultProduces:     "application/json",
		customConsumers:     make(map[string]runtime.Consumer),
		customProducers:     make(map[string]runtime.Producer),
		PreServerShutdown:   func() {},
		ServerShutdown:      func() {},
		spec:                spec,
		ServeError:          errors.ServeError,
		BasicAuthenticator:  security.BasicAuth,
		APIKeyAuthenticator: security.APIKeyAuth,
		BearerAuthenticator: security.BearerAuth,

		JSONConsumer: runtime.JSONConsumer(),

		BinProducer:  runtime.ByteStreamProducer(),
		JSONProducer: runtime.JSONProducer(),

		AdminAPIAddGroupHandler: admin_api.AddGroupHandlerFunc(func(params admin_api.AddGroupParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.AddGroup has not yet been implemented")
		}),
		AdminAPIAddPolicyHandler: admin_api.AddPolicyHandlerFunc(func(params admin_api.AddPolicyParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.AddPolicy has not yet been implemented")
		}),
		AdminAPIAddUserHandler: admin_api.AddUserHandlerFunc(func(params admin_api.AddUserParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.AddUser has not yet been implemented")
		}),
		AdminAPIAdminInfoHandler: admin_api.AdminInfoHandlerFunc(func(params admin_api.AdminInfoParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.AdminInfo has not yet been implemented")
		}),
		AdminAPIArnListHandler: admin_api.ArnListHandlerFunc(func(params admin_api.ArnListParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.ArnList has not yet been implemented")
		}),
		UserAPIBucketInfoHandler: user_api.BucketInfoHandlerFunc(func(params user_api.BucketInfoParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation user_api.BucketInfo has not yet been implemented")
		}),
		UserAPIBucketSetPolicyHandler: user_api.BucketSetPolicyHandlerFunc(func(params user_api.BucketSetPolicyParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation user_api.BucketSetPolicy has not yet been implemented")
		}),
		AdminAPIConfigInfoHandler: admin_api.ConfigInfoHandlerFunc(func(params admin_api.ConfigInfoParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.ConfigInfo has not yet been implemented")
		}),
		UserAPICreateBucketEventHandler: user_api.CreateBucketEventHandlerFunc(func(params user_api.CreateBucketEventParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation user_api.CreateBucketEvent has not yet been implemented")
		}),
		UserAPIDeleteBucketHandler: user_api.DeleteBucketHandlerFunc(func(params user_api.DeleteBucketParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation user_api.DeleteBucket has not yet been implemented")
		}),
		AdminAPIGroupInfoHandler: admin_api.GroupInfoHandlerFunc(func(params admin_api.GroupInfoParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.GroupInfo has not yet been implemented")
		}),
		UserAPIListBucketEventsHandler: user_api.ListBucketEventsHandlerFunc(func(params user_api.ListBucketEventsParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation user_api.ListBucketEvents has not yet been implemented")
		}),
		UserAPIListBucketsHandler: user_api.ListBucketsHandlerFunc(func(params user_api.ListBucketsParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation user_api.ListBuckets has not yet been implemented")
		}),
		AdminAPIListConfigHandler: admin_api.ListConfigHandlerFunc(func(params admin_api.ListConfigParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.ListConfig has not yet been implemented")
		}),
		AdminAPIListGroupsHandler: admin_api.ListGroupsHandlerFunc(func(params admin_api.ListGroupsParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.ListGroups has not yet been implemented")
		}),
		AdminAPIListPoliciesHandler: admin_api.ListPoliciesHandlerFunc(func(params admin_api.ListPoliciesParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.ListPolicies has not yet been implemented")
		}),
		AdminAPIListUsersHandler: admin_api.ListUsersHandlerFunc(func(params admin_api.ListUsersParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.ListUsers has not yet been implemented")
		}),
		UserAPILoginHandler: user_api.LoginHandlerFunc(func(params user_api.LoginParams) middleware.Responder {
			return middleware.NotImplemented("operation user_api.Login has not yet been implemented")
		}),
		UserAPILoginDetailHandler: user_api.LoginDetailHandlerFunc(func(params user_api.LoginDetailParams) middleware.Responder {
			return middleware.NotImplemented("operation user_api.LoginDetail has not yet been implemented")
		}),
		UserAPIMakeBucketHandler: user_api.MakeBucketHandlerFunc(func(params user_api.MakeBucketParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation user_api.MakeBucket has not yet been implemented")
		}),
		AdminAPIPolicyInfoHandler: admin_api.PolicyInfoHandlerFunc(func(params admin_api.PolicyInfoParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.PolicyInfo has not yet been implemented")
		}),
		AdminAPIProfilingStartHandler: admin_api.ProfilingStartHandlerFunc(func(params admin_api.ProfilingStartParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.ProfilingStart has not yet been implemented")
		}),
		AdminAPIProfilingStopHandler: admin_api.ProfilingStopHandlerFunc(func(params admin_api.ProfilingStopParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.ProfilingStop has not yet been implemented")
		}),
		AdminAPIRemoveGroupHandler: admin_api.RemoveGroupHandlerFunc(func(params admin_api.RemoveGroupParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.RemoveGroup has not yet been implemented")
		}),
		AdminAPIRemovePolicyHandler: admin_api.RemovePolicyHandlerFunc(func(params admin_api.RemovePolicyParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.RemovePolicy has not yet been implemented")
		}),
		AdminAPIRemoveUserHandler: admin_api.RemoveUserHandlerFunc(func(params admin_api.RemoveUserParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.RemoveUser has not yet been implemented")
		}),
		AdminAPIRestartServiceHandler: admin_api.RestartServiceHandlerFunc(func(params admin_api.RestartServiceParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.RestartService has not yet been implemented")
		}),
		UserAPISessionCheckHandler: user_api.SessionCheckHandlerFunc(func(params user_api.SessionCheckParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation user_api.SessionCheck has not yet been implemented")
		}),
		AdminAPISetConfigHandler: admin_api.SetConfigHandlerFunc(func(params admin_api.SetConfigParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.SetConfig has not yet been implemented")
		}),
		AdminAPISetPolicyHandler: admin_api.SetPolicyHandlerFunc(func(params admin_api.SetPolicyParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.SetPolicy has not yet been implemented")
		}),
		AdminAPIUpdateGroupHandler: admin_api.UpdateGroupHandlerFunc(func(params admin_api.UpdateGroupParams, principal *models.Principal) middleware.Responder {
			return middleware.NotImplemented("operation admin_api.UpdateGroup has not yet been implemented")
		}),

		KeyAuth: func(token string, scopes []string) (*models.Principal, error) {
			return nil, errors.NotImplemented("oauth2 bearer auth (key) has not yet been implemented")
		},
		// default authorizer is authorized meaning no requests are blocked
		APIAuthorizer: security.Authorized(),
	}
}

/*McsAPI the mcs API */
type McsAPI struct {
	spec            *loads.Document
	context         *middleware.Context
	handlers        map[string]map[string]http.Handler
	formats         strfmt.Registry
	customConsumers map[string]runtime.Consumer
	customProducers map[string]runtime.Producer
	defaultConsumes string
	defaultProduces string
	Middleware      func(middleware.Builder) http.Handler

	// BasicAuthenticator generates a runtime.Authenticator from the supplied basic auth function.
	// It has a default implementation in the security package, however you can replace it for your particular usage.
	BasicAuthenticator func(security.UserPassAuthentication) runtime.Authenticator
	// APIKeyAuthenticator generates a runtime.Authenticator from the supplied token auth function.
	// It has a default implementation in the security package, however you can replace it for your particular usage.
	APIKeyAuthenticator func(string, string, security.TokenAuthentication) runtime.Authenticator
	// BearerAuthenticator generates a runtime.Authenticator from the supplied bearer token auth function.
	// It has a default implementation in the security package, however you can replace it for your particular usage.
	BearerAuthenticator func(string, security.ScopedTokenAuthentication) runtime.Authenticator

	// JSONConsumer registers a consumer for the following mime types:
	//   - application/json
	JSONConsumer runtime.Consumer

	// BinProducer registers a producer for the following mime types:
	//   - application/octet-stream
	BinProducer runtime.Producer
	// JSONProducer registers a producer for the following mime types:
	//   - application/json
	JSONProducer runtime.Producer

	// KeyAuth registers a function that takes an access token and a collection of required scopes and returns a principal
	// it performs authentication based on an oauth2 bearer token provided in the request
	KeyAuth func(string, []string) (*models.Principal, error)

	// APIAuthorizer provides access control (ACL/RBAC/ABAC) by providing access to the request and authenticated principal
	APIAuthorizer runtime.Authorizer

	// AdminAPIAddGroupHandler sets the operation handler for the add group operation
	AdminAPIAddGroupHandler admin_api.AddGroupHandler
	// AdminAPIAddPolicyHandler sets the operation handler for the add policy operation
	AdminAPIAddPolicyHandler admin_api.AddPolicyHandler
	// AdminAPIAddUserHandler sets the operation handler for the add user operation
	AdminAPIAddUserHandler admin_api.AddUserHandler
	// AdminAPIAdminInfoHandler sets the operation handler for the admin info operation
	AdminAPIAdminInfoHandler admin_api.AdminInfoHandler
	// AdminAPIArnListHandler sets the operation handler for the arn list operation
	AdminAPIArnListHandler admin_api.ArnListHandler
	// UserAPIBucketInfoHandler sets the operation handler for the bucket info operation
	UserAPIBucketInfoHandler user_api.BucketInfoHandler
	// UserAPIBucketSetPolicyHandler sets the operation handler for the bucket set policy operation
	UserAPIBucketSetPolicyHandler user_api.BucketSetPolicyHandler
	// AdminAPIConfigInfoHandler sets the operation handler for the config info operation
	AdminAPIConfigInfoHandler admin_api.ConfigInfoHandler
	// UserAPICreateBucketEventHandler sets the operation handler for the create bucket event operation
	UserAPICreateBucketEventHandler user_api.CreateBucketEventHandler
	// UserAPIDeleteBucketHandler sets the operation handler for the delete bucket operation
	UserAPIDeleteBucketHandler user_api.DeleteBucketHandler
	// AdminAPIGroupInfoHandler sets the operation handler for the group info operation
	AdminAPIGroupInfoHandler admin_api.GroupInfoHandler
	// UserAPIListBucketEventsHandler sets the operation handler for the list bucket events operation
	UserAPIListBucketEventsHandler user_api.ListBucketEventsHandler
	// UserAPIListBucketsHandler sets the operation handler for the list buckets operation
	UserAPIListBucketsHandler user_api.ListBucketsHandler
	// AdminAPIListConfigHandler sets the operation handler for the list config operation
	AdminAPIListConfigHandler admin_api.ListConfigHandler
	// AdminAPIListGroupsHandler sets the operation handler for the list groups operation
	AdminAPIListGroupsHandler admin_api.ListGroupsHandler
	// AdminAPIListPoliciesHandler sets the operation handler for the list policies operation
	AdminAPIListPoliciesHandler admin_api.ListPoliciesHandler
	// AdminAPIListUsersHandler sets the operation handler for the list users operation
	AdminAPIListUsersHandler admin_api.ListUsersHandler
	// UserAPILoginHandler sets the operation handler for the login operation
	UserAPILoginHandler user_api.LoginHandler
	// UserAPILoginDetailHandler sets the operation handler for the login detail operation
	UserAPILoginDetailHandler user_api.LoginDetailHandler
	// UserAPIMakeBucketHandler sets the operation handler for the make bucket operation
	UserAPIMakeBucketHandler user_api.MakeBucketHandler
	// AdminAPIPolicyInfoHandler sets the operation handler for the policy info operation
	AdminAPIPolicyInfoHandler admin_api.PolicyInfoHandler
	// AdminAPIProfilingStartHandler sets the operation handler for the profiling start operation
	AdminAPIProfilingStartHandler admin_api.ProfilingStartHandler
	// AdminAPIProfilingStopHandler sets the operation handler for the profiling stop operation
	AdminAPIProfilingStopHandler admin_api.ProfilingStopHandler
	// AdminAPIRemoveGroupHandler sets the operation handler for the remove group operation
	AdminAPIRemoveGroupHandler admin_api.RemoveGroupHandler
	// AdminAPIRemovePolicyHandler sets the operation handler for the remove policy operation
	AdminAPIRemovePolicyHandler admin_api.RemovePolicyHandler
	// AdminAPIRemoveUserHandler sets the operation handler for the remove user operation
	AdminAPIRemoveUserHandler admin_api.RemoveUserHandler
	// AdminAPIRestartServiceHandler sets the operation handler for the restart service operation
	AdminAPIRestartServiceHandler admin_api.RestartServiceHandler
	// UserAPISessionCheckHandler sets the operation handler for the session check operation
	UserAPISessionCheckHandler user_api.SessionCheckHandler
	// AdminAPISetConfigHandler sets the operation handler for the set config operation
	AdminAPISetConfigHandler admin_api.SetConfigHandler
	// AdminAPISetPolicyHandler sets the operation handler for the set policy operation
	AdminAPISetPolicyHandler admin_api.SetPolicyHandler
	// AdminAPIUpdateGroupHandler sets the operation handler for the update group operation
	AdminAPIUpdateGroupHandler admin_api.UpdateGroupHandler
	// ServeError is called when an error is received, there is a default handler
	// but you can set your own with this
	ServeError func(http.ResponseWriter, *http.Request, error)

	// PreServerShutdown is called before the HTTP(S) server is shutdown
	// This allows for custom functions to get executed before the HTTP(S) server stops accepting traffic
	PreServerShutdown func()

	// ServerShutdown is called when the HTTP(S) server is shut down and done
	// handling all active connections and does not accept connections any more
	ServerShutdown func()

	// Custom command line argument groups with their descriptions
	CommandLineOptionsGroups []swag.CommandLineOptionsGroup

	// User defined logger function.
	Logger func(string, ...interface{})
}

// SetDefaultProduces sets the default produces media type
func (o *McsAPI) SetDefaultProduces(mediaType string) {
	o.defaultProduces = mediaType
}

// SetDefaultConsumes returns the default consumes media type
func (o *McsAPI) SetDefaultConsumes(mediaType string) {
	o.defaultConsumes = mediaType
}

// SetSpec sets a spec that will be served for the clients.
func (o *McsAPI) SetSpec(spec *loads.Document) {
	o.spec = spec
}

// DefaultProduces returns the default produces media type
func (o *McsAPI) DefaultProduces() string {
	return o.defaultProduces
}

// DefaultConsumes returns the default consumes media type
func (o *McsAPI) DefaultConsumes() string {
	return o.defaultConsumes
}

// Formats returns the registered string formats
func (o *McsAPI) Formats() strfmt.Registry {
	return o.formats
}

// RegisterFormat registers a custom format validator
func (o *McsAPI) RegisterFormat(name string, format strfmt.Format, validator strfmt.Validator) {
	o.formats.Add(name, format, validator)
}

// Validate validates the registrations in the McsAPI
func (o *McsAPI) Validate() error {
	var unregistered []string

	if o.JSONConsumer == nil {
		unregistered = append(unregistered, "JSONConsumer")
	}

	if o.BinProducer == nil {
		unregistered = append(unregistered, "BinProducer")
	}
	if o.JSONProducer == nil {
		unregistered = append(unregistered, "JSONProducer")
	}

	if o.KeyAuth == nil {
		unregistered = append(unregistered, "KeyAuth")
	}

	if o.AdminAPIAddGroupHandler == nil {
		unregistered = append(unregistered, "admin_api.AddGroupHandler")
	}
	if o.AdminAPIAddPolicyHandler == nil {
		unregistered = append(unregistered, "admin_api.AddPolicyHandler")
	}
	if o.AdminAPIAddUserHandler == nil {
		unregistered = append(unregistered, "admin_api.AddUserHandler")
	}
	if o.AdminAPIAdminInfoHandler == nil {
		unregistered = append(unregistered, "admin_api.AdminInfoHandler")
	}
	if o.AdminAPIArnListHandler == nil {
		unregistered = append(unregistered, "admin_api.ArnListHandler")
	}
	if o.UserAPIBucketInfoHandler == nil {
		unregistered = append(unregistered, "user_api.BucketInfoHandler")
	}
	if o.UserAPIBucketSetPolicyHandler == nil {
		unregistered = append(unregistered, "user_api.BucketSetPolicyHandler")
	}
	if o.AdminAPIConfigInfoHandler == nil {
		unregistered = append(unregistered, "admin_api.ConfigInfoHandler")
	}
	if o.UserAPICreateBucketEventHandler == nil {
		unregistered = append(unregistered, "user_api.CreateBucketEventHandler")
	}
	if o.UserAPIDeleteBucketHandler == nil {
		unregistered = append(unregistered, "user_api.DeleteBucketHandler")
	}
	if o.AdminAPIGroupInfoHandler == nil {
		unregistered = append(unregistered, "admin_api.GroupInfoHandler")
	}
	if o.UserAPIListBucketEventsHandler == nil {
		unregistered = append(unregistered, "user_api.ListBucketEventsHandler")
	}
	if o.UserAPIListBucketsHandler == nil {
		unregistered = append(unregistered, "user_api.ListBucketsHandler")
	}
	if o.AdminAPIListConfigHandler == nil {
		unregistered = append(unregistered, "admin_api.ListConfigHandler")
	}
	if o.AdminAPIListGroupsHandler == nil {
		unregistered = append(unregistered, "admin_api.ListGroupsHandler")
	}
	if o.AdminAPIListPoliciesHandler == nil {
		unregistered = append(unregistered, "admin_api.ListPoliciesHandler")
	}
	if o.AdminAPIListUsersHandler == nil {
		unregistered = append(unregistered, "admin_api.ListUsersHandler")
	}
	if o.UserAPILoginHandler == nil {
		unregistered = append(unregistered, "user_api.LoginHandler")
	}
	if o.UserAPILoginDetailHandler == nil {
		unregistered = append(unregistered, "user_api.LoginDetailHandler")
	}
	if o.UserAPIMakeBucketHandler == nil {
		unregistered = append(unregistered, "user_api.MakeBucketHandler")
	}
	if o.AdminAPIPolicyInfoHandler == nil {
		unregistered = append(unregistered, "admin_api.PolicyInfoHandler")
	}
	if o.AdminAPIProfilingStartHandler == nil {
		unregistered = append(unregistered, "admin_api.ProfilingStartHandler")
	}
	if o.AdminAPIProfilingStopHandler == nil {
		unregistered = append(unregistered, "admin_api.ProfilingStopHandler")
	}
	if o.AdminAPIRemoveGroupHandler == nil {
		unregistered = append(unregistered, "admin_api.RemoveGroupHandler")
	}
	if o.AdminAPIRemovePolicyHandler == nil {
		unregistered = append(unregistered, "admin_api.RemovePolicyHandler")
	}
	if o.AdminAPIRemoveUserHandler == nil {
		unregistered = append(unregistered, "admin_api.RemoveUserHandler")
	}
	if o.AdminAPIRestartServiceHandler == nil {
		unregistered = append(unregistered, "admin_api.RestartServiceHandler")
	}
	if o.UserAPISessionCheckHandler == nil {
		unregistered = append(unregistered, "user_api.SessionCheckHandler")
	}
	if o.AdminAPISetConfigHandler == nil {
		unregistered = append(unregistered, "admin_api.SetConfigHandler")
	}
	if o.AdminAPISetPolicyHandler == nil {
		unregistered = append(unregistered, "admin_api.SetPolicyHandler")
	}
	if o.AdminAPIUpdateGroupHandler == nil {
		unregistered = append(unregistered, "admin_api.UpdateGroupHandler")
	}

	if len(unregistered) > 0 {
		return fmt.Errorf("missing registration: %s", strings.Join(unregistered, ", "))
	}

	return nil
}

// ServeErrorFor gets a error handler for a given operation id
func (o *McsAPI) ServeErrorFor(operationID string) func(http.ResponseWriter, *http.Request, error) {
	return o.ServeError
}

// AuthenticatorsFor gets the authenticators for the specified security schemes
func (o *McsAPI) AuthenticatorsFor(schemes map[string]spec.SecurityScheme) map[string]runtime.Authenticator {
	result := make(map[string]runtime.Authenticator)
	for name := range schemes {
		switch name {
		case "key":
			result[name] = o.BearerAuthenticator(name, func(token string, scopes []string) (interface{}, error) {
				return o.KeyAuth(token, scopes)
			})

		}
	}
	return result
}

// Authorizer returns the registered authorizer
func (o *McsAPI) Authorizer() runtime.Authorizer {
	return o.APIAuthorizer
}

// ConsumersFor gets the consumers for the specified media types.
// MIME type parameters are ignored here.
func (o *McsAPI) ConsumersFor(mediaTypes []string) map[string]runtime.Consumer {
	result := make(map[string]runtime.Consumer, len(mediaTypes))
	for _, mt := range mediaTypes {
		switch mt {
		case "application/json":
			result["application/json"] = o.JSONConsumer
		}

		if c, ok := o.customConsumers[mt]; ok {
			result[mt] = c
		}
	}
	return result
}

// ProducersFor gets the producers for the specified media types.
// MIME type parameters are ignored here.
func (o *McsAPI) ProducersFor(mediaTypes []string) map[string]runtime.Producer {
	result := make(map[string]runtime.Producer, len(mediaTypes))
	for _, mt := range mediaTypes {
		switch mt {
		case "application/octet-stream":
			result["application/octet-stream"] = o.BinProducer
		case "application/json":
			result["application/json"] = o.JSONProducer
		}

		if p, ok := o.customProducers[mt]; ok {
			result[mt] = p
		}
	}
	return result
}

// HandlerFor gets a http.Handler for the provided operation method and path
func (o *McsAPI) HandlerFor(method, path string) (http.Handler, bool) {
	if o.handlers == nil {
		return nil, false
	}
	um := strings.ToUpper(method)
	if _, ok := o.handlers[um]; !ok {
		return nil, false
	}
	if path == "/" {
		path = ""
	}
	h, ok := o.handlers[um][path]
	return h, ok
}

// Context returns the middleware context for the mcs API
func (o *McsAPI) Context() *middleware.Context {
	if o.context == nil {
		o.context = middleware.NewRoutableContext(o.spec, o, nil)
	}

	return o.context
}

func (o *McsAPI) initHandlerCache() {
	o.Context() // don't care about the result, just that the initialization happened
	if o.handlers == nil {
		o.handlers = make(map[string]map[string]http.Handler)
	}

	if o.handlers["POST"] == nil {
		o.handlers["POST"] = make(map[string]http.Handler)
	}
	o.handlers["POST"]["/groups"] = admin_api.NewAddGroup(o.context, o.AdminAPIAddGroupHandler)
	if o.handlers["POST"] == nil {
		o.handlers["POST"] = make(map[string]http.Handler)
	}
	o.handlers["POST"]["/policies"] = admin_api.NewAddPolicy(o.context, o.AdminAPIAddPolicyHandler)
	if o.handlers["POST"] == nil {
		o.handlers["POST"] = make(map[string]http.Handler)
	}
	o.handlers["POST"]["/users"] = admin_api.NewAddUser(o.context, o.AdminAPIAddUserHandler)
	if o.handlers["GET"] == nil {
		o.handlers["GET"] = make(map[string]http.Handler)
	}
	o.handlers["GET"]["/admin/info"] = admin_api.NewAdminInfo(o.context, o.AdminAPIAdminInfoHandler)
	if o.handlers["GET"] == nil {
		o.handlers["GET"] = make(map[string]http.Handler)
	}
	o.handlers["GET"]["/admin/arns"] = admin_api.NewArnList(o.context, o.AdminAPIArnListHandler)
	if o.handlers["GET"] == nil {
		o.handlers["GET"] = make(map[string]http.Handler)
	}
	o.handlers["GET"]["/buckets/{name}"] = user_api.NewBucketInfo(o.context, o.UserAPIBucketInfoHandler)
	if o.handlers["PUT"] == nil {
		o.handlers["PUT"] = make(map[string]http.Handler)
	}
	o.handlers["PUT"]["/buckets/{name}/set-policy"] = user_api.NewBucketSetPolicy(o.context, o.UserAPIBucketSetPolicyHandler)
	if o.handlers["GET"] == nil {
		o.handlers["GET"] = make(map[string]http.Handler)
	}
	o.handlers["GET"]["/configs/{name}"] = admin_api.NewConfigInfo(o.context, o.AdminAPIConfigInfoHandler)
	if o.handlers["POST"] == nil {
		o.handlers["POST"] = make(map[string]http.Handler)
	}
	o.handlers["POST"]["/buckets/{bucket_name}/events"] = user_api.NewCreateBucketEvent(o.context, o.UserAPICreateBucketEventHandler)
	if o.handlers["DELETE"] == nil {
		o.handlers["DELETE"] = make(map[string]http.Handler)
	}
	o.handlers["DELETE"]["/buckets/{name}"] = user_api.NewDeleteBucket(o.context, o.UserAPIDeleteBucketHandler)
	if o.handlers["GET"] == nil {
		o.handlers["GET"] = make(map[string]http.Handler)
	}
	o.handlers["GET"]["/groups/{name}"] = admin_api.NewGroupInfo(o.context, o.AdminAPIGroupInfoHandler)
	if o.handlers["GET"] == nil {
		o.handlers["GET"] = make(map[string]http.Handler)
	}
	o.handlers["GET"]["/buckets/{bucket_name}/events"] = user_api.NewListBucketEvents(o.context, o.UserAPIListBucketEventsHandler)
	if o.handlers["GET"] == nil {
		o.handlers["GET"] = make(map[string]http.Handler)
	}
	o.handlers["GET"]["/buckets"] = user_api.NewListBuckets(o.context, o.UserAPIListBucketsHandler)
	if o.handlers["GET"] == nil {
		o.handlers["GET"] = make(map[string]http.Handler)
	}
	o.handlers["GET"]["/configs"] = admin_api.NewListConfig(o.context, o.AdminAPIListConfigHandler)
	if o.handlers["GET"] == nil {
		o.handlers["GET"] = make(map[string]http.Handler)
	}
	o.handlers["GET"]["/groups"] = admin_api.NewListGroups(o.context, o.AdminAPIListGroupsHandler)
	if o.handlers["GET"] == nil {
		o.handlers["GET"] = make(map[string]http.Handler)
	}
	o.handlers["GET"]["/policies"] = admin_api.NewListPolicies(o.context, o.AdminAPIListPoliciesHandler)
	if o.handlers["GET"] == nil {
		o.handlers["GET"] = make(map[string]http.Handler)
	}
	o.handlers["GET"]["/users"] = admin_api.NewListUsers(o.context, o.AdminAPIListUsersHandler)
	if o.handlers["POST"] == nil {
		o.handlers["POST"] = make(map[string]http.Handler)
	}
	o.handlers["POST"]["/login"] = user_api.NewLogin(o.context, o.UserAPILoginHandler)
	if o.handlers["GET"] == nil {
		o.handlers["GET"] = make(map[string]http.Handler)
	}
	o.handlers["GET"]["/login"] = user_api.NewLoginDetail(o.context, o.UserAPILoginDetailHandler)
	if o.handlers["POST"] == nil {
		o.handlers["POST"] = make(map[string]http.Handler)
	}
	o.handlers["POST"]["/buckets"] = user_api.NewMakeBucket(o.context, o.UserAPIMakeBucketHandler)
	if o.handlers["GET"] == nil {
		o.handlers["GET"] = make(map[string]http.Handler)
	}
	o.handlers["GET"]["/policies/{name}"] = admin_api.NewPolicyInfo(o.context, o.AdminAPIPolicyInfoHandler)
	if o.handlers["POST"] == nil {
		o.handlers["POST"] = make(map[string]http.Handler)
	}
	o.handlers["POST"]["/profiling/start"] = admin_api.NewProfilingStart(o.context, o.AdminAPIProfilingStartHandler)
	if o.handlers["POST"] == nil {
		o.handlers["POST"] = make(map[string]http.Handler)
	}
	o.handlers["POST"]["/profiling/stop"] = admin_api.NewProfilingStop(o.context, o.AdminAPIProfilingStopHandler)
	if o.handlers["DELETE"] == nil {
		o.handlers["DELETE"] = make(map[string]http.Handler)
	}
	o.handlers["DELETE"]["/groups/{name}"] = admin_api.NewRemoveGroup(o.context, o.AdminAPIRemoveGroupHandler)
	if o.handlers["DELETE"] == nil {
		o.handlers["DELETE"] = make(map[string]http.Handler)
	}
	o.handlers["DELETE"]["/policies/{name}"] = admin_api.NewRemovePolicy(o.context, o.AdminAPIRemovePolicyHandler)
	if o.handlers["DELETE"] == nil {
		o.handlers["DELETE"] = make(map[string]http.Handler)
	}
	o.handlers["DELETE"]["/users/{name}"] = admin_api.NewRemoveUser(o.context, o.AdminAPIRemoveUserHandler)
	if o.handlers["POST"] == nil {
		o.handlers["POST"] = make(map[string]http.Handler)
	}
	o.handlers["POST"]["/service/restart"] = admin_api.NewRestartService(o.context, o.AdminAPIRestartServiceHandler)
	if o.handlers["GET"] == nil {
		o.handlers["GET"] = make(map[string]http.Handler)
	}
	o.handlers["GET"]["/session"] = user_api.NewSessionCheck(o.context, o.UserAPISessionCheckHandler)
	if o.handlers["PUT"] == nil {
		o.handlers["PUT"] = make(map[string]http.Handler)
	}
	o.handlers["PUT"]["/configs/{name}"] = admin_api.NewSetConfig(o.context, o.AdminAPISetConfigHandler)
	if o.handlers["PUT"] == nil {
		o.handlers["PUT"] = make(map[string]http.Handler)
	}
	o.handlers["PUT"]["/set-policy/{name}"] = admin_api.NewSetPolicy(o.context, o.AdminAPISetPolicyHandler)
	if o.handlers["PUT"] == nil {
		o.handlers["PUT"] = make(map[string]http.Handler)
	}
	o.handlers["PUT"]["/groups/{name}"] = admin_api.NewUpdateGroup(o.context, o.AdminAPIUpdateGroupHandler)
}

// Serve creates a http handler to serve the API over HTTP
// can be used directly in http.ListenAndServe(":8000", api.Serve(nil))
func (o *McsAPI) Serve(builder middleware.Builder) http.Handler {
	o.Init()

	if o.Middleware != nil {
		return o.Middleware(builder)
	}
	return o.context.APIHandler(builder)
}

// Init allows you to just initialize the handler cache, you can then recompose the middleware as you see fit
func (o *McsAPI) Init() {
	if len(o.handlers) == 0 {
		o.initHandlerCache()
	}
}

// RegisterConsumer allows you to add (or override) a consumer for a media type.
func (o *McsAPI) RegisterConsumer(mediaType string, consumer runtime.Consumer) {
	o.customConsumers[mediaType] = consumer
}

// RegisterProducer allows you to add (or override) a producer for a media type.
func (o *McsAPI) RegisterProducer(mediaType string, producer runtime.Producer) {
	o.customProducers[mediaType] = producer
}

// AddMiddlewareFor adds a http middleware to existing handler
func (o *McsAPI) AddMiddlewareFor(method, path string, builder middleware.Builder) {
	um := strings.ToUpper(method)
	if path == "/" {
		path = ""
	}
	o.Init()
	if h, ok := o.handlers[um][path]; ok {
		o.handlers[method][path] = builder(h)
	}
}
