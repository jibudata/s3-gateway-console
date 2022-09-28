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

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"encoding/json"
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// AdminInfoResponse admin info response
//
// swagger:model adminInfoResponse
type AdminInfoResponse struct {

	// advanced metrics status
	// Enum: [not configured available unavailable]
	AdvancedMetricsStatus string `json:"advancedMetricsStatus,omitempty"`

	// buckets
	Buckets int64 `json:"buckets,omitempty"`

	// objects
	Objects int64 `json:"objects,omitempty"`

	// servers
	Servers []*ServerProperties `json:"servers"`

	// usage
	Usage int64 `json:"usage,omitempty"`

	// widgets
	Widgets []*Widget `json:"widgets"`
}

// Validate validates this admin info response
func (m *AdminInfoResponse) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateAdvancedMetricsStatus(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateServers(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateWidgets(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

var adminInfoResponseTypeAdvancedMetricsStatusPropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["not configured","available","unavailable"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		adminInfoResponseTypeAdvancedMetricsStatusPropEnum = append(adminInfoResponseTypeAdvancedMetricsStatusPropEnum, v)
	}
}

const (

	// AdminInfoResponseAdvancedMetricsStatusNotConfigured captures enum value "not configured"
	AdminInfoResponseAdvancedMetricsStatusNotConfigured string = "not configured"

	// AdminInfoResponseAdvancedMetricsStatusAvailable captures enum value "available"
	AdminInfoResponseAdvancedMetricsStatusAvailable string = "available"

	// AdminInfoResponseAdvancedMetricsStatusUnavailable captures enum value "unavailable"
	AdminInfoResponseAdvancedMetricsStatusUnavailable string = "unavailable"
)

// prop value enum
func (m *AdminInfoResponse) validateAdvancedMetricsStatusEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, adminInfoResponseTypeAdvancedMetricsStatusPropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *AdminInfoResponse) validateAdvancedMetricsStatus(formats strfmt.Registry) error {
	if swag.IsZero(m.AdvancedMetricsStatus) { // not required
		return nil
	}

	// value enum
	if err := m.validateAdvancedMetricsStatusEnum("advancedMetricsStatus", "body", m.AdvancedMetricsStatus); err != nil {
		return err
	}

	return nil
}

func (m *AdminInfoResponse) validateServers(formats strfmt.Registry) error {
	if swag.IsZero(m.Servers) { // not required
		return nil
	}

	for i := 0; i < len(m.Servers); i++ {
		if swag.IsZero(m.Servers[i]) { // not required
			continue
		}

		if m.Servers[i] != nil {
			if err := m.Servers[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("servers" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("servers" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *AdminInfoResponse) validateWidgets(formats strfmt.Registry) error {
	if swag.IsZero(m.Widgets) { // not required
		return nil
	}

	for i := 0; i < len(m.Widgets); i++ {
		if swag.IsZero(m.Widgets[i]) { // not required
			continue
		}

		if m.Widgets[i] != nil {
			if err := m.Widgets[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("widgets" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("widgets" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// ContextValidate validate this admin info response based on the context it is used
func (m *AdminInfoResponse) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateServers(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateWidgets(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *AdminInfoResponse) contextValidateServers(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Servers); i++ {

		if m.Servers[i] != nil {
			if err := m.Servers[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("servers" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("servers" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *AdminInfoResponse) contextValidateWidgets(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Widgets); i++ {

		if m.Widgets[i] != nil {
			if err := m.Widgets[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("widgets" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("widgets" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *AdminInfoResponse) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *AdminInfoResponse) UnmarshalBinary(b []byte) error {
	var res AdminInfoResponse
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
