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

export interface IWizardButton {
  label: string;
  type: string;
  action?: () => void;
  enabled?: boolean;
  toPage?: number;
}

export interface IWizardElement {
  label: string;
  componentRender: any;
  buttons: IWizardButton[];
}

export interface IWizardMain {
  classes: any;
  wizardSteps: IWizardElement[];
}

export interface IWizardPage {
  classes: any;
  page: IWizardElement;
  pageChange: (to: string | number) => void;
}
