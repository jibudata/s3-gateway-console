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

import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import { Theme } from "@mui/material/styles";
import {
  actionsTray,
  containerForHeader,
  searchField,
  tenantDetailsStyles,
} from "../../Common/FormComponents/common/styleLibrary";
import Grid from "@mui/material/Grid";
import { Button, CircularProgress, DialogContentText } from "@mui/material";
import Paper from "@mui/material/Paper";
import api from "../../../../common/api";
import { ITenant } from "../ListTenants/types";
import { AppState } from "../../../../store";
import { ErrorResponseHandler } from "../../../../common/types";
import { EditIcon } from "../../../../icons";
import { setErrorSnackMessage } from "../../../../actions";
import EditTenantLogsModal from "./EditTenantLogsModal";
import KeyPairView from "./KeyPairView";
import { ITenantLogsStruct } from "../ListTenants/types";
import ConfirmDialog from "../../Common/ModalWrapper/ConfirmDialog";
import FormSwitchWrapper from "../../Common/FormComponents/FormSwitchWrapper/FormSwitchWrapper";

interface ITenantLogs {
  classes: any;
  match: any;
  tenant: ITenant | null;
  loadingTenant: boolean;
}

const styles = (theme: Theme) =>
  createStyles({
    ...tenantDetailsStyles,
    headerLabel: {
      fontSize: 22,
      fontWeight: 600,
      color: "#000",
      marginTop: 4,
    },
    breadcrumLink: {
      textDecoration: "none",
      color: "black",
    },
    tableWrapper: {
      height: "calc(100vh - 267px)",
    },
    paperContainer: {
      padding: "15px 15px 15px 50px",
    },
    ...actionsTray,
    ...searchField,
    ...containerForHeader(theme.spacing(4)),
  });

const TenantLogging = ({
  classes,
  match,
  tenant,
  loadingTenant,
}: ITenantLogs) => {
  const [loadingTenantLogs, setLoadingTenantLogs] = useState<boolean>(true);
  const [logInfo, setLogInfo] = useState<ITenantLogsStruct>();
  const [edit, setEdit] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [preDisabled, setPreDisabled] = useState<boolean>(false);
  const [disableDialogOpen, setDisableDialogOpen] = useState<boolean>(false);
  const [enableDialogOpen, setEnableDialogOpen] = useState<boolean>(false);

  const tenantName = match.params["tenantName"];
  const tenantNamespace = match.params["tenantNamespace"];

  useEffect(() => {
    if (loadingTenantLogs) {
      api
        .invoke(
          "GET",
          `/api/v1/namespaces/${tenantNamespace}/tenants/${tenantName}/log`
        )
        .then((result: ITenantLogsStruct) => {
          setLogInfo(result);
          setPreDisabled(result.disabled);
          setDisabled(result.disabled);
          setLoadingTenantLogs(false);
        })
        .catch((err: ErrorResponseHandler) => {
          setErrorSnackMessage({
            errorMessage: "Error getting tenant logs",
            detailedError: err.detailedError,
          });
        });
    }
  }, [tenantName, tenantNamespace, loadingTenantLogs, setDisabled, disabled]);

  const onCloseEditAndRefresh = () => {
    setDisableDialogOpen(false);
    setEdit(false);
    setLoadingTenantLogs(true);
  };

  const onCloseEnableAndRefresh = () => {
    setEnableDialogOpen(false);
    setDisabled(false);
    setLoadingTenantLogs(true);
  };

  return (
    <Fragment>
      <ConfirmDialog
        title="Disable Logging?"
        confirmText="Disable"
        isOpen={disableDialogOpen}
        onConfirm={() => {
          api
            .invoke(
              "POST",
              `/api/v1/namespaces/${tenantNamespace}/tenants/${tenantName}/disable-logging`
            )
            .then(() => {
              setPreDisabled(true);
              setDisabled(true);
            })
            .catch((err: ErrorResponseHandler) => {
              setErrorSnackMessage({
                errorMessage: "Error disabling logging",
                detailedError: err.detailedError,
              });
            });
          onCloseEditAndRefresh();
        }}
        onClose={() => setDisableDialogOpen(false)}
        confirmationContent={
          <DialogContentText>
            Disabling logging will erase any custom values you have used to
            configure logging
          </DialogContentText>
        }
      />
      <ConfirmDialog
        title="Enable Logging?"
        confirmText="Enable"
        isOpen={enableDialogOpen}
        onConfirm={() => {
          api
            .invoke(
              "POST",
              `/api/v1/namespaces/${tenantNamespace}/tenants/${tenantName}/enable-logging`
            )
            .then(() => {
              setPreDisabled(false);
            })
            .catch((err: ErrorResponseHandler) => {
              setErrorSnackMessage({
                errorMessage: "Error enabling logging",
                detailedError: err.detailedError,
              });
            });
          onCloseEnableAndRefresh();
        }}
        onClose={() => setEnableDialogOpen(false)}
        confirmationContent={
          <DialogContentText>
            Logging will be enabled with default values
          </DialogContentText>
        }
      />
      {edit && tenant !== null && logInfo != null && !disabled && (
        <EditTenantLogsModal
          open={edit}
          onClose={onCloseEditAndRefresh}
          tenant={tenant}
          image={logInfo.image}
          labels={logInfo.labels}
          annotations={logInfo.annotations}
          nodeSelector={logInfo.nodeSelector}
          diskCapacityGB={logInfo.diskCapacityGB}
          serviceAccountName={logInfo.serviceAccountName}
          dbImage={logInfo.dbImage}
          dbLabels={logInfo.dbLabels}
          dbAnnotations={logInfo.dbAnnotations}
          dbNodeSelector={logInfo.dbNodeSelector}
          dbServiceAccountName={logInfo.dbServiceAccountName}
        />
      )}
      <h1 className={classes.sectionTitle}>Logging</h1>
      <div className={classes.actionsTray}>
        <FormSwitchWrapper
          value="enableLogging"
          id="enableLogging"
          name="enableLogging"
          checked={!preDisabled}
          onChange={(e) => {
            const targetD = e.target;
            const checked = targetD.checked;
            if (checked) {
              setEnableDialogOpen(true);
            } else {
              setDisableDialogOpen(true);
            }
          }}
          label={"Logging"}
          indicatorLabels={["Enabled", "Disabled"]}
        />
        {!disabled && !loadingTenantLogs && (
          <Button
            variant="contained"
            color="primary"
            startIcon={<EditIcon />}
            onClick={() => {
              setEdit(true);
            }}
          >
            Edit
          </Button>
        )}
      </div>
      {!disabled && !loadingTenantLogs && (
        <Paper className={classes.paperContainer}>
          <Grid container>
            <Grid item xs={12}>
              <table width={"100%"}>
                <tbody>
                  {loadingTenant ? (
                    <tr>
                      <td className={classes.centerAlign} colSpan={4}>
                        <CircularProgress />
                      </td>
                    </tr>
                  ) : (
                    <Fragment>
                      <tr>
                        <td className={classes.titleCol}>Image:</td>
                        <td>{logInfo?.image}</td>
                      </tr>
                      <tr>
                        <td className={classes.titleCol}>
                          Disk Capacity (GB):
                        </td>
                        <td>{logInfo?.diskCapacityGB}</td>
                      </tr>
                      <tr>
                        <td className={classes.titleCol}>
                          Service Account Name:
                        </td>
                        <td>{logInfo?.serviceAccountName}</td>
                      </tr>
                      <tr>
                        <td>
                          <h4>Labels</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <KeyPairView
                            records={
                              logInfo != null && logInfo.labels.length > 0
                                ? logInfo.labels
                                : []
                            }
                            recordName="Labels"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h4>Annotations</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <KeyPairView
                            records={
                              logInfo != null && logInfo.annotations.length > 0
                                ? logInfo.annotations
                                : []
                            }
                            recordName="Annotations"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h4>Node Selector</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <KeyPairView
                            records={
                              logInfo != null && logInfo.nodeSelector.length > 0
                                ? logInfo.nodeSelector
                                : []
                            }
                            recordName="Node Selector"
                          />
                        </td>
                      </tr>
                    </Fragment>
                  )}
                </tbody>
              </table>
              <hr className={classes.hrClass} />
              <table width={"100%"}>
                <tbody>
                  {loadingTenant ? (
                    <tr>
                      <td className={classes.centerAlign} colSpan={4}>
                        <CircularProgress />
                      </td>
                    </tr>
                  ) : (
                    <Fragment>
                      <tr>
                        <td className={classes.titleCol}>Db Image:</td>
                        <td>{logInfo?.dbImage}</td>
                      </tr>
                      <tr>
                        <td className={classes.titleCol}>
                          Db Service Account Name:
                        </td>
                        <td>{logInfo?.dbServiceAccountName}</td>
                      </tr>
                      <tr>
                        <td>
                          <h4>Db Labels</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <KeyPairView
                            records={
                              logInfo != null && logInfo.dbLabels?.length > 0
                                ? logInfo.dbLabels
                                : []
                            }
                            recordName="Db Labels"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h4>Db Annotations</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <KeyPairView
                            records={
                              logInfo != null &&
                              logInfo.dbAnnotations?.length > 0
                                ? logInfo.dbAnnotations
                                : []
                            }
                            recordName="Db Annotations"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h4>Db Node Selector</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <KeyPairView
                            records={
                              logInfo != null &&
                              logInfo.dbNodeSelector?.length > 0
                                ? logInfo.dbNodeSelector
                                : []
                            }
                            recordName="Db Node Selector"
                          />
                        </td>
                      </tr>
                    </Fragment>
                  )}
                </tbody>
              </table>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Fragment>
  );
};

const mapState = (state: AppState) => ({
  loadingTenant: state.tenants.tenantDetails.loadingTenant,
  selectedTenant: state.tenants.tenantDetails.currentTenant,
  tenant: state.tenants.tenantDetails.tenantInfo,
});

const connector = connect(mapState, null);

export default withStyles(styles)(connector(TenantLogging));
