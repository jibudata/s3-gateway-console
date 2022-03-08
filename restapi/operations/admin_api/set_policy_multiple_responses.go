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

package admin_api

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// SetPolicyMultipleNoContentCode is the HTTP code returned for type SetPolicyMultipleNoContent
const SetPolicyMultipleNoContentCode int = 204

/*SetPolicyMultipleNoContent A successful response.

swagger:response setPolicyMultipleNoContent
*/
type SetPolicyMultipleNoContent struct {
}

// NewSetPolicyMultipleNoContent creates SetPolicyMultipleNoContent with default headers values
func NewSetPolicyMultipleNoContent() *SetPolicyMultipleNoContent {

	return &SetPolicyMultipleNoContent{}
}

// WriteResponse to the client
func (o *SetPolicyMultipleNoContent) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(204)
}

/*SetPolicyMultipleDefault Generic error response.

swagger:response setPolicyMultipleDefault
*/
type SetPolicyMultipleDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewSetPolicyMultipleDefault creates SetPolicyMultipleDefault with default headers values
func NewSetPolicyMultipleDefault(code int) *SetPolicyMultipleDefault {
	if code <= 0 {
		code = 500
	}

	return &SetPolicyMultipleDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the set policy multiple default response
func (o *SetPolicyMultipleDefault) WithStatusCode(code int) *SetPolicyMultipleDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the set policy multiple default response
func (o *SetPolicyMultipleDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the set policy multiple default response
func (o *SetPolicyMultipleDefault) WithPayload(payload *models.Error) *SetPolicyMultipleDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the set policy multiple default response
func (o *SetPolicyMultipleDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *SetPolicyMultipleDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
