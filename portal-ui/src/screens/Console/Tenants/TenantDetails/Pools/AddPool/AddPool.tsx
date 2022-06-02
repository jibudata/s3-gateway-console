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

import React, { Fragment } from "react";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import {
  formFieldStyles,
  modalStyleUtils,
} from "../../../../Common/FormComponents/common/styleLibrary";
import Grid from "@mui/material/Grid";
import { niceBytes } from "../../../../../../common/utils";
import { LinearProgress } from "@mui/material";
import PageHeader from "../../../../Common/PageHeader/PageHeader";
import PageLayout from "../../../../Common/Layout/PageLayout";
import GenericWizard from "../../../../Common/GenericWizard/GenericWizard";
import { IWizardElement } from "../../../../Common/GenericWizard/types";
import history from "../../../../../../history";
import PoolResources from "./PoolResources";
import ScreenTitle from "../../../../Common/ScreenTitle/ScreenTitle";
import TenantsIcon from "../../../../../../icons/TenantsIcon";

import { AppState } from "../../../../../../store";
import { useDispatch, useSelector } from "react-redux";
import PoolConfiguration from "./PoolConfiguration";
import PoolPodPlacement from "./PoolPodPlacement";
import BackLink from "../../../../../../common/BackLink";
import { resetPoolForm } from "./addPoolSlice";
import AddPoolCreateButton from "./AddPoolCreateButton";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bottomContainer: {
      display: "flex",
      flexGrow: 1,
      alignItems: "center",
      margin: "auto",
      justifyContent: "center",
      "& div": {
        width: 150,
        "@media (max-width: 900px)": {
          flexFlow: "column",
        },
      },
    },
    pageBox: {
      border: "1px solid #EAEAEA",
      borderTop: 0,
    },
    addPoolTitle: {
      border: "1px solid #EAEAEA",
      borderBottom: 0,
    },
    ...formFieldStyles,
    ...modalStyleUtils,
  })
);

const AddPool = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const tenant = useSelector((state: AppState) => state.tenants.tenantInfo);
  const sending = useSelector((state: AppState) => state.addPool.sending);

  const poolsURL = `/namespaces/${tenant?.namespace || ""}/tenants/${
    tenant?.name || ""
  }/pools`;

  const cancelButton = {
    label: "Cancel",
    type: "other",
    enabled: true,
    action: () => {
      dispatch(resetPoolForm());
      history.push(poolsURL);
    },
  };

  const createButton = {
    componentRender: <AddPoolCreateButton key={"add-pool-crate"} />,
  };

  const wizardSteps: IWizardElement[] = [
    {
      label: "Setup",
      componentRender: <PoolResources />,
      buttons: [cancelButton, createButton],
    },
    {
      label: "Configuration",
      advancedOnly: true,
      componentRender: <PoolConfiguration />,
      buttons: [cancelButton, createButton],
    },
    {
      label: "Pod Placement",
      advancedOnly: true,
      componentRender: <PoolPodPlacement />,
      buttons: [cancelButton, createButton],
    },
  ];

  return (
    <Fragment>
      <Grid item xs={12}>
        <PageHeader
          label={
            <Fragment>
              <BackLink to={poolsURL} label={`Tenant Pools`} />
            </Fragment>
          }
        />
        <PageLayout>
          <Grid item xs={12} className={classes.addPoolTitle}>
            <ScreenTitle
              icon={<TenantsIcon />}
              title={`Add New Pool to ${tenant?.name || ""}`}
              subTitle={
                <Fragment>
                  Namespace: {tenant?.namespace || ""} / Current Capacity:{" "}
                  {niceBytes((tenant?.total_size || 0).toString(10))}
                </Fragment>
              }
            />
          </Grid>

          {sending && (
            <Grid item xs={12}>
              <LinearProgress />
            </Grid>
          )}
          <Grid item xs={12} className={classes.pageBox}>
            <GenericWizard wizardSteps={wizardSteps} />
          </Grid>
        </PageLayout>
      </Grid>
    </Fragment>
  );
};

export default AddPool;
