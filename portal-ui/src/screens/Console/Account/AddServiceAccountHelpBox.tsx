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
import {
  HelpIconFilled,
  ServiceAccountIcon,
  PasswordKeyIcon,
  IAMPoliciesIcon,
} from "../../../icons";

const FeatureItem = ({
  icon,
  description,
}: {
  icon: any;
  description: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        "& .min-icon": {
          marginRight: "10px",
          height: "23px",
          width: "23px",
          marginBottom: "10px",
        },
      }}
    >
      {icon}{" "}
      <div style={{ fontSize: "14px", fontStyle: "italic", color: "#5E5E5E" }}>
        {description}
      </div>
    </Box>
  );
};
const AddUserHelpBox = ({ hasMargin = true }: { hasMargin?: boolean }) => {
  return (
    <Box
      sx={{
        flex: 1,
        border: "1px solid #eaeaea",
        borderRadius: "2px",
        display: "flex",
        flexFlow: "column",
        padding: "20px",
        marginLeft: {
          xs: "0px",
          sm: "0px",
          md: hasMargin ? "30px" : "",
        },
        marginTop: {
          xs: "0px",
        },
      }}
    >
      <Box
        sx={{
          fontSize: "16px",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          marginBottom: "16px",

          "& .min-icon": {
            height: "21px",
            width: "21px",
            marginRight: "15px",
          },
        }}
      >
        <HelpIconFilled />
        <div>Learn more about Service Accounts</div>
      </Box>
      <Box sx={{ fontSize: "14px", marginBottom: "15px" }}>
       Service Accounts inherit the policies explicitly attached to the
              parent user, and the policies attached to each group in which the
              parent user has membership. 
              <Box sx={{ paddingTop: "20px", paddingBottom: "10px" }}>
              A MinIO user can generate any number of service accounts.
              </Box>
               
              <Box sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
                You cannot modify the optional Service Account IAM policy after
                saving.
              </Box>
              
              <Box sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
              Service Accounts support programmatic access by applications. 
              You cannot use a Service Account to log into the MinIO Console.
              </Box>

      </Box>

      <Box
        sx={{
          display: "flex",
          flexFlow: "column",
        }}
      >
        <FeatureItem icon={<ServiceAccountIcon />} description={`Create Service Accounts`} />
        <FeatureItem icon={<PasswordKeyIcon />} description={`Assign Custom Credentials`} />
        <FeatureItem
          icon={<IAMPoliciesIcon />}
          description={`Assign Access Policies`}
        />
      </Box>
    </Box>
  );
};

export default AddUserHelpBox;
