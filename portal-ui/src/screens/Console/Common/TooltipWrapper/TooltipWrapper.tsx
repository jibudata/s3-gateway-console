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

import React, { cloneElement } from "react";
import { Box, Grid, Tooltip } from "@mui/material";

interface ITooltipWrapperProps {
  tooltip: string;
  children: any;
  errorProps?: any;
}

const TooltipWrapper = ({
  tooltip,
  children,
  errorProps = null,
}: ITooltipWrapperProps) => {
  return (
    <Tooltip title={tooltip}>
      <Box>
        <span>
          {errorProps ? cloneElement(children, { ...errorProps }) : children}
        </span>
      </Box>
    </Tooltip>
  );
};

export default TooltipWrapper;
