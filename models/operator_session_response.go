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

// OperatorSessionResponse operator session response
//
// swagger:model operatorSessionResponse
type OperatorSessionResponse struct {

	// operator
	Operator bool `json:"operator,omitempty"`

	// status
	// Enum: [ok]
	Status string `json:"status,omitempty"`
}

// Validate validates this operator session response
func (m *OperatorSessionResponse) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateStatus(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

var operatorSessionResponseTypeStatusPropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["ok"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		operatorSessionResponseTypeStatusPropEnum = append(operatorSessionResponseTypeStatusPropEnum, v)
	}
}

const (

	// OperatorSessionResponseStatusOk captures enum value "ok"
	OperatorSessionResponseStatusOk string = "ok"
)

// prop value enum
func (m *OperatorSessionResponse) validateStatusEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, operatorSessionResponseTypeStatusPropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *OperatorSessionResponse) validateStatus(formats strfmt.Registry) error {
	if swag.IsZero(m.Status) { // not required
		return nil
	}

	// value enum
	if err := m.validateStatusEnum("status", "body", m.Status); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this operator session response based on context it is used
func (m *OperatorSessionResponse) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *OperatorSessionResponse) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *OperatorSessionResponse) UnmarshalBinary(b []byte) error {
	var res OperatorSessionResponse
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
