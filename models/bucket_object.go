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

// BucketObject bucket object
//
// swagger:model bucketObject
type BucketObject struct {

	// content type
	ContentType string `json:"content_type,omitempty"`

	// etag
	Etag string `json:"etag,omitempty"`

	// expiration
	Expiration string `json:"expiration,omitempty"`

	// expiration rule id
	ExpirationRuleID string `json:"expiration_rule_id,omitempty"`

	// is delete marker
	IsDeleteMarker bool `json:"is_delete_marker,omitempty"`

	// is latest
	IsLatest bool `json:"is_latest,omitempty"`

	// last modified
	LastModified string `json:"last_modified,omitempty"`

	// legal hold status
	LegalHoldStatus string `json:"legal_hold_status,omitempty"`

	// metadata
	Metadata map[string]string `json:"metadata,omitempty"`

	// name
	Name string `json:"name,omitempty"`

	// retention mode
	RetentionMode string `json:"retention_mode,omitempty"`

	// retention until date
	RetentionUntilDate string `json:"retention_until_date,omitempty"`

	// size
	Size int64 `json:"size,omitempty"`

	// tags
	Tags map[string]string `json:"tags,omitempty"`

	// user metadata
	UserMetadata map[string]string `json:"user_metadata,omitempty"`

	// user tags
	UserTags map[string]string `json:"user_tags,omitempty"`

	// version id
	VersionID string `json:"version_id,omitempty"`
}

// Validate validates this bucket object
func (m *BucketObject) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this bucket object based on context it is used
func (m *BucketObject) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *BucketObject) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *BucketObject) UnmarshalBinary(b []byte) error {
	var res BucketObject
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
