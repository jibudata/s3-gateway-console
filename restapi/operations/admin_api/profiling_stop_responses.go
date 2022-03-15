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
	"io"
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// ProfilingStopCreatedCode is the HTTP code returned for type ProfilingStopCreated
const ProfilingStopCreatedCode int = 201

/*ProfilingStopCreated A successful response.

swagger:response profilingStopCreated
*/
type ProfilingStopCreated struct {

	/*
	  In: Body
	*/
	Payload io.ReadCloser `json:"body,omitempty"`
}

// NewProfilingStopCreated creates ProfilingStopCreated with default headers values
func NewProfilingStopCreated() *ProfilingStopCreated {

	return &ProfilingStopCreated{}
}

// WithPayload adds the payload to the profiling stop created response
func (o *ProfilingStopCreated) WithPayload(payload io.ReadCloser) *ProfilingStopCreated {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the profiling stop created response
func (o *ProfilingStopCreated) SetPayload(payload io.ReadCloser) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *ProfilingStopCreated) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(201)
	payload := o.Payload
	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}

/*ProfilingStopDefault Generic error response.

swagger:response profilingStopDefault
*/
type ProfilingStopDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewProfilingStopDefault creates ProfilingStopDefault with default headers values
func NewProfilingStopDefault(code int) *ProfilingStopDefault {
	if code <= 0 {
		code = 500
	}

	return &ProfilingStopDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the profiling stop default response
func (o *ProfilingStopDefault) WithStatusCode(code int) *ProfilingStopDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the profiling stop default response
func (o *ProfilingStopDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the profiling stop default response
func (o *ProfilingStopDefault) WithPayload(payload *models.Error) *ProfilingStopDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the profiling stop default response
func (o *ProfilingStopDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *ProfilingStopDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
