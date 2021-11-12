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
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Button, LinearProgress } from "@mui/material";
import { AddIcon, GroupsIcon, UsersIcon } from "../../../icons";
import { setErrorSnackMessage } from "../../../actions";
import { GroupsList } from "./types";
import { stringSort } from "../../../utils/sortFunctions";
import {
  actionsTray,
  containerForHeader,
  searchField,
} from "../Common/FormComponents/common/styleLibrary";
import { ErrorResponseHandler } from "../../../common/types";
import api from "../../../common/api";
import AddGroup from "../Groups/AddGroup";
import DeleteGroup from "./DeleteGroup";
import TableWrapper from "../Common/TableWrapper/TableWrapper";
import SetPolicy from "../Policies/SetPolicy";
import PageHeader from "../Common/PageHeader/PageHeader";
import SearchIcon from "../../../icons/SearchIcon";
import HelpBox from "../../../common/HelpBox";
import history from "../../../history";
import AButton from "../Common/AButton/AButton";
import PageLayout from "../Common/Layout/PageLayout";

interface IGroupsProps {
  classes: any;
  openGroupModal: any;
  setErrorSnackMessage: typeof setErrorSnackMessage;
}

const styles = (theme: Theme) =>
  createStyles({
    seeMore: {
      marginTop: theme.spacing(3),
    },
    pageContainer: {
      border: "1px solid #EAEAEA",
      width: "100%",
    },
    paper: {
      // padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    addSideBar: {
      width: "320px",
      padding: "20px",
    },
    tableToolbar: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(0),
    },
    wrapCell: {
      maxWidth: "200px",
      whiteSpace: "normal",
      wordWrap: "break-word",
    },
    twHeight: {
      minHeight: 600,
    },
    minTableHeader: {
      color: "#393939",
      "& tr": {
        "& th": {
          fontWeight: "bold",
        },
      },
    },
    ...actionsTray,
    ...searchField,
    ...containerForHeader(theme.spacing(4)),
  });

const Groups = ({ classes, setErrorSnackMessage }: IGroupsProps) => {
  const [addGroupOpen, setGroupOpen] = useState<boolean>(false);
  const [selectedGroup, setSelectedGroup] = useState<any>(null);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [loading, isLoading] = useState<boolean>(false);
  const [records, setRecords] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [policyOpen, setPolicyOpen] = useState<boolean>(false);

  useEffect(() => {
    isLoading(true);
  }, []);

  useEffect(() => {
    isLoading(true);
  }, []);

  useEffect(() => {
    if (loading) {
      const fetchRecords = () => {
        api
          .invoke("GET", `/api/v1/groups`)
          .then((res: GroupsList) => {
            let resGroups: string[] = [];
            if (res.groups !== null) {
              resGroups = res.groups.sort(stringSort);
            }
            setRecords(resGroups);
            isLoading(false);
          })
          .catch((err: ErrorResponseHandler) => {
            setErrorSnackMessage(err);
            isLoading(false);
          });
      };
      fetchRecords();
    }
  }, [loading, setErrorSnackMessage]);

  const closeAddModalAndRefresh = () => {
    setGroupOpen(false);
    isLoading(true);
  };

  const closeDeleteModalAndRefresh = (refresh: boolean) => {
    setDeleteOpen(false);

    if (refresh) {
      isLoading(true);
    }
  };

  const filteredRecords = records.filter((elementItem) =>
    elementItem.includes(filter)
  );

  const viewAction = (group: any) => {
    history.push(`/groups/${group}`);
  };

  const deleteAction = (group: any) => {
    setDeleteOpen(true);
    setSelectedGroup(group);
  };

  const tableActions = [
    { type: "view", onClick: viewAction },
    { type: "delete", onClick: deleteAction },
  ];

  return (
    <React.Fragment>
      {addGroupOpen && (
        <AddGroup
          open={addGroupOpen}
          selectedGroup={selectedGroup}
          closeModalAndRefresh={closeAddModalAndRefresh}
        />
      )}
      {deleteOpen && (
        <DeleteGroup
          deleteOpen={deleteOpen}
          selectedGroup={selectedGroup}
          closeDeleteModalAndRefresh={closeDeleteModalAndRefresh}
        />
      )}
      {setPolicyOpen && (
        <SetPolicy
          open={policyOpen}
          selectedGroup={selectedGroup}
          selectedUser={null}
          closeModalAndRefresh={() => {
            setPolicyOpen(false);
          }}
        />
      )}
      <PageHeader label={"Groups"} />

      <PageLayout>
        <Grid item xs={12} className={classes.actionsTray}>
          <TextField
            placeholder="Search Groups"
            className={classes.searchField}
            id="search-resource"
            label=""
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            variant="standard"
          />
          <Button
            variant="contained"
            color="primary"
            endIcon={<AddIcon />}
            onClick={() => {
              setSelectedGroup(null);
              setGroupOpen(true);
            }}
          >
            Create Group
          </Button>
        </Grid>

        <Grid item xs={12}>
          <br />
        </Grid>
        {loading && <LinearProgress />}
        {!loading && (
          <Fragment>
            {records.length > 0 && (
              <Fragment>
                <Grid item xs={12}>
                  <TableWrapper
                    itemActions={tableActions}
                    columns={[{ label: "Name", elementKey: "" }]}
                    isLoading={loading}
                    records={filteredRecords}
                    entityName="Groups"
                    idField=""
                  />
                </Grid>
                <Grid item xs={12}>
                  <HelpBox
                    title={"Groups"}
                    iconComponent={<GroupsIcon />}
                    help={
                      <Fragment>
                        A group can have one attached IAM policy, where all
                        users with membership in that group inherit that policy.
                        Groups support more simplified management of user
                        permissions on the MinIO Tenant.
                        <br />
                        <br />
                        You can learn more at our{" "}
                        <a
                          href="https://docs.min.io/minio/k8s/tutorials/group-management.html?ref=con"
                          target="_blank"
                          rel="noreferrer"
                        >
                          documentation
                        </a>
                        .
                      </Fragment>
                    }
                  />
                </Grid>
              </Fragment>
            )}
            {records.length === 0 && (
              <Grid
                container
                justifyContent={"center"}
                alignContent={"center"}
                alignItems={"center"}
              >
                <Grid item xs={8}>
                  <HelpBox
                    title={"Groups"}
                    iconComponent={<UsersIcon />}
                    help={
                      <Fragment>
                        A group can have one attached IAM policy, where all
                        users with membership in that group inherit that policy.
                        Groups support more simplified management of user
                        permissions on the MinIO Tenant.
                        <br />
                        <br />
                        To get started,{" "}
                        <AButton
                          onClick={() => {
                            setSelectedGroup(null);
                            setGroupOpen(true);
                          }}
                        >
                          Create a Group
                        </AButton>
                        .
                      </Fragment>
                    }
                  />
                </Grid>
              </Grid>
            )}
          </Fragment>
        )}
      </PageLayout>
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  setErrorSnackMessage,
};

const connector = connect(null, mapDispatchToProps);

export default withStyles(styles)(connector(Groups));
