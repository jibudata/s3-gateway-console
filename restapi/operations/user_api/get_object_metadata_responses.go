// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
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

package user_api

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// GetObjectMetadataOKCode is the HTTP code returned for type GetObjectMetadataOK
const GetObjectMetadataOKCode int = 200

/*GetObjectMetadataOK A successful response.

swagger:response getObjectMetadataOK
*/
type GetObjectMetadataOK struct {

	/*
	  In: Body
	*/
	Payload *models.Metadata `json:"body,omitempty"`
}

// NewGetObjectMetadataOK creates GetObjectMetadataOK with default headers values
func NewGetObjectMetadataOK() *GetObjectMetadataOK {

	return &GetObjectMetadataOK{}
}

// WithPayload adds the payload to the get object metadata o k response
func (o *GetObjectMetadataOK) WithPayload(payload *models.Metadata) *GetObjectMetadataOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get object metadata o k response
func (o *GetObjectMetadataOK) SetPayload(payload *models.Metadata) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetObjectMetadataOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*GetObjectMetadataDefault Generic error response.

swagger:response getObjectMetadataDefault
*/
type GetObjectMetadataDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewGetObjectMetadataDefault creates GetObjectMetadataDefault with default headers values
func NewGetObjectMetadataDefault(code int) *GetObjectMetadataDefault {
	if code <= 0 {
		code = 500
	}

	return &GetObjectMetadataDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the get object metadata default response
func (o *GetObjectMetadataDefault) WithStatusCode(code int) *GetObjectMetadataDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the get object metadata default response
func (o *GetObjectMetadataDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the get object metadata default response
func (o *GetObjectMetadataDefault) WithPayload(payload *models.Error) *GetObjectMetadataDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get object metadata default response
func (o *GetObjectMetadataDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetObjectMetadataDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
