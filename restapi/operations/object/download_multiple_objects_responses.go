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

package object

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"io"
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// DownloadMultipleObjectsOKCode is the HTTP code returned for type DownloadMultipleObjectsOK
const DownloadMultipleObjectsOKCode int = 200

/*
DownloadMultipleObjectsOK A successful response.

swagger:response downloadMultipleObjectsOK
*/
type DownloadMultipleObjectsOK struct {

	/*
	  In: Body
	*/
	Payload io.ReadCloser `json:"body,omitempty"`
}

// NewDownloadMultipleObjectsOK creates DownloadMultipleObjectsOK with default headers values
func NewDownloadMultipleObjectsOK() *DownloadMultipleObjectsOK {

	return &DownloadMultipleObjectsOK{}
}

// WithPayload adds the payload to the download multiple objects o k response
func (o *DownloadMultipleObjectsOK) WithPayload(payload io.ReadCloser) *DownloadMultipleObjectsOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the download multiple objects o k response
func (o *DownloadMultipleObjectsOK) SetPayload(payload io.ReadCloser) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *DownloadMultipleObjectsOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	payload := o.Payload
	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}

/*
DownloadMultipleObjectsDefault Generic error response.

swagger:response downloadMultipleObjectsDefault
*/
type DownloadMultipleObjectsDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewDownloadMultipleObjectsDefault creates DownloadMultipleObjectsDefault with default headers values
func NewDownloadMultipleObjectsDefault(code int) *DownloadMultipleObjectsDefault {
	if code <= 0 {
		code = 500
	}

	return &DownloadMultipleObjectsDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the download multiple objects default response
func (o *DownloadMultipleObjectsDefault) WithStatusCode(code int) *DownloadMultipleObjectsDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the download multiple objects default response
func (o *DownloadMultipleObjectsDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the download multiple objects default response
func (o *DownloadMultipleObjectsDefault) WithPayload(payload *models.Error) *DownloadMultipleObjectsDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the download multiple objects default response
func (o *DownloadMultipleObjectsDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *DownloadMultipleObjectsDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
