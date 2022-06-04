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

import React from "react";
import {
  ConsoleAgpl,
  ConsoleEnterprise,
  ConsoleStandard,
} from "../../../../icons";

const LicensedConsoleLogo = ({
  plan,
  isLoading,
}: {
  plan: string;
  isLoading: boolean;
}) => {
  let licenseLogo = null;
  if (isLoading) {
    return licenseLogo;
  } else if (plan === "STANDARD") {
    licenseLogo = <ConsoleStandard />;
  } else if (plan === "ENTERPRISE") {
    licenseLogo = <ConsoleEnterprise />;
  } else {
    licenseLogo = <ConsoleAgpl style={{ width: 170 }} />;
  }

  return licenseLogo;
};

export default LicensedConsoleLogo;
