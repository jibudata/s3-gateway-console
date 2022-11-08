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
import React, { Fragment, useEffect, useState } from "react";
import { IAMPolicy, IAMStatement, Policy } from "./types";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "mds";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import {
  actionsTray,
  containerForHeader,
  modalBasic,
  searchField,
} from "../Common/FormComponents/common/styleLibrary";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { LinearProgress } from "@mui/material";
import TableWrapper from "../Common/TableWrapper/TableWrapper";
import api from "../../../common/api";
import PageHeader from "../Common/PageHeader/PageHeader";

import { ErrorResponseHandler } from "../../../common/types";
import CodeMirrorWrapper from "../Common/FormComponents/CodeMirrorWrapper/CodeMirrorWrapper";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import ScreenTitle from "../Common/ScreenTitle/ScreenTitle";
import IAMPoliciesIcon from "../../../icons/IAMPoliciesIcon";
import RefreshIcon from "../../../icons/RefreshIcon";
import SearchIcon from "../../../icons/SearchIcon";
import TrashIcon from "../../../icons/TrashIcon";
import PageLayout from "../Common/Layout/PageLayout";
import VerticalTabs from "../Common/VerticalTabs/VerticalTabs";
import BackLink from "../../../common/BackLink";
import {
  CONSOLE_UI_RESOURCE,
  createPolicyPermissions,
  deletePolicyPermissions,
  getGroupPermissions,
  IAM_PAGES,
  IAM_SCOPES,
  listGroupPermissions,
  listUsersPermissions,
  permissionTooltipHelper,
  viewPolicyPermissions,
  viewUserPermissions,
} from "../../../common/SecureComponent/permissions";
import {
  hasPermission,
  SecureComponent,
} from "../../../common/SecureComponent";

import withSuspense from "../Common/Components/withSuspense";

import PolicyView from "./PolicyView";
import { decodeURLString, encodeURLString } from "../../../common/utils";
import { setErrorSnackMessage, setSnackBarMessage } from "../../../systemSlice";
import { selFeatures } from "../consoleSlice";
import { useAppDispatch } from "../../../store";
import TooltipWrapper from "../Common/TooltipWrapper/TooltipWrapper";

const DeletePolicy = withSuspense(React.lazy(() => import("./DeletePolicy")));

const styles = (theme: Theme) =>
  createStyles({
    buttonContainer: {
      display: "flex",
      justifyContent: "flex-end",
      paddingTop: 16,
      "& button": {
        marginLeft: 8,
      },
    },
    pageContainer: {
      border: "1px solid #EAEAEA",
      height: "100%",
    },
    paperContainer: {
      padding: "15px 15px 15px 50px",
      minHeight: "450px",
    },
    statement: {
      border: "1px solid #DADADA",
      padding: 8,
      marginBottom: 8,
      borderRadius: 4,
    },
    labelCol: {
      fontWeight: "bold",
    },
    ...actionsTray,
    ...searchField,
    ...modalBasic,
    ...containerForHeader(theme.spacing(4)),
  });

interface IPolicyDetailsProps {
  classes: any;
}

const PolicyDetails = ({ classes }: IPolicyDetailsProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const features = useSelector(selFeatures);

  const [policy, setPolicy] = useState<Policy | null>(null);
  const [policyStatements, setPolicyStatements] = useState<IAMStatement[]>([]);
  const [userList, setUserList] = useState<string[]>([]);
  const [groupList, setGroupList] = useState<string[]>([]);
  const [addLoading, setAddLoading] = useState<boolean>(false);

  const policyName = decodeURLString(params.policyName || "");

  const [policyDefinition, setPolicyDefinition] = useState<string>("");
  const [loadingPolicy, setLoadingPolicy] = useState<boolean>(true);
  const [filterUsers, setFilterUsers] = useState<string>("");
  const [loadingUsers, setLoadingUsers] = useState<boolean>(true);
  const [filterGroups, setFilterGroups] = useState<string>("");
  const [loadingGroups, setLoadingGroups] = useState<boolean>(true);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);

  const ldapIsEnabled = (features && features.includes("ldap-idp")) || false;

  const displayGroups = hasPermission(
    CONSOLE_UI_RESOURCE,
    listGroupPermissions,
    true
  );

  const viewGroup = hasPermission(
    CONSOLE_UI_RESOURCE,
    getGroupPermissions,
    true
  );

  const displayUsers = hasPermission(
    CONSOLE_UI_RESOURCE,
    listUsersPermissions,
    true
  );

  const viewUser = hasPermission(
    CONSOLE_UI_RESOURCE,
    viewUserPermissions,
    true
  );

  const displayPolicy = hasPermission(
    CONSOLE_UI_RESOURCE,
    viewPolicyPermissions,
    true
  );

  const canDeletePolicy = hasPermission(
    CONSOLE_UI_RESOURCE,
    deletePolicyPermissions,
    true
  );

  const canEditPolicy = hasPermission(
    CONSOLE_UI_RESOURCE,
    createPolicyPermissions,
    true
  );

  const saveRecord = (event: React.FormEvent) => {
    event.preventDefault();
    if (addLoading) {
      return;
    }
    setAddLoading(true);
    if (canEditPolicy) {
      api
        .invoke("POST", "/api/v1/policies", {
          name: policyName,
          policy: policyDefinition,
        })
        .then((_) => {
          setAddLoading(false);
          dispatch(setSnackBarMessage("Policy successfully updated"));
          refreshPolicyDetails();
        })
        .catch((err: ErrorResponseHandler) => {
          setAddLoading(false);
          dispatch(setErrorSnackMessage(err));
        });
    } else {
      setAddLoading(false);
    }
  };

  useEffect(() => {
    const loadUsersForPolicy = () => {
      if (loadingUsers) {
        if (displayUsers && !ldapIsEnabled) {
          api
            .invoke(
              "GET",
              `/api/v1/policies/${encodeURLString(policyName)}/users`
            )
            .then((result: any) => {
              setUserList(result);
              setLoadingUsers(false);
            })
            .catch((err: ErrorResponseHandler) => {
              dispatch(setErrorSnackMessage(err));
              setLoadingUsers(false);
            });
        } else {
          setLoadingUsers(false);
        }
      }
    };

    const loadGroupsForPolicy = () => {
      if (loadingGroups) {
        if (displayGroups && !ldapIsEnabled) {
          api
            .invoke(
              "GET",
              `/api/v1/policies/${encodeURLString(policyName)}/groups`
            )
            .then((result: any) => {
              setGroupList(result);
              setLoadingGroups(false);
            })
            .catch((err: ErrorResponseHandler) => {
              dispatch(setErrorSnackMessage(err));
              setLoadingGroups(false);
            });
        } else {
          setLoadingGroups(false);
        }
      }
    };
    const loadPolicyDetails = () => {
      if (loadingPolicy) {
        if (displayPolicy) {
          api
            .invoke("GET", `/api/v1/policy/${encodeURLString(policyName)}`)
            .then((result: any) => {
              if (result) {
                setPolicy(result);
                setPolicyDefinition(
                  result
                    ? JSON.stringify(JSON.parse(result.policy), null, 4)
                    : ""
                );

                const pol: IAMPolicy = JSON.parse(result.policy);
                setPolicyStatements(pol.Statement);
              }
              setLoadingPolicy(false);
            })
            .catch((err: ErrorResponseHandler) => {
              dispatch(setErrorSnackMessage(err));
              setLoadingPolicy(false);
            });
        } else {
          setLoadingPolicy(false);
        }
      }
    };

    if (loadingPolicy) {
      loadPolicyDetails();
      loadUsersForPolicy();
      loadGroupsForPolicy();
    }
  }, [
    policyName,
    loadingPolicy,
    loadingUsers,
    loadingGroups,
    setUserList,
    setGroupList,
    setPolicyDefinition,
    setPolicy,
    setLoadingUsers,
    setLoadingGroups,
    displayUsers,
    displayGroups,
    displayPolicy,
    ldapIsEnabled,
    dispatch,
  ]);

  const resetForm = () => {
    setPolicyDefinition("{}");
  };

  const validSave = policyName.trim() !== "";

  const deletePolicy = () => {
    setDeleteOpen(true);
  };

  const closeDeleteModalAndRefresh = (refresh: boolean) => {
    setDeleteOpen(false);
    navigate(IAM_PAGES.POLICIES);
  };

  const userViewAction = (user: any) => {
    navigate(`${IAM_PAGES.USERS}/${encodeURLString(user)}`);
  };
  const userTableActions = [
    {
      type: "view",
      onClick: userViewAction,
      disableButtonFunction: () => !viewUser,
    },
  ];

  const filteredUsers = userList.filter((elementItem) =>
    elementItem.includes(filterUsers)
  );

  const groupViewAction = (group: any) => {
    navigate(`${IAM_PAGES.GROUPS}/${encodeURLString(group)}`);
  };

  const groupTableActions = [
    {
      type: "view",
      onClick: groupViewAction,
      disableButtonFunction: () => !viewGroup,
    },
  ];

  const filteredGroups = groupList.filter((elementItem) =>
    elementItem.includes(filterGroups)
  );

  const refreshPolicyDetails = () => {
    setLoadingUsers(true);
    setLoadingGroups(true);
    setLoadingPolicy(true);
  };

  return (
    <Fragment>
      {deleteOpen && (
        <DeletePolicy
          deleteOpen={deleteOpen}
          selectedPolicy={policyName}
          closeDeleteModalAndRefresh={closeDeleteModalAndRefresh}
        />
      )}

      <PageHeader
        label={
          <Fragment>
            <BackLink to={IAM_PAGES.POLICIES} label={t("Policy")} />
          </Fragment>
        }
      />

      <PageLayout className={classes.pageContainer}>
        <Grid item xs={12}>
          <ScreenTitle
            icon={
              <Fragment>
                <IAMPoliciesIcon width={40} />
              </Fragment>
            }
            title={policyName}
            subTitle={<Fragment>{t("IAM Policy")}</Fragment>}
            actions={
              <Fragment>
                <SecureComponent
                  scopes={[IAM_SCOPES.ADMIN_DELETE_POLICY]}
                  resource={CONSOLE_UI_RESOURCE}
                  errorProps={{ disabled: true }}
                >
                  <TooltipWrapper
                    tooltip={
                      canDeletePolicy
                        ? ""
                        : permissionTooltipHelper(
                            deletePolicyPermissions,
                            t("delete Policies")
                          )
                    }
                  >
                    <Button
                      id={"delete-policy"}
                      label={t("Delete Policy")}
                      variant="secondary"
                      icon={<TrashIcon />}
                      onClick={deletePolicy}
                      disabled={!canDeletePolicy}
                    />
                  </TooltipWrapper>
                </SecureComponent>

                <TooltipWrapper tooltip={t("Refresh")}>
                  <Button
                    id={"refresh-policy"}
                    label={t("Refresh")}
                    variant="regular"
                    icon={<RefreshIcon />}
                    onClick={() => {
                      refreshPolicyDetails();
                    }}
                  />
                </TooltipWrapper>
              </Fragment>
            }
          />
        </Grid>

        <VerticalTabs>
          {{
            tabConfig: { label: t("Summary"), disabled: !displayPolicy },
            content: (
              <Fragment>
                <div className={classes.sectionTitle}>
                  {t("Policy Summary")}
                </div>
                <Paper className={classes.paperContainer}>
                  <PolicyView policyStatements={policyStatements} />
                </Paper>
              </Fragment>
            ),
          }}
          {{
            tabConfig: {
              label: t("Users"),
              disabled: !displayUsers || ldapIsEnabled,
            },
            content: (
              <Fragment>
                <div className={classes.sectionTitle}>{t("Users")}</div>
                <Grid container>
                  {userList.length > 0 && (
                    <Grid item xs={12} className={classes.actionsTray}>
                      <TextField
                        placeholder={t("Search Users")}
                        className={classes.searchField}
                        id="search-resource"
                        label=""
                        onChange={(val) => {
                          setFilterUsers(val.target.value);
                        }}
                        InputProps={{
                          disableUnderline: true,
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                        variant="standard"
                      />
                    </Grid>
                  )}

                  <TableWrapper
                    itemActions={userTableActions}
                    columns={[{ label: t("Name"), elementKey: "name" }]}
                    isLoading={loadingUsers}
                    records={filteredUsers}
                    entityName="Users with this Policy associated"
                    idField="name"
                  />
                </Grid>
              </Fragment>
            ),
          }}
          {{
            tabConfig: {
              label: t("Groups"),
              disabled: !displayGroups || ldapIsEnabled,
            },
            content: (
              <Fragment>
                <div className={classes.sectionTitle}>{t("Groups")}</div>
                <Grid container>
                  {groupList.length > 0 && (
                    <Grid item xs={12} className={classes.actionsTray}>
                      <TextField
                        placeholder={t("Search Groups")}
                        className={classes.searchField}
                        id="search-resource"
                        label=""
                        onChange={(val) => {
                          setFilterGroups(val.target.value);
                        }}
                        InputProps={{
                          disableUnderline: true,
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                        variant="standard"
                      />
                    </Grid>
                  )}

                  <TableWrapper
                    itemActions={groupTableActions}
                    columns={[{ label: t("Name"), elementKey: "name" }]}
                    isLoading={loadingGroups}
                    records={filteredGroups}
                    entityName="Groups with this Policy associated"
                    idField="name"
                  />
                </Grid>
              </Fragment>
            ),
          }}
          {{
            tabConfig: { label: t("Raw Policy"), disabled: !displayPolicy },
            content: (
              <Fragment>
                <div className={classes.sectionTitle}>{t("Raw Policy")}</div>
                <form
                  noValidate
                  autoComplete="off"
                  onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    saveRecord(e);
                  }}
                >
                  <Grid container>
                    <Grid item xs={12}>
                      <CodeMirrorWrapper
                        readOnly={!canEditPolicy}
                        value={policyDefinition}
                        onBeforeChange={(editor, data, value) => {
                          setPolicyDefinition(value);
                        }}
                        editorHeight={"350px"}
                      />
                    </Grid>
                    <Grid item xs={12} className={classes.buttonContainer}>
                      {!policy && (
                        <button
                          type="button"
                          color="primary"
                          className={classes.clearButton}
                          onClick={() => {
                            resetForm();
                          }}
                        >
                          {t("Clear")}
                        </button>
                      )}

                      <SecureComponent
                        scopes={[IAM_SCOPES.ADMIN_CREATE_POLICY]}
                        resource={CONSOLE_UI_RESOURCE}
                        errorProps={{ disabled: true }}
                      >
                        <TooltipWrapper
                          tooltip={
                            canEditPolicy
                              ? ""
                              : permissionTooltipHelper(
                                  createPolicyPermissions,
                                  t("edit a Policy")
                                )
                          }
                        >
                          <Button
                            id={"save"}
                            type="submit"
                            variant="callAction"
                            color="primary"
                            disabled={
                              addLoading || !validSave || !canEditPolicy
                            }
                            label={t("Save")}
                          />
                        </TooltipWrapper>
                      </SecureComponent>
                    </Grid>
                    {addLoading && (
                      <Grid item xs={12}>
                        <LinearProgress />
                      </Grid>
                    )}
                  </Grid>
                </form>
              </Fragment>
            ),
          }}
        </VerticalTabs>
      </PageLayout>
    </Fragment>
  );
};

export default withStyles(styles)(PolicyDetails);
