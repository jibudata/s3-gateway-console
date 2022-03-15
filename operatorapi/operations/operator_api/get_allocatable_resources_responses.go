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

// GetAllocatableResourcesOKCode is the HTTP code returned for type GetAllocatableResourcesOK
const GetAllocatableResourcesOKCode int = 200

/*GetAllocatableResourcesOK A successful response.

swagger:response getAllocatableResourcesOK
*/
type GetAllocatableResourcesOK struct {

	/*
	  In: Body
	*/
	Payload *models.AllocatableResourcesResponse `json:"body,omitempty"`
}

// NewGetAllocatableResourcesOK creates GetAllocatableResourcesOK with default headers values
func NewGetAllocatableResourcesOK() *GetAllocatableResourcesOK {

	return &GetAllocatableResourcesOK{}
}

// WithPayload adds the payload to the get allocatable resources o k response
func (o *GetAllocatableResourcesOK) WithPayload(payload *models.AllocatableResourcesResponse) *GetAllocatableResourcesOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get allocatable resources o k response
func (o *GetAllocatableResourcesOK) SetPayload(payload *models.AllocatableResourcesResponse) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetAllocatableResourcesOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*GetAllocatableResourcesDefault Generic error response.

swagger:response getAllocatableResourcesDefault
*/
type GetAllocatableResourcesDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewGetAllocatableResourcesDefault creates GetAllocatableResourcesDefault with default headers values
func NewGetAllocatableResourcesDefault(code int) *GetAllocatableResourcesDefault {
	if code <= 0 {
		code = 500
	}

	return &GetAllocatableResourcesDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the get allocatable resources default response
func (o *GetAllocatableResourcesDefault) WithStatusCode(code int) *GetAllocatableResourcesDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the get allocatable resources default response
func (o *GetAllocatableResourcesDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the get allocatable resources default response
func (o *GetAllocatableResourcesDefault) WithPayload(payload *models.Error) *GetAllocatableResourcesDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get allocatable resources default response
func (o *GetAllocatableResourcesDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetAllocatableResourcesDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
