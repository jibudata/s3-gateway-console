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
import { Button, LinearProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { Bucket, BucketList, HasPermissionResponse } from "../types";
import { AddIcon, BucketsIcon, WatchIcon } from "../../../../icons";
import { AppState } from "../../../../store";
import { addBucketOpen, addBucketReset } from "../actions";
import { setErrorSnackMessage } from "../../../../actions";
import {
  containerForHeader,
  linkStyles,
  searchField,
} from "../../Common/FormComponents/common/styleLibrary";
import { ErrorResponseHandler } from "../../../../common/types";
import api from "../../../../common/api";
import AddBucket from "./AddBucket";
import DeleteBucket from "./DeleteBucket";
import PageHeader from "../../Common/PageHeader/PageHeader";
import BucketListItem from "./BucketListItem";
import BulkReplicationModal from "./BulkReplicationModal";
import HelpBox from "../../../../common/HelpBox";
import { ISessionResponse } from "../../types";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "../../../../icons/SearchIcon";
import BoxIconButton from "../../Common/BoxIconButton";
import RefreshIcon from "../../../../icons/RefreshIcon";

const styles = (theme: Theme) =>
  createStyles({
    seeMore: {
      marginTop: theme.spacing(3),
    },
    paper: {
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
    minTableHeader: {
      color: "#393939",
      "& tr": {
        "& th": {
          fontWeight: "bold",
        },
      },
    },
    buttonTray: {
      textAlign: "right",
      "& .MuiButton-root": {
        fontSize: 12,
        borderColor: theme.palette.grey["300"],
        color: theme.palette.grey["300"],
        textTransform: "capitalize",
        marginLeft: 8,
      },
      "& .MuiButton-contained": {
        color: "white",
      },
    },
    bulkSelect: {
      marginLeft: 8,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
      "&.MuiButton-contained": {
        backgroundColor: theme.palette.primary.main,
      },
    },
    theaderSearchLabel: {
      color: theme.palette.grey["400"],
      fontSize: 14,
      fontWeight: "bold",
    },
    addBucket: {
      marginLeft: 8,
    },
    theaderSearch: {
      borderColor: theme.palette.grey["200"],
      "& .MuiInputBase-input": {
        paddingTop: 10,
        paddingBottom: 10,
      },
      "& .MuiInputBase-root": {
        "& .MuiInputAdornment-root": {
          "& .MuiSvgIcon-root": {
            color: theme.palette.grey["400"],
            height: 14,
          },
        },
      },
      actionHeaderItems: {
        "@media (min-width: 320px)": {
          marginTop: 8,
        },
      },
      marginRight: 10,
      marginLeft: 10,
    },
    ...containerForHeader(theme.spacing(4)),
    ...searchField,
    constrainedContainer: {
      maxWidth: 1180,
    },
    ...linkStyles(theme.palette.info.main),
  });

interface IListBucketsProps {
  classes: any;
  history: any;
  addBucketOpen: typeof addBucketOpen;
  addBucketModalOpen: boolean;
  addBucketReset: typeof addBucketReset;
  setErrorSnackMessage: typeof setErrorSnackMessage;
  session: ISessionResponse;
}

const ListBuckets = ({
  classes,
  history,
  addBucketOpen,
  addBucketModalOpen,
  addBucketReset,
  setErrorSnackMessage,
  session,
}: IListBucketsProps) => {
  const [records, setRecords] = useState<Bucket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [selectedBucket, setSelectedBucket] = useState<string>("");
  const [filterBuckets, setFilterBuckets] = useState<string>("");
  const [loadingPerms, setLoadingPerms] = useState<boolean>(true);
  const [canCreateBucket, setCanCreateBucket] = useState<boolean>(false);
  const [selectedBuckets, setSelectedBuckets] = useState<string[]>([]);
  const [replicationModalOpen, setReplicationModalOpen] =
    useState<boolean>(false);

  const [bulkSelect, setBulkSelect] = useState<boolean>(false);

  // check the permissions for creating bucket
  useEffect(() => {
    if (loadingPerms) {
      api
        .invoke("POST", `/api/v1/has-permission`, {
          actions: [
            {
              id: "createBucket",
              action: "s3:CreateBucket",
            },
          ],
        })
        .then((res: HasPermissionResponse) => {
          setLoadingPerms(false);
          if (!res.permissions) {
            return;
          }
          const actions = res.permissions ? res.permissions : [];

          let canCreate = actions.find((s) => s.id === "createBucket");
          if (canCreate && canCreate.can) {
            setCanCreateBucket(true);
          } else {
            setCanCreateBucket(false);
          }

          setLoadingPerms(false);
        })
        .catch((err: ErrorResponseHandler) => {
          setLoadingPerms(false);
          setErrorSnackMessage(err);
        });
    }
  }, [loadingPerms, setErrorSnackMessage]);

  useEffect(() => {
    if (loading) {
      const fetchRecords = () => {
        setLoading(true);
        api
          .invoke("GET", `/api/v1/buckets`)
          .then((res: BucketList) => {
            setLoading(false);
            setRecords(res.buckets || []);
          })
          .catch((err: ErrorResponseHandler) => {
            setLoading(false);
            setErrorSnackMessage(err);
          });
      };
      fetchRecords();
    }
  }, [loading, setErrorSnackMessage]);

  const closeAddModalAndRefresh = (refresh: boolean) => {
    addBucketOpen(false);
    addBucketReset();

    if (refresh) {
      setLoading(true);
      setSelectedBuckets([]);
    }
  };

  const closeDeleteModalAndRefresh = (refresh: boolean) => {
    setDeleteOpen(false);
    if (refresh) {
      setLoading(true);
      setSelectedBuckets([]);
    }
  };

  const confirmDeleteBucket = (bucket: string) => {
    setDeleteOpen(true);
    setSelectedBucket(bucket);
  };

  const filteredRecords = records.filter((b: Bucket) => {
    if (filterBuckets === "") {
      return true;
    } else {
      if (b.name.indexOf(filterBuckets) >= 0) {
        return true;
      } else {
        return false;
      }
    }
  });

  const selectListBuckets = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetD = e.target;
    const value = targetD.value;
    const checked = targetD.checked;

    let elements: string[] = [...selectedBuckets]; // We clone the selectedBuckets array

    if (checked) {
      // If the user has checked this field we need to push this to selectedBucketsList
      elements.push(value);
    } else {
      // User has unchecked this field, we need to remove it from the list
      elements = elements.filter((element) => element !== value);
    }
    setSelectedBuckets(elements);

    return elements;
  };

  const closeBulkReplicationModal = (unselectAll: boolean) => {
    setReplicationModalOpen(false);

    if (unselectAll) {
      setSelectedBuckets([]);
    }
  };

  return (
    <Fragment>
      {addBucketModalOpen && (
        <AddBucket
          open={addBucketModalOpen}
          closeModalAndRefresh={closeAddModalAndRefresh}
        />
      )}
      {deleteOpen && (
        <DeleteBucket
          deleteOpen={deleteOpen}
          selectedBucket={selectedBucket}
          closeDeleteModalAndRefresh={(refresh: boolean) => {
            closeDeleteModalAndRefresh(refresh);
          }}
        />
      )}
      {replicationModalOpen && (
        <BulkReplicationModal
          open={replicationModalOpen}
          buckets={selectedBuckets}
          closeModalAndRefresh={closeBulkReplicationModal}
        />
      )}
      <PageHeader label={"Buckets"} />
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.buttonTray}>
          <Grid container>
            <Grid item xs={12} sm>
              <TextField
                placeholder="Filter Buckets"
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
                  setFilterBuckets(e.target.value);
                }}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={"auto"}>
              <Button
                variant={bulkSelect ? "contained" : "outlined"}
                onClick={() => {
                  setBulkSelect(!bulkSelect);
                }}
                endIcon={<WatchIcon />}
                size={"small"}
                className={classes.bulkSelect}
              >
                Bulk Select
              </Button>

              <Button
                variant="outlined"
                endIcon={<FileCopyIcon />}
                onClick={() => {
                  setReplicationModalOpen(true);
                }}
                disabled={selectedBuckets.length === 0}
                size={"small"}
              >
                Set Replication
              </Button>
              <BoxIconButton
                color="primary"
                aria-label="Refresh List"
                onClick={() => {
                  setLoading(true);
                }}
                size="large"
              >
                <RefreshIcon />
              </BoxIconButton>
              {canCreateBucket && (
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<AddIcon />}
                  onClick={() => {
                    addBucketOpen(true);
                  }}
                  className={classes.addBucket}
                >
                  Create Bucket
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <br />
        </Grid>
        {loading && <LinearProgress />}
        {!loading && (
          <Grid item xs={12}>
            {filteredRecords.map((bucket, index) => {
              return (
                <BucketListItem
                  bucket={bucket}
                  key={`bucketListItem-${index.toString()}`}
                  onDelete={confirmDeleteBucket}
                  onSelect={selectListBuckets}
                  selected={selectedBuckets.includes(bucket.name)}
                  bulkSelect={bulkSelect}
                />
              );
            })}
            {filteredRecords.length === 0 && filterBuckets !== "" && (
              <Grid
                container
                justifyContent={"center"}
                alignContent={"center"}
                alignItems={"center"}
              >
                <Grid item xs={8}>
                  <HelpBox
                    iconComponent={<BucketsIcon />}
                    title={"No Results"}
                    help={
                      <Fragment>
                        No buckets match the filtering condition
                      </Fragment>
                    }
                  />
                </Grid>
              </Grid>
            )}
            {filteredRecords.length === 0 && filterBuckets === "" && (
              <Grid
                container
                justifyContent={"center"}
                alignContent={"center"}
                alignItems={"center"}
              >
                <Grid item xs={8}>
                  <HelpBox
                    iconComponent={<BucketsIcon />}
                    title={"Buckets"}
                    help={
                      <Fragment>
                        MinIO uses buckets to organize objects. A bucket is
                        similar to a folder or directory in a filesystem, where
                        each bucket can hold an arbitrary number of objects.
                        <br />
                        <br />
                        To get started,&nbsp;
                        <a
                          className={classes.link}
                          onClick={() => {
                            addBucketOpen(true);
                          }}
                        >
                          Create a Bucket.
                        </a>
                        refresh
                      </Fragment>
                    }
                  />
                </Grid>
              </Grid>
            )}
          </Grid>
        )}
      </Grid>
    </Fragment>
  );
};

const mapState = (state: AppState) => ({
  addBucketModalOpen: state.buckets.open,
  session: state.console.session,
});

const connector = connect(mapState, {
  addBucketOpen,
  addBucketReset,
  setErrorSnackMessage,
});

export default connector(withStyles(styles)(ListBuckets));
