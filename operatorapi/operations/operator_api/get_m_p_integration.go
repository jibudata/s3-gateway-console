// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
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

package operator_api

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the generate command

import (
	"context"
	"net/http"

	"github.com/go-openapi/runtime/middleware"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"

	"github.com/minio/console/models"
)

// GetMPIntegrationHandlerFunc turns a function with the right signature into a get m p integration handler
type GetMPIntegrationHandlerFunc func(GetMPIntegrationParams, *models.Principal) middleware.Responder

// Handle executing the request and returning a response
func (fn GetMPIntegrationHandlerFunc) Handle(params GetMPIntegrationParams, principal *models.Principal) middleware.Responder {
	return fn(params, principal)
}

// GetMPIntegrationHandler interface for that can handle valid get m p integration params
type GetMPIntegrationHandler interface {
	Handle(GetMPIntegrationParams, *models.Principal) middleware.Responder
}

// NewGetMPIntegration creates a new http.Handler for the get m p integration operation
func NewGetMPIntegration(ctx *middleware.Context, handler GetMPIntegrationHandler) *GetMPIntegration {
	return &GetMPIntegration{Context: ctx, Handler: handler}
}

/*
	GetMPIntegration swagger:route GET /mp-integration OperatorAPI getMPIntegration

Returns email registered for marketplace integration
*/
type GetMPIntegration struct {
	Context *middleware.Context
	Handler GetMPIntegrationHandler
}

func (o *GetMPIntegration) ServeHTTP(rw http.ResponseWriter, r *http.Request) {
	route, rCtx, _ := o.Context.RouteInfo(r)
	if rCtx != nil {
		*r = *rCtx
	}
	var Params = NewGetMPIntegrationParams()
	uprinc, aCtx, err := o.Context.Authorize(r, route)
	if err != nil {
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}
	if aCtx != nil {
		*r = *aCtx
	}
	var principal *models.Principal
	if uprinc != nil {
		principal = uprinc.(*models.Principal) // this is really a models.Principal, I promise
	}

	if err := o.Context.BindValidRequest(r, route, &Params); err != nil { // bind params
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}

	res := o.Handler.Handle(Params, principal) // actually handle the request
	o.Context.Respond(rw, r, route.Produces, route, res)

}

// GetMPIntegrationOKBody get m p integration o k body
//
// swagger:model GetMPIntegrationOKBody
type GetMPIntegrationOKBody struct {

	// is email set
	IsEmailSet bool `json:"isEmailSet,omitempty"`
}

// Validate validates this get m p integration o k body
func (o *GetMPIntegrationOKBody) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this get m p integration o k body based on context it is used
func (o *GetMPIntegrationOKBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *GetMPIntegrationOKBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *GetMPIntegrationOKBody) UnmarshalBinary(b []byte) error {
	var res GetMPIntegrationOKBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}
