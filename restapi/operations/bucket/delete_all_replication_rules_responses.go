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

package bucket

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// DeleteAllReplicationRulesNoContentCode is the HTTP code returned for type DeleteAllReplicationRulesNoContent
const DeleteAllReplicationRulesNoContentCode int = 204

/*
DeleteAllReplicationRulesNoContent A successful response.

swagger:response deleteAllReplicationRulesNoContent
*/
type DeleteAllReplicationRulesNoContent struct {
}

// NewDeleteAllReplicationRulesNoContent creates DeleteAllReplicationRulesNoContent with default headers values
func NewDeleteAllReplicationRulesNoContent() *DeleteAllReplicationRulesNoContent {

	return &DeleteAllReplicationRulesNoContent{}
}

// WriteResponse to the client
func (o *DeleteAllReplicationRulesNoContent) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(204)
}

/*
DeleteAllReplicationRulesDefault Generic error response.

swagger:response deleteAllReplicationRulesDefault
*/
type DeleteAllReplicationRulesDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewDeleteAllReplicationRulesDefault creates DeleteAllReplicationRulesDefault with default headers values
func NewDeleteAllReplicationRulesDefault(code int) *DeleteAllReplicationRulesDefault {
	if code <= 0 {
		code = 500
	}

	return &DeleteAllReplicationRulesDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the delete all replication rules default response
func (o *DeleteAllReplicationRulesDefault) WithStatusCode(code int) *DeleteAllReplicationRulesDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the delete all replication rules default response
func (o *DeleteAllReplicationRulesDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the delete all replication rules default response
func (o *DeleteAllReplicationRulesDefault) WithPayload(payload *models.Error) *DeleteAllReplicationRulesDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the delete all replication rules default response
func (o *DeleteAllReplicationRulesDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *DeleteAllReplicationRulesDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
