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
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// CreateTenantRequest create tenant request
//
// swagger:model createTenantRequest
type CreateTenantRequest struct {

	// access key
	AccessKey string `json:"access_key,omitempty"`

	// annotations
	Annotations map[string]string `json:"annotations,omitempty"`

	// console
	Console *ConsoleConfiguration `json:"console,omitempty"`

	// console image
	ConsoleImage string `json:"console_image,omitempty"`

	// enable console
	EnableConsole *bool `json:"enable_console,omitempty"`

	// enable prometheus
	EnablePrometheus *bool `json:"enable_prometheus,omitempty"`

	// enable tls
	EnableTLS *bool `json:"enable_tls,omitempty"`

	// encryption
	Encryption *EncryptionConfiguration `json:"encryption,omitempty"`

	// erasure coding parity
	ErasureCodingParity int64 `json:"erasureCodingParity,omitempty"`

	// expose console
	ExposeConsole bool `json:"expose_console,omitempty"`

	// expose minio
	ExposeMinio bool `json:"expose_minio,omitempty"`

	// idp
	Idp *IdpConfiguration `json:"idp,omitempty"`

	// image
	Image string `json:"image,omitempty"`

	// image pull secret
	ImagePullSecret string `json:"image_pull_secret,omitempty"`

	// image registry
	ImageRegistry *ImageRegistry `json:"image_registry,omitempty"`

	// labels
	Labels map[string]string `json:"labels,omitempty"`

	// log search configuration
	LogSearchConfiguration *LogSearchConfiguration `json:"logSearchConfiguration,omitempty"`

	// mounth path
	MounthPath string `json:"mounth_path,omitempty"`

	// name
	// Required: true
	// Pattern: ^[a-z0-9-]{3,63}$
	Name *string `json:"name"`

	// namespace
	// Required: true
	Namespace *string `json:"namespace"`

	// pools
	// Required: true
	Pools []*Pool `json:"pools"`

	// prometheus configuration
	PrometheusConfiguration *PrometheusConfiguration `json:"prometheusConfiguration,omitempty"`

	// secret key
	SecretKey string `json:"secret_key,omitempty"`

	// tls
	TLS *TLSConfiguration `json:"tls,omitempty"`
}

// Validate validates this create tenant request
func (m *CreateTenantRequest) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateConsole(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateEncryption(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateIdp(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateImageRegistry(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateLogSearchConfiguration(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateName(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateNamespace(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validatePools(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validatePrometheusConfiguration(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateTLS(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *CreateTenantRequest) validateConsole(formats strfmt.Registry) error {

	if swag.IsZero(m.Console) { // not required
		return nil
	}

	if m.Console != nil {
		if err := m.Console.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("console")
			}
			return err
		}
	}

	return nil
}

func (m *CreateTenantRequest) validateEncryption(formats strfmt.Registry) error {

	if swag.IsZero(m.Encryption) { // not required
		return nil
	}

	if m.Encryption != nil {
		if err := m.Encryption.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("encryption")
			}
			return err
		}
	}

	return nil
}

func (m *CreateTenantRequest) validateIdp(formats strfmt.Registry) error {

	if swag.IsZero(m.Idp) { // not required
		return nil
	}

	if m.Idp != nil {
		if err := m.Idp.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("idp")
			}
			return err
		}
	}

	return nil
}

func (m *CreateTenantRequest) validateImageRegistry(formats strfmt.Registry) error {

	if swag.IsZero(m.ImageRegistry) { // not required
		return nil
	}

	if m.ImageRegistry != nil {
		if err := m.ImageRegistry.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("image_registry")
			}
			return err
		}
	}

	return nil
}

func (m *CreateTenantRequest) validateLogSearchConfiguration(formats strfmt.Registry) error {

	if swag.IsZero(m.LogSearchConfiguration) { // not required
		return nil
	}

	if m.LogSearchConfiguration != nil {
		if err := m.LogSearchConfiguration.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("logSearchConfiguration")
			}
			return err
		}
	}

	return nil
}

func (m *CreateTenantRequest) validateName(formats strfmt.Registry) error {

	if err := validate.Required("name", "body", m.Name); err != nil {
		return err
	}

	if err := validate.Pattern("name", "body", string(*m.Name), `^[a-z0-9-]{3,63}$`); err != nil {
		return err
	}

	return nil
}

func (m *CreateTenantRequest) validateNamespace(formats strfmt.Registry) error {

	if err := validate.Required("namespace", "body", m.Namespace); err != nil {
		return err
	}

	return nil
}

func (m *CreateTenantRequest) validatePools(formats strfmt.Registry) error {

	if err := validate.Required("pools", "body", m.Pools); err != nil {
		return err
	}

	for i := 0; i < len(m.Pools); i++ {
		if swag.IsZero(m.Pools[i]) { // not required
			continue
		}

		if m.Pools[i] != nil {
			if err := m.Pools[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("pools" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *CreateTenantRequest) validatePrometheusConfiguration(formats strfmt.Registry) error {

	if swag.IsZero(m.PrometheusConfiguration) { // not required
		return nil
	}

	if m.PrometheusConfiguration != nil {
		if err := m.PrometheusConfiguration.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("prometheusConfiguration")
			}
			return err
		}
	}

	return nil
}

func (m *CreateTenantRequest) validateTLS(formats strfmt.Registry) error {

	if swag.IsZero(m.TLS) { // not required
		return nil
	}

	if m.TLS != nil {
		if err := m.TLS.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("tls")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *CreateTenantRequest) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *CreateTenantRequest) UnmarshalBinary(b []byte) error {
	var res CreateTenantRequest
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
