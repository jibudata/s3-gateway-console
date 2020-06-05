// This file is part of MinIO Console Server
// Copyright (c) 2020 MinIO, Inc.
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

export interface IZone {
  name: string;
  servers: number;
  // computed
  capacity: string;
  volumes: number;
}

export interface IVolumeConfiguration {
  size: string;
  storage_class: string;
}

export interface ITenant {
  name: string;
  zone_count: number;
  currentState: string;
  instance_count: 4;
  creation_date: Date;
  volume_size: number;
  volume_count: number;
  volumes_per_server: number;
  zones: IZone[];
  // computed
  capacity: string;
}

export interface ITenantsResponse {
  tenants: ITenant[];
}
