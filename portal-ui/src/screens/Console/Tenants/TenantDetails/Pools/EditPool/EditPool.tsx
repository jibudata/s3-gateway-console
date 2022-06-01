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

import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import Grid from "@mui/material/Grid";
import PageHeader from "../../../../Common/PageHeader/PageHeader";
import PageLayout from "../../../../Common/Layout/PageLayout";
import GenericWizard from "../../../../Common/GenericWizard/GenericWizard";
import ScreenTitle from "../../../../Common/ScreenTitle/ScreenTitle";
import TenantsIcon from "../../../../../../icons/TenantsIcon";
import BackLink from "../../../../../../common/BackLink";
import EditPoolResources from "./EditPoolResources";
import EditPoolConfiguration from "./EditPoolConfiguration";
import EditPoolPlacement from "./EditPoolPlacement";
import history from "../../../../../../history";
import { IWizardElement } from "../../../../Common/GenericWizard/types";
import { LinearProgress } from "@mui/material";
import { niceBytes } from "../../../../../../common/utils";
import {
  formFieldStyles,
  modalStyleUtils,
} from "../../../../Common/FormComponents/common/styleLibrary";

import { AppState } from "../../../../../../store";
import { resetEditPoolForm, setInitialPoolDetails } from "./editPoolSlice";
import EditPoolButton from "./EditPoolButton";

interface IEditPoolProps {
  classes: any;
  open: boolean;
  match: any;
}

const styles = (theme: Theme) =>
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
    editPoolTitle: {
      border: "1px solid #EAEAEA",
      borderBottom: 0,
    },
    ...formFieldStyles,
    ...modalStyleUtils,
  });

const EditPool = ({ classes, open }: IEditPoolProps) => {
  const dispatch = useDispatch();

  const tenant = useSelector(
    (state: AppState) => state.tenants.tenantDetails.tenantInfo
  );
  const selectedPool = useSelector(
    (state: AppState) => state.tenants.tenantDetails.selectedPool
  );

  const editSending = useSelector(
    (state: AppState) => state.editPool.editSending
  );

  const poolsURL = `/namespaces/${tenant?.namespace || ""}/tenants/${
    tenant?.name || ""
  }/pools`;

  useEffect(() => {
    if (selectedPool) {
      const poolDetails = tenant?.pools.find(
        (pool) => pool.name === selectedPool
      );

      if (poolDetails) {
        dispatch(setInitialPoolDetails(poolDetails));
      } else {
        history.push("/tenants");
      }
    }
  }, [selectedPool, dispatch, tenant]);

  const cancelButton = {
    label: "Cancel",
    type: "other",
    enabled: true,
    action: () => {
      dispatch(resetEditPoolForm());
      history.push(poolsURL);
    },
  };

  const createButton = {
    componentRender: <EditPoolButton />,
  };

  const wizardSteps: IWizardElement[] = [
    {
      label: "Pool Resources",
      componentRender: <EditPoolResources />,
      buttons: [cancelButton, createButton],
    },
    {
      label: "Configuration",
      advancedOnly: true,
      componentRender: <EditPoolConfiguration />,
      buttons: [cancelButton, createButton],
    },
    {
      label: "Pod Placement",
      advancedOnly: true,
      componentRender: <EditPoolPlacement />,
      buttons: [cancelButton, createButton],
    },
  ];

  return (
    <Fragment>
      <Grid item xs={12}>
        <PageHeader
          label={
            <Fragment>
              <BackLink to={poolsURL} label={`Pool Details`} />
            </Fragment>
          }
        />
        <PageLayout>
          <Grid item xs={12} className={classes.editPoolTitle}>
            <ScreenTitle
              icon={<TenantsIcon />}
              title={`Edit Pool - ${selectedPool}`}
              subTitle={
                <Fragment>
                  Namespace: {tenant?.namespace || ""} / Current Capacity:{" "}
                  {niceBytes((tenant?.total_size || 0).toString(10))} / Tenant:{" "}
                  {tenant?.name || ""}
                </Fragment>
              }
            />
          </Grid>

          {editSending && (
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

export default withStyles(styles)(EditPool);
