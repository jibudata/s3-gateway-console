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
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// TenantAddPoolCreatedCode is the HTTP code returned for type TenantAddPoolCreated
const TenantAddPoolCreatedCode int = 201

/*
TenantAddPoolCreated A successful response.

swagger:response tenantAddPoolCreated
*/
type TenantAddPoolCreated struct {
}

// NewTenantAddPoolCreated creates TenantAddPoolCreated with default headers values
func NewTenantAddPoolCreated() *TenantAddPoolCreated {

	return &TenantAddPoolCreated{}
}

// WriteResponse to the client
func (o *TenantAddPoolCreated) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(201)
}

/*
TenantAddPoolDefault Generic error response.

swagger:response tenantAddPoolDefault
*/
type TenantAddPoolDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewTenantAddPoolDefault creates TenantAddPoolDefault with default headers values
func NewTenantAddPoolDefault(code int) *TenantAddPoolDefault {
	if code <= 0 {
		code = 500
	}

	return &TenantAddPoolDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the tenant add pool default response
func (o *TenantAddPoolDefault) WithStatusCode(code int) *TenantAddPoolDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the tenant add pool default response
func (o *TenantAddPoolDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the tenant add pool default response
func (o *TenantAddPoolDefault) WithPayload(payload *models.Error) *TenantAddPoolDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the tenant add pool default response
func (o *TenantAddPoolDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *TenantAddPoolDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
