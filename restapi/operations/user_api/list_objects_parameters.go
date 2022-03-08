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

package user_api

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	"github.com/go-openapi/runtime/middleware"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// NewListObjectsParams creates a new ListObjectsParams object
//
// There are no default values defined in the spec.
func NewListObjectsParams() ListObjectsParams {

	return ListObjectsParams{}
}

// ListObjectsParams contains all the bound params for the list objects operation
// typically these are obtained from a http.Request
//
// swagger:parameters ListObjects
type ListObjectsParams struct {

	// HTTP Request Object
	HTTPRequest *http.Request `json:"-"`

	/*
	  Required: true
	  In: path
	*/
	BucketName string
	/*
	  In: query
	*/
	Prefix *string
	/*
	  In: query
	*/
	Recursive *bool
	/*
	  In: query
	*/
	WithMetadata *bool
	/*
	  In: query
	*/
	WithVersions *bool
}

// BindRequest both binds and validates a request, it assumes that complex things implement a Validatable(strfmt.Registry) error interface
// for simple values it will use straight method calls.
//
// To ensure default values, the struct must have been initialized with NewListObjectsParams() beforehand.
func (o *ListObjectsParams) BindRequest(r *http.Request, route *middleware.MatchedRoute) error {
	var res []error

	o.HTTPRequest = r

	qs := runtime.Values(r.URL.Query())

	rBucketName, rhkBucketName, _ := route.Params.GetOK("bucket_name")
	if err := o.bindBucketName(rBucketName, rhkBucketName, route.Formats); err != nil {
		res = append(res, err)
	}

	qPrefix, qhkPrefix, _ := qs.GetOK("prefix")
	if err := o.bindPrefix(qPrefix, qhkPrefix, route.Formats); err != nil {
		res = append(res, err)
	}

	qRecursive, qhkRecursive, _ := qs.GetOK("recursive")
	if err := o.bindRecursive(qRecursive, qhkRecursive, route.Formats); err != nil {
		res = append(res, err)
	}

	qWithMetadata, qhkWithMetadata, _ := qs.GetOK("with_metadata")
	if err := o.bindWithMetadata(qWithMetadata, qhkWithMetadata, route.Formats); err != nil {
		res = append(res, err)
	}

	qWithVersions, qhkWithVersions, _ := qs.GetOK("with_versions")
	if err := o.bindWithVersions(qWithVersions, qhkWithVersions, route.Formats); err != nil {
		res = append(res, err)
	}
	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// bindBucketName binds and validates parameter BucketName from path.
func (o *ListObjectsParams) bindBucketName(rawData []string, hasKey bool, formats strfmt.Registry) error {
	var raw string
	if len(rawData) > 0 {
		raw = rawData[len(rawData)-1]
	}

	// Required: true
	// Parameter is provided by construction from the route
	o.BucketName = raw

	return nil
}

// bindPrefix binds and validates parameter Prefix from query.
func (o *ListObjectsParams) bindPrefix(rawData []string, hasKey bool, formats strfmt.Registry) error {
	var raw string
	if len(rawData) > 0 {
		raw = rawData[len(rawData)-1]
	}

	// Required: false
	// AllowEmptyValue: false

	if raw == "" { // empty values pass all other validations
		return nil
	}
	o.Prefix = &raw

	return nil
}

// bindRecursive binds and validates parameter Recursive from query.
func (o *ListObjectsParams) bindRecursive(rawData []string, hasKey bool, formats strfmt.Registry) error {
	var raw string
	if len(rawData) > 0 {
		raw = rawData[len(rawData)-1]
	}

	// Required: false
	// AllowEmptyValue: false

	if raw == "" { // empty values pass all other validations
		return nil
	}

	value, err := swag.ConvertBool(raw)
	if err != nil {
		return errors.InvalidType("recursive", "query", "bool", raw)
	}
	o.Recursive = &value

	return nil
}

// bindWithMetadata binds and validates parameter WithMetadata from query.
func (o *ListObjectsParams) bindWithMetadata(rawData []string, hasKey bool, formats strfmt.Registry) error {
	var raw string
	if len(rawData) > 0 {
		raw = rawData[len(rawData)-1]
	}

	// Required: false
	// AllowEmptyValue: false

	if raw == "" { // empty values pass all other validations
		return nil
	}

	value, err := swag.ConvertBool(raw)
	if err != nil {
		return errors.InvalidType("with_metadata", "query", "bool", raw)
	}
	o.WithMetadata = &value

	return nil
}

// bindWithVersions binds and validates parameter WithVersions from query.
func (o *ListObjectsParams) bindWithVersions(rawData []string, hasKey bool, formats strfmt.Registry) error {
	var raw string
	if len(rawData) > 0 {
		raw = rawData[len(rawData)-1]
	}

	// Required: false
	// AllowEmptyValue: false

	if raw == "" { // empty values pass all other validations
		return nil
	}

	value, err := swag.ConvertBool(raw)
	if err != nil {
		return errors.InvalidType("with_versions", "query", "bool", raw)
	}
	o.WithVersions = &value

	return nil
}
