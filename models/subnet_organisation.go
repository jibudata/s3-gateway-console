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

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// SubnetOrganisation subnet organisation
//
// swagger:model subnetOrganisation
type SubnetOrganisation struct {

	// account Id
	AccountID int64 `json:"accountId,omitempty"`

	// company
	Company string `json:"company,omitempty"`

	// is account owner
	IsAccountOwner bool `json:"isAccountOwner,omitempty"`

	// short name
	ShortName string `json:"shortName,omitempty"`

	// subscription status
	SubscriptionStatus string `json:"subscriptionStatus,omitempty"`

	// user Id
	UserID int64 `json:"userId,omitempty"`
}

// Validate validates this subnet organisation
func (m *SubnetOrganisation) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this subnet organisation based on context it is used
func (m *SubnetOrganisation) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *SubnetOrganisation) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *SubnetOrganisation) UnmarshalBinary(b []byte) error {
	var res SubnetOrganisation
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
