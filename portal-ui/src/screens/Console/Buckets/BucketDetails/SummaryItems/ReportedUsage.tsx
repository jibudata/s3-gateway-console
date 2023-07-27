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
import { Box } from "@mui/material";
import { niceBytes } from "../../../../../common/utils";
import { Grid, ReportedUsageFullIcon } from "mds";
import HelpTip from "screens/Console/HelpTip";

const ReportedUsage = ({ bucketSize }: { bucketSize: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",

        "& .min-icon": {
          height: 37,
          width: 37,
        },
      }}
    >
      <ReportedUsageFullIcon />
      <Grid container>
        <Grid item xs={9}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexFlow: "column",
              marginLeft: "20px",
              fontSize: "19px",
            }}
            data-tooltip-id="reported_usage_calc"
          >
            <label
              style={{
                fontWeight: 600,
              }}
            >
              Reported Usage:
            </label>

            <label>{niceBytes(bucketSize)}</label>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              "& .min-icon": {
                height: "100%",
                width: "100%",
              },
            }}
          >
            <HelpTip helpTipID="reported_usage_calc" position="right" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReportedUsage;
