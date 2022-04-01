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

import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import { Button, SelectChangeEvent } from "@mui/material";
import get from "lodash/get";
import Grid from "@mui/material/Grid";
import {
  containerForHeader,
} from "../../Common/FormComponents/common/styleLibrary";
import {BucketReplication, BulkReplicationResponse} from "../types";
import {setErrorSnackMessage} from "../../../../actions";
import { ErrorResponseHandler } from "../../../../common/types";
import InputBoxWrapper from "../../Common/FormComponents/InputBoxWrapper/InputBoxWrapper";
import api from "../../../../common/api";
import SelectWrapper from "../../Common/FormComponents/SelectWrapper/SelectWrapper";
import FormSwitchWrapper from "../../Common/FormComponents/FormSwitchWrapper/FormSwitchWrapper";
import { getBytes, k8sScalarUnitsExcluding } from "../../../../common/utils";
import QueryMultiSelector from "../../Common/FormComponents/QueryMultiSelector/QueryMultiSelector";
import InputUnitMenu from "../../Common/FormComponents/InputUnitMenu/InputUnitMenu";
import PageHeader from "../../Common/PageHeader/PageHeader";
import BackLink from "../../../../common/BackLink";
import PageLayout from "../../Common/Layout/PageLayout";
import {BucketReplicationIcon} from "../../../../icons";

interface IAddReplication {
  classes: any;
  match: any;
  history: any;
  setErrorSnackMessage: typeof setErrorSnackMessage;
}

const styles = (theme: Theme) =>
    createStyles({
      buttonContainer: {
        marginTop: 24,
        textAlign: "right",
        "& .MuiButton-root": {
          marginLeft: 8,
        },
      },
      error: {
        color: "#b53b4b",
        border: "1px solid #b53b4b",
        padding: 8,
        borderRadius: 3,
      },
      title: {
        marginBottom: 8,
      },
      headTitle: {
        fontWeight: "bold",
        fontSize: 16,
        paddingLeft: 8,
      },
      h6title: {
        fontWeight: "bold",
        color: "#000000",
        fontSize: 20,
        paddingBottom: 8,
      },

        ...containerForHeader(theme.spacing(4)),
    });

const AddReplication = ({
  classes,
  match,
  history,
  setErrorSnackMessage,
}: IAddReplication) => {
  const [addLoading, setAddLoading] = useState<boolean>(true);
  const [priority, setPriority] = useState<string>("1");
  const [accessKey, setAccessKey] = useState<string>("");
  const [secretKey, setSecretKey] = useState<string>("");
  const [targetURL, setTargetURL] = useState<string>("");
  const [targetStorageClass, setTargetStorageClass] = useState<string>("");
  const [prefix, setPrefix] = useState<string>("");
  const [targetBucket, setTargetBucket] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [useTLS, setUseTLS] = useState<boolean>(true);
  const [repDeleteMarker, setRepDeleteMarker] = useState<boolean>(true);
  const [repDelete, setRepDelete] = useState<boolean>(true);
  const [metadataSync, setMetadataSync] = useState<boolean>(true);
  const [tags, setTags] = useState<string>("");
  const [replicationMode, setReplicationMode] = useState<string>("async");
  const [bandwidthScalar, setBandwidthScalar] = useState<string>("100");
  const [bandwidthUnit, setBandwidthUnit] = useState<string>("Gi");
  const [healthCheck, setHealthCheck] = useState<string>("60");
  const bucketName = match.params["bucketName"]

  useEffect(() => {
    if (addLoading) {
        api
            .invoke("GET", `/api/v1/buckets/${bucketName}/replication`)
            .then((res: BucketReplication) => {
              const r = res.rules ? res.rules : [];

              r.sort((a, b) => a.priority - b.priority);

              setAddLoading(false);
              if (r.length === 0) {
                setPriority("1");
                return;
              }

              const greatestValue = r.reduce((prevAcc, currValue) => {
                if (currValue.priority > prevAcc) {
                  return currValue.priority;
                }
                return prevAcc;
              }, 0);

              const nextPriority = greatestValue + 1;
              setPriority(nextPriority.toString());
            })
            .catch((err: ErrorResponseHandler) => {
              setErrorSnackMessage(err);
              setAddLoading(false);
            });
    }
  }, [
    addLoading,
    setErrorSnackMessage,
    bucketName,
  ]);

  const addRecord = () => {
    const replicate = [
      {
        originBucket: bucketName,
        destinationBucket: targetBucket,
      },
    ];

    const hc = parseInt(healthCheck);

    const endURL = `${useTLS ? "https://" : "http://"}${targetURL}`;

    const remoteBucketsInfo = {
      accessKey: accessKey,
      secretKey: secretKey,
      targetURL: endURL,
      region: region,
      bucketsRelation: replicate,
      syncMode: replicationMode,
      bandwidth:
        replicationMode === "async"
          ? parseInt(getBytes(bandwidthScalar, bandwidthUnit, true))
          : 0,
      healthCheckPeriod: hc,
      prefix: prefix,
      tags: tags,
      replicateDeleteMarkers: repDeleteMarker,
      replicateDeletes: repDelete,
      priority: parseInt(priority),
      storageClass: targetStorageClass,
      replicateMetadata: metadataSync,
    };

    api
      .invoke("POST", "/api/v1/buckets-replication", remoteBucketsInfo)
      .then((response: BulkReplicationResponse) => {
        setAddLoading(false);

        const states = get(response, "replicationState", []);

        if (states.length > 0) {
          const itemVal = states[0];

          setAddLoading(false);

          if (itemVal.errorString && itemVal.errorString !== "") {
            setErrorSnackMessage({
              errorMessage: itemVal.errorString,
              detailedError: "",
            });
            return;
          }

          return;
        }
        setErrorSnackMessage({
          errorMessage: "No changes applied",
          detailedError: "",
        });
      })
      .catch((err: ErrorResponseHandler) => {
        setAddLoading(false);
        setErrorSnackMessage(err);
      });
  };

  return (
      <Fragment>
        <PageHeader label={<BackLink label={"Back to Replication Rules"} to={`/buckets/${bucketName}/admin/replication`} />} />
        <PageLayout>
          <Grid item xs={12} className={classes.boxy}>
            <form
              noValidate
              autoComplete="off"
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                setAddLoading(true);
                addRecord();
                history.push(`/buckets/${bucketName}/admin/replication`)
              }}
            >
              <Grid container spacing={1}>
                  <Grid
                      item
                      xs={12}
                      container
                      className={classes.title}
                      alignItems={"center"}
                  >
                      <Grid item xs={"auto"}>
                          <BucketReplicationIcon />
                      </Grid>
                      <Grid item xs className={classes.headTitle}>
                          Add Replication Rule
                      </Grid>
                  </Grid>
                  <Grid item xs={12} className={classes.formFieldRow}>
                    <InputBoxWrapper
                      id="priority"
                      name="priority"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (e.target.validity.valid) {
                          setPriority(e.target.value);
                        }
                      }}
                      label="Priority"
                      value={priority}
                      pattern={"[0-9]*"}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.formFieldRow}>
                    <InputBoxWrapper
                      id="targetURL"
                      name="targetURL"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setTargetURL(e.target.value);
                      }}
                      placeholder="play.min.io"
                      label="Target URL"
                      value={targetURL}
                    />
                  </Grid>
                  <br />
                  <Grid item xs={12} className={classes.formFieldRow}>
                    <FormSwitchWrapper
                      checked={useTLS}
                      id="useTLS"
                      name="useTLS"
                      label="Use TLS"
                      onChange={(e) => {
                        setUseTLS(e.target.checked);
                      }}
                      value="yes"
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.formFieldRow}>
                    <InputBoxWrapper
                      id="accessKey"
                      name="accessKey"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setAccessKey(e.target.value);
                      }}
                      label="Access Key"
                      value={accessKey}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.formFieldRow}>
                    <InputBoxWrapper
                      id="secretKey"
                      name="secretKey"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setSecretKey(e.target.value);
                      }}
                      label="Secret Key"
                      value={secretKey}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.formFieldRow}>
                    <InputBoxWrapper
                      id="targetBucket"
                      name="targetBucket"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setTargetBucket(e.target.value);
                      }}
                      label="Target Bucket"
                      value={targetBucket}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.formFieldRow}>
                    <InputBoxWrapper
                      id="region"
                      name="region"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setRegion(e.target.value);
                      }}
                      label="Region"
                      value={region}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.formFieldRow}>
                    <SelectWrapper
                      id="replication_mode"
                      name="replication_mode"
                      onChange={(e: SelectChangeEvent<string>) => {
                        setReplicationMode(e.target.value as string);
                      }}
                      label="Replication Mode"
                      value={replicationMode}
                      options={[
                        { label: "Asynchronous", value: "async" },
                        { label: "Synchronous", value: "sync" },
                      ]}
                    />
                  </Grid>

                  {replicationMode === "async" && (
                    <Grid item xs={12} className={classes.formFieldRow}>
                      <div className={classes.multiContainer}>
                        <InputBoxWrapper
                          type="number"
                          id="bandwidth_scalar"
                          name="bandwidth_scalar"
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (e.target.validity.valid) {
                              setBandwidthScalar(e.target.value as string);
                            }
                          }}
                          label="Bandwidth"
                          value={bandwidthScalar}
                          min="0"
                          pattern={"[0-9]*"}
                          overlayObject={
                            <InputUnitMenu
                              id={"quota_unit"}
                              onUnitChange={(newValue) => {
                                setBandwidthUnit(newValue);
                              }}
                              unitSelected={bandwidthUnit}
                              unitsList={k8sScalarUnitsExcluding(["Ki"])}
                              disabled={false}
                            />
                          }
                        />
                      </div>
                    </Grid>
                  )}
                  <Grid item xs={12} className={classes.formFieldRow}>
                    <InputBoxWrapper
                      id="healthCheck"
                      name="healthCheck"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setHealthCheck(e.target.value as string);
                      }}
                      label="Health Check Duration"
                      value={healthCheck}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={`${classes.spacerTop} ${classes.formFieldRow}`}
                  >
                    <InputBoxWrapper
                      id="storageClass"
                      name="storageClass"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setTargetStorageClass(e.target.value);
                      }}
                      placeholder="STANDARD_IA,REDUCED_REDUNDANCY etc"
                      label="Storage Class"
                      value={targetStorageClass}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <fieldset className={classes.fieldGroup}>
                      <legend className={classes.descriptionText}>
                        Object Filters
                      </legend>
                      <Grid item xs={12} className={classes.formFieldRow}>
                        <InputBoxWrapper
                          id="prefix"
                          name="prefix"
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setPrefix(e.target.value);
                          }}
                          placeholder="prefix"
                          label="Prefix"
                          value={prefix}
                        />
                      </Grid>
                      <Grid item xs={12} className={classes.formFieldRow}>
                        <QueryMultiSelector
                          name="tags"
                          label="Tags"
                          elements={""}
                          onChange={(vl: string) => {
                            setTags(vl);
                          }}
                          keyPlaceholder="Tag Key"
                          valuePlaceholder="Tag Value"
                          withBorder
                        />
                      </Grid>
                    </fieldset>
                  </Grid>
                  <Grid item xs={12}>
                    <fieldset className={classes.fieldGroup}>
                      <legend className={classes.descriptionText}>
                        Replication Options
                      </legend>
                      <Grid item xs={12} className={classes.formFieldRow}>
                        <FormSwitchWrapper
                          checked={metadataSync}
                          id="metadatataSync"
                          name="metadatataSync"
                          label="Metadata Sync"
                          onChange={(e) => {
                            setMetadataSync(e.target.checked);
                          }}
                          value={metadataSync}
                          description={"Metadata Sync"}
                        />
                        <FormSwitchWrapper
                          checked={repDeleteMarker}
                          id="deleteMarker"
                          name="deleteMarker"
                          label="Delete Marker"
                          onChange={(e) => {
                            setRepDeleteMarker(e.target.checked);
                          }}
                          value={repDeleteMarker}
                          description={"Replicate soft deletes"}
                        />
                      </Grid>
                      <Grid item xs={12} className={classes.formFieldRow}>
                        <FormSwitchWrapper
                          checked={repDelete}
                          id="repDelete"
                          name="repDelete"
                          label="Deletes"
                          onChange={(e) => {
                            setRepDelete(e.target.checked);
                          }}
                          value={repDelete}
                          description={"Replicate versioned deletes"}
                        />
                      </Grid>
                    </fieldset>
                  </Grid>
                </Grid>
                <Grid item xs={12} className={classes.buttonContainer}>
                  <Button
                    type="button"
                    variant="outlined"
                    color="primary"
                    disabled={addLoading}
                    onClick={() => {
                      history.push(`/buckets/${bucketName}/admin/replication`)
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={addLoading}
                  >
                    Save
                  </Button>
                </Grid>
            </form>
          </Grid>
        </PageLayout>
      </Fragment>
  );
};

const connector = connect(null, {
  setErrorSnackMessage,
});

export default withStyles(styles)(connector(AddReplication));
