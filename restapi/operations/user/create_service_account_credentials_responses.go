// Code generated by go-swagger; DO NOT EDIT.

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
//

package user

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// CreateServiceAccountCredentialsCreatedCode is the HTTP code returned for type CreateServiceAccountCredentialsCreated
const CreateServiceAccountCredentialsCreatedCode int = 201

/*
CreateServiceAccountCredentialsCreated A successful response.

swagger:response createServiceAccountCredentialsCreated
*/
type CreateServiceAccountCredentialsCreated struct {

	/*
	  In: Body
	*/
	Payload *models.ServiceAccountCreds `json:"body,omitempty"`
}

// NewCreateServiceAccountCredentialsCreated creates CreateServiceAccountCredentialsCreated with default headers values
func NewCreateServiceAccountCredentialsCreated() *CreateServiceAccountCredentialsCreated {

	return &CreateServiceAccountCredentialsCreated{}
}

// WithPayload adds the payload to the create service account credentials created response
func (o *CreateServiceAccountCredentialsCreated) WithPayload(payload *models.ServiceAccountCreds) *CreateServiceAccountCredentialsCreated {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the create service account credentials created response
func (o *CreateServiceAccountCredentialsCreated) SetPayload(payload *models.ServiceAccountCreds) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *CreateServiceAccountCredentialsCreated) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(201)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*
CreateServiceAccountCredentialsDefault Generic error response.

swagger:response createServiceAccountCredentialsDefault
*/
type CreateServiceAccountCredentialsDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.APIError `json:"body,omitempty"`
}

// NewCreateServiceAccountCredentialsDefault creates CreateServiceAccountCredentialsDefault with default headers values
func NewCreateServiceAccountCredentialsDefault(code int) *CreateServiceAccountCredentialsDefault {
	if code <= 0 {
		code = 500
	}

	return &CreateServiceAccountCredentialsDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the create service account credentials default response
func (o *CreateServiceAccountCredentialsDefault) WithStatusCode(code int) *CreateServiceAccountCredentialsDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the create service account credentials default response
func (o *CreateServiceAccountCredentialsDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the create service account credentials default response
func (o *CreateServiceAccountCredentialsDefault) WithPayload(payload *models.APIError) *CreateServiceAccountCredentialsDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the create service account credentials default response
func (o *CreateServiceAccountCredentialsDefault) SetPayload(payload *models.APIError) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *CreateServiceAccountCredentialsDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
