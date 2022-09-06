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

// PostMPIntegrationCreatedCode is the HTTP code returned for type PostMPIntegrationCreated
const PostMPIntegrationCreatedCode int = 201

/*
PostMPIntegrationCreated A successful response.

swagger:response postMPIntegrationCreated
*/
type PostMPIntegrationCreated struct {
}

// NewPostMPIntegrationCreated creates PostMPIntegrationCreated with default headers values
func NewPostMPIntegrationCreated() *PostMPIntegrationCreated {

	return &PostMPIntegrationCreated{}
}

// WriteResponse to the client
func (o *PostMPIntegrationCreated) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(201)
}

/*
PostMPIntegrationDefault Generic error response.

swagger:response postMPIntegrationDefault
*/
type PostMPIntegrationDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewPostMPIntegrationDefault creates PostMPIntegrationDefault with default headers values
func NewPostMPIntegrationDefault(code int) *PostMPIntegrationDefault {
	if code <= 0 {
		code = 500
	}

	return &PostMPIntegrationDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the post m p integration default response
func (o *PostMPIntegrationDefault) WithStatusCode(code int) *PostMPIntegrationDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the post m p integration default response
func (o *PostMPIntegrationDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the post m p integration default response
func (o *PostMPIntegrationDefault) WithPayload(payload *models.Error) *PostMPIntegrationDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the post m p integration default response
func (o *PostMPIntegrationDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *PostMPIntegrationDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
