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

// ListNodeLabelsOKCode is the HTTP code returned for type ListNodeLabelsOK
const ListNodeLabelsOKCode int = 200

/*
ListNodeLabelsOK A successful response.

swagger:response listNodeLabelsOK
*/
type ListNodeLabelsOK struct {

	/*
	  In: Body
	*/
	Payload models.NodeLabels `json:"body,omitempty"`
}

// NewListNodeLabelsOK creates ListNodeLabelsOK with default headers values
func NewListNodeLabelsOK() *ListNodeLabelsOK {

	return &ListNodeLabelsOK{}
}

// WithPayload adds the payload to the list node labels o k response
func (o *ListNodeLabelsOK) WithPayload(payload models.NodeLabels) *ListNodeLabelsOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the list node labels o k response
func (o *ListNodeLabelsOK) SetPayload(payload models.NodeLabels) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *ListNodeLabelsOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	payload := o.Payload
	if payload == nil {
		// return empty map
		payload = models.NodeLabels{}
	}

	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}

/*
ListNodeLabelsDefault Generic error response.

swagger:response listNodeLabelsDefault
*/
type ListNodeLabelsDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewListNodeLabelsDefault creates ListNodeLabelsDefault with default headers values
func NewListNodeLabelsDefault(code int) *ListNodeLabelsDefault {
	if code <= 0 {
		code = 500
	}

	return &ListNodeLabelsDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the list node labels default response
func (o *ListNodeLabelsDefault) WithStatusCode(code int) *ListNodeLabelsDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the list node labels default response
func (o *ListNodeLabelsDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the list node labels default response
func (o *ListNodeLabelsDefault) WithPayload(payload *models.Error) *ListNodeLabelsDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the list node labels default response
func (o *ListNodeLabelsDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *ListNodeLabelsDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
