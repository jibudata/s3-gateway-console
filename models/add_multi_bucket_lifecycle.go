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

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"encoding/json"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// AddMultiBucketLifecycle add multi bucket lifecycle
//
// swagger:model addMultiBucketLifecycle
type AddMultiBucketLifecycle struct {

	// buckets
	// Required: true
	Buckets []string `json:"buckets"`

	// Non required, toggle to disable or enable rule
	ExpiredObjectDeleteMarker bool `json:"expired_object_delete_marker,omitempty"`

	// Required in case of expiry_date or transition fields are not set. it defines an expiry days for ILM
	ExpiryDays int32 `json:"expiry_days,omitempty"`

	// Non required, can be set in case of expiration is enabled
	NoncurrentversionExpirationDays int32 `json:"noncurrentversion_expiration_days,omitempty"`

	// Non required, can be set in case of transition is enabled
	NoncurrentversionTransitionDays int32 `json:"noncurrentversion_transition_days,omitempty"`

	// Non required, can be set in case of transition is enabled
	NoncurrentversionTransitionStorageClass string `json:"noncurrentversion_transition_storage_class,omitempty"`

	// Non required field, it matches a prefix to perform ILM operations on it
	Prefix string `json:"prefix,omitempty"`

	// Required only in case of transition is set. it refers to a tier
	StorageClass string `json:"storage_class,omitempty"`

	// Non required field, tags to match ILM files
	Tags string `json:"tags,omitempty"`

	// Required in case of transition_date or expiry fields are not set. it defines a transition days for ILM
	TransitionDays int32 `json:"transition_days,omitempty"`

	// ILM Rule type (Expiry or transition)
	// Required: true
	// Enum: [expiry transition]
	Type *string `json:"type"`
}

// Validate validates this add multi bucket lifecycle
func (m *AddMultiBucketLifecycle) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateBuckets(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateType(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *AddMultiBucketLifecycle) validateBuckets(formats strfmt.Registry) error {

	if err := validate.Required("buckets", "body", m.Buckets); err != nil {
		return err
	}

	return nil
}

var addMultiBucketLifecycleTypeTypePropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["expiry","transition"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		addMultiBucketLifecycleTypeTypePropEnum = append(addMultiBucketLifecycleTypeTypePropEnum, v)
	}
}

const (

	// AddMultiBucketLifecycleTypeExpiry captures enum value "expiry"
	AddMultiBucketLifecycleTypeExpiry string = "expiry"

	// AddMultiBucketLifecycleTypeTransition captures enum value "transition"
	AddMultiBucketLifecycleTypeTransition string = "transition"
)

// prop value enum
func (m *AddMultiBucketLifecycle) validateTypeEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, addMultiBucketLifecycleTypeTypePropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *AddMultiBucketLifecycle) validateType(formats strfmt.Registry) error {

	if err := validate.Required("type", "body", m.Type); err != nil {
		return err
	}

	// value enum
	if err := m.validateTypeEnum("type", "body", *m.Type); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this add multi bucket lifecycle based on context it is used
func (m *AddMultiBucketLifecycle) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *AddMultiBucketLifecycle) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *AddMultiBucketLifecycle) UnmarshalBinary(b []byte) error {
	var res AddMultiBucketLifecycle
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
