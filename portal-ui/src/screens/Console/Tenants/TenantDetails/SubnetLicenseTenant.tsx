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

import { t } from "i18next";
import React from "react";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import Grid from "@mui/material/Grid";
import { containerForHeader } from "../../Common/FormComponents/common/styleLibrary";
import { Typography } from "@mui/material";
import { niceBytes } from "../../../../common/utils";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { ITenant } from "../ListTenants/types";
import { Button } from "mds";
import { SubnetInfo } from "../../License/types";
import TooltipWrapper from "../../Common/TooltipWrapper/TooltipWrapper";

interface ISubnetLicenseTenant {
  classes: any;
  tenant: ITenant | null;
  loadingActivateProduct: any;
  loadingLicenseInfo: boolean;
  licenseInfo: SubnetInfo | undefined;
  activateProduct: any;
}

const styles = (theme: Theme) =>
  createStyles({
    paperContainer: {
      padding: "15px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    licenseInfoValue: {
      textTransform: "none",
      fontSize: 14,
      fontWeight: "bold",
    },
    licenseContainer: {
      position: "relative",
      padding: "20px 52px 0px 28px",
      background: "#032F51",
      boxShadow: "0px 3px 7px #00000014",
      "& h2": {
        color: "#FFF",
        marginBottom: 67,
      },
      "& a": {
        textDecoration: "none",
      },
      "& h3": {
        color: "#FFFFFF",
        marginBottom: "30px",
        fontWeight: "bold",
      },
      "& h6": {
        color: "#FFFFFF !important",
      },
    },
    licenseInfo: { color: "#FFFFFF", position: "relative" },
    licenseInfoTitle: {
      textTransform: "none",
      color: "#BFBFBF",
      fontSize: 11,
    },
    verifiedIcon: {
      width: 96,
      position: "absolute",
      right: 0,
      bottom: 29,
    },
    noUnderLine: {
      textDecoration: "none",
    },
    ...containerForHeader(theme.spacing(4)),
  });

const SubnetLicenseTenant = ({
  classes,
  tenant,
  loadingActivateProduct,
  loadingLicenseInfo,
  licenseInfo,
  activateProduct,
}: ISubnetLicenseTenant) => {
  return (
    <Paper
      className={
        tenant && tenant.subnet_license ? classes.licenseContainer : ""
      }
    >
      {tenant && tenant.subnet_license ? (
        <React.Fragment>
          <Grid container className={classes.licenseInfo}>
            <Grid item xs={6}>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                className={classes.licenseInfoTitle}
              >
                {t("License")}
              </Typography>
              <Typography
                variant="overline"
                display="block"
                gutterBottom
                className={classes.licenseInfoValue}
              >
                {t("Commercial License")}
              </Typography>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                className={classes.licenseInfoTitle}
              >
                {t("Organization")}
              </Typography>
              <Typography
                variant="overline"
                display="block"
                gutterBottom
                className={classes.licenseInfoValue}
              >
                {tenant.subnet_license.organization}
              </Typography>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                className={classes.licenseInfoTitle}
              >
                {t("Registered Capacity")}
              </Typography>
              <Typography
                variant="overline"
                display="block"
                gutterBottom
                className={classes.licenseInfoValue}
              >
                {niceBytes(
                  (tenant.subnet_license.storage_capacity * 1099511627776) // 1 Terabyte = 1099511627776 Bytes
                    .toString(10)
                )}
              </Typography>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                className={classes.licenseInfoTitle}
              >
                {t("Expiry Date")}
              </Typography>
              <Typography
                variant="overline"
                display="block"
                gutterBottom
                className={classes.licenseInfoValue}
              >
                <Moment format="YYYY-MM-DD">
                  {tenant.subnet_license.expires_at}
                </Moment>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                className={classes.licenseInfoTitle}
              >
                {t("Subscription Plan")}
              </Typography>
              <Typography
                variant="overline"
                display="block"
                gutterBottom
                className={classes.licenseInfoValue}
              >
                {tenant.subnet_license.plan}
              </Typography>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                className={classes.licenseInfoTitle}
              >
                {t("Requestor")}
              </Typography>
              <Typography
                variant="overline"
                display="block"
                gutterBottom
                className={classes.licenseInfoValue}
              >
                {tenant.subnet_license.email}
              </Typography>
            </Grid>
            <img
              className={classes.verifiedIcon}
              src={"/verified.svg"}
              alt="verified"
            />
          </Grid>
        </React.Fragment>
      ) : (
        !loadingLicenseInfo && (
          <Grid className={classes.paperContainer}>
            {!licenseInfo && (
              <Link
                to={"/license"}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={classes.noUnderLine}
              >
                <TooltipWrapper tooltip={t("Activate Product")}>
                  <Button
                    id={"activate-product"}
                    label={t("Activate Product")}
                    onClick={() => false}
                    variant={"callAction"}
                  />
                </TooltipWrapper>
              </Link>
            )}
            {licenseInfo && tenant && (
              <TooltipWrapper tooltip={t("Attach License")}>
                <Button
                  id={"attach-license"}
                  disabled={loadingActivateProduct}
                  label={t("Attach License")}
                  onClick={() => activateProduct(tenant.namespace, tenant.name)}
                  variant={"callAction"}
                />
              </TooltipWrapper>
            )}
          </Grid>
        )
      )}
    </Paper>
  );
};

export default withStyles(styles)(SubnetLicenseTenant);
