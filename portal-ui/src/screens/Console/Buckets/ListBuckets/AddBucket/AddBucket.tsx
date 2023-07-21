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

import React, { Fragment, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { LinearProgress } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
  BackLink,
  BucketsIcon,
  Button,
  FormLayout,
  HelpBox,
  InfoIcon,
  PageLayout,
} from "mds";
import {
  containerForHeader,
  modalBasic,
} from "../../../Common/FormComponents/common/styleLibrary";
import InputBoxWrapper from "../../../Common/FormComponents/InputBoxWrapper/InputBoxWrapper";
import RadioGroupSelector from "../../../Common/FormComponents/RadioGroupSelector/RadioGroupSelector";
import { k8sScalarUnitsExcluding } from "../../../../../common/utils";
import { AppState, useAppDispatch } from "../../../../../store";
import { useSelector } from "react-redux";
import FormSwitchWrapper from "../../../Common/FormComponents/FormSwitchWrapper/FormSwitchWrapper";
import {
  selDistSet,
  selSiteRep,
  setErrorSnackMessage,
  setHelpName,
} from "../../../../../systemSlice";
import InputUnitMenu from "../../../Common/FormComponents/InputUnitMenu/InputUnitMenu";
import TooltipWrapper from "../../../Common/TooltipWrapper/TooltipWrapper";
import SectionTitle from "../../../Common/SectionTitle";
import {
  resetForm,
  setEnableObjectLocking,
  setIsDirty,
  setName,
  setQuota,
  setQuotaSize,
  setQuotaUnit,
  setRetention,
  setRetentionMode,
  setRetentionUnit,
  setRetentionValidity,
  setVersioning,
} from "./addBucketsSlice";
import { addBucketAsync } from "./addBucketThunks";
import AddBucketName from "./AddBucketName";
import {
  IAM_SCOPES,
  permissionTooltipHelper,
} from "../../../../../common/SecureComponent/permissions";
import { hasPermission } from "../../../../../common/SecureComponent";
import BucketNamingRules from "./BucketNamingRules";
import PageHeaderWrapper from "../../../Common/PageHeaderWrapper/PageHeaderWrapper";
import { api } from "../../../../../api";
import {
  Error,
  HttpResponse,
  ListBucketsResponse,
  ObjectRetentionMode,
} from "../../../../../api/consoleApi";
import { errorToHandler } from "../../../../../api/errors";
import makeStyles from "@mui/styles/makeStyles";
import HelpMenu from "../../../HelpMenu";

const useStyles = makeStyles((theme: Theme) => ({
  buttonContainer: {
    marginTop: 24,
    display: "flex",
    justifyContent: "flex-end",
    "& button": {
      marginLeft: 8,
    },
  },
  error: {
    color: "#b53b4b",
    border: "1px solid #b53b4b",
    padding: 8,
    borderRadius: 3,
  },
  alertVersioning: {
    border: "#E2E2E2 1px solid",
    backgroundColor: "#FBFAFA",
    borderRadius: 3,
    display: "flex",
    alignItems: "center",
    padding: "10px",
    color: "#767676",
    "& > .min-icon ": {
      width: 20,
      height: 20,
      marginRight: 10,
    },
  },
  h6title: {
    fontWeight: "bold",
    color: "#000000",
    fontSize: 20,
  },
  ...containerForHeader,
  ...modalBasic,
}));

const AddBucket = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const validBucketCharacters = new RegExp(
    `^[a-z0-9][a-z0-9\\.\\-]{1,61}[a-z0-9]$`,
  );
  const ipAddressFormat = new RegExp(`^(\\d+\\.){3}\\d+$`);
  const bucketName = useSelector((state: AppState) => state.addBucket.name);
  const isDirty = useSelector((state: AppState) => state.addBucket.isDirty);
  const [validationResult, setValidationResult] = useState<boolean[]>([]);
  const errorList = validationResult.filter((v) => !v);
  const hasErrors = errorList.length > 0;
  const [records, setRecords] = useState<string[]>([]);
  const versioningEnabled = useSelector(
    (state: AppState) => state.addBucket.versioningEnabled,
  );
  const lockingEnabled = useSelector(
    (state: AppState) => state.addBucket.lockingEnabled,
  );
  const quotaEnabled = useSelector(
    (state: AppState) => state.addBucket.quotaEnabled,
  );
  const quotaSize = useSelector((state: AppState) => state.addBucket.quotaSize);
  const quotaUnit = useSelector((state: AppState) => state.addBucket.quotaUnit);
  const retentionEnabled = useSelector(
    (state: AppState) => state.addBucket.retentionEnabled,
  );
  const retentionMode = useSelector(
    (state: AppState) => state.addBucket.retentionMode,
  );
  const retentionUnit = useSelector(
    (state: AppState) => state.addBucket.retentionUnit,
  );
  const retentionValidity = useSelector(
    (state: AppState) => state.addBucket.retentionValidity,
  );
  const addLoading = useSelector((state: AppState) => state.addBucket.loading);
  const invalidFields = useSelector(
    (state: AppState) => state.addBucket.invalidFields,
  );
  const lockingFieldDisabled = useSelector(
    (state: AppState) => state.addBucket.lockingFieldDisabled,
  );
  const distributedSetup = useSelector(selDistSet);
  const siteReplicationInfo = useSelector(selSiteRep);
  const navigateTo = useSelector(
    (state: AppState) => state.addBucket.navigateTo,
  );

  const lockingAllowed = hasPermission(
    "*",
    [
      IAM_SCOPES.S3_PUT_BUCKET_VERSIONING,
      IAM_SCOPES.S3_PUT_BUCKET_OBJECT_LOCK_CONFIGURATION,
      IAM_SCOPES.S3_PUT_ACTIONS,
    ],
    true,
  );

  const versioningAllowed = hasPermission("*", [
    IAM_SCOPES.S3_PUT_BUCKET_VERSIONING,
    IAM_SCOPES.S3_PUT_ACTIONS,
  ]);

  useEffect(() => {
    const bucketNameErrors = [
      !(isDirty && (bucketName.length < 3 || bucketName.length > 63)),
      validBucketCharacters.test(bucketName),
      !(
        bucketName.includes(".-") ||
        bucketName.includes("-.") ||
        bucketName.includes("..")
      ),
      !ipAddressFormat.test(bucketName),
      !bucketName.startsWith("xn--"),
      !bucketName.endsWith("-s3alias"),
      !records.includes(bucketName),
    ];
    setValidationResult(bucketNameErrors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bucketName, isDirty]);

  useEffect(() => {
    dispatch(setName(""));
    dispatch(setIsDirty(false));
    const fetchRecords = () => {
      api.buckets
        .listBuckets()
        .then((res: HttpResponse<ListBucketsResponse, Error>) => {
          if (res.data) {
            var bucketList: string[] = [];
            if (res.data.buckets != null && res.data.buckets.length > 0) {
              res.data.buckets.forEach((bucket) => {
                bucketList.push(bucket.name);
              });
            }
            setRecords(bucketList);
          } else if (res.error) {
            dispatch(setErrorSnackMessage(errorToHandler(res.error)));
          }
        })
        .catch((err) => {
          dispatch(setErrorSnackMessage(errorToHandler(err)));
        });
    };
    fetchRecords();
  }, [dispatch]);

  const resForm = () => {
    dispatch(resetForm());
  };

  useEffect(() => {
    if (navigateTo !== "") {
      const goTo = `${navigateTo}`;
      dispatch(resetForm());
      navigate(goTo);
    }
  }, [navigateTo, navigate, dispatch]);

  useEffect(() => {
    dispatch(setHelpName("add_bucket"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <PageHeaderWrapper
        label={
          <BackLink label={"Buckets"} onClick={() => navigate("/buckets")} />
        }
        actions={<HelpMenu />}
      />
      <PageLayout>
        <FormLayout
          title={"Create Bucket"}
          icon={<BucketsIcon />}
          helpBox={
            <HelpBox
              iconComponent={<BucketsIcon />}
              title={"Buckets"}
              help={
                <Fragment>
                  MinIO uses buckets to organize objects. A bucket is similar to
                  a folder or directory in a filesystem, where each bucket can
                  hold an arbitrary number of objects.
                  <br />
                  <br />
                  <b>Versioning</b> allows to keep multiple versions of the same
                  object under the same key.
                  <br />
                  <br />
                  <b>Object Locking</b> prevents objects from being deleted.
                  Required to support retention and legal hold. Can only be
                  enabled at bucket creation.
                  <br />
                  <br />
                  <b>Quota</b> limits the amount of data in the bucket.
                  {lockingAllowed && (
                    <Fragment>
                      <br />
                      <br />
                      <b>Retention</b> imposes rules to prevent object deletion
                      for a period of time. Versioning must be enabled in order
                      to set bucket retention policies.
                    </Fragment>
                  )}
                  <br />
                  <br />
                </Fragment>
              }
            />
          }
        >
          <form
            noValidate
            autoComplete="off"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              dispatch(addBucketAsync());
            }}
          >
            <Grid container marginTop={1} spacing={2}>
              <Grid item xs={12}>
                <AddBucketName hasErrors={hasErrors} />
              </Grid>
              <Grid item xs={12}>
                <BucketNamingRules errorList={validationResult} />
              </Grid>
              <Grid item xs={12}>
                <SectionTitle>Features</SectionTitle>
                {!distributedSetup && (
                  <Fragment>
                    <div className={classes.error}>
                      These features are unavailable in a single-disk setup.
                      <br />
                      Please deploy a server in{" "}
                      <a
                        href="https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html?ref=con"
                        target="_blank"
                        rel="noopener"
                      >
                        Distributed Mode
                      </a>{" "}
                      to use these features.
                    </div>
                    <br />
                    <br />
                  </Fragment>
                )}
              </Grid>
              <Grid item xs={12}>
                {siteReplicationInfo.enabled && (
                  <Fragment>
                    <br />
                    <div className={classes.alertVersioning}>
                      <InfoIcon /> Versioning setting cannot be changed as
                      cluster replication is enabled for this site.
                    </div>
                    <br />
                  </Fragment>
                )}
                <TooltipWrapper
                  tooltip={
                    versioningAllowed
                      ? lockingEnabled && versioningEnabled
                        ? "You must disable Locking before Versioning can be disabled"
                        : ""
                      : permissionTooltipHelper(
                          [
                            IAM_SCOPES.S3_PUT_BUCKET_VERSIONING,
                            IAM_SCOPES.S3_PUT_ACTIONS,
                          ],
                          "Versioning",
                        )
                  }
                >
                  <FormSwitchWrapper
                    value="versioned"
                    id="versioned"
                    name="versioned"
                    checked={versioningEnabled}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      dispatch(setVersioning(event.target.checked));
                    }}
                    label={"Versioning"}
                    disabled={
                      !distributedSetup ||
                      lockingEnabled ||
                      siteReplicationInfo.enabled ||
                      !versioningAllowed
                    }
                    helpTipID="add_bucket_versioning"
                  />
                </TooltipWrapper>
              </Grid>
              <Grid item xs={12}>
                <TooltipWrapper
                  tooltip={
                    lockingAllowed
                      ? ""
                      : permissionTooltipHelper(
                          [
                            IAM_SCOPES.S3_PUT_BUCKET_VERSIONING,
                            IAM_SCOPES.S3_PUT_BUCKET_OBJECT_LOCK_CONFIGURATION,
                            IAM_SCOPES.S3_PUT_ACTIONS,
                          ],
                          "Locking",
                        )
                  }
                >
                  <FormSwitchWrapper
                    value="locking"
                    id="locking"
                    name="locking"
                    disabled={
                      lockingFieldDisabled ||
                      !distributedSetup ||
                      !lockingAllowed
                    }
                    checked={lockingEnabled}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      dispatch(setEnableObjectLocking(event.target.checked));
                      if (
                        event.target.checked &&
                        !siteReplicationInfo.enabled
                      ) {
                        dispatch(setVersioning(true));
                      }
                    }}
                    label={"Object Locking"}
                    helpTipID="add_bucket_object_locking"
                  />
                </TooltipWrapper>
              </Grid>

              <Grid item xs={12}>
                <FormSwitchWrapper
                  value="bucket_quota"
                  id="bucket_quota"
                  name="bucket_quota"
                  checked={quotaEnabled}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    dispatch(setQuota(event.target.checked));
                  }}
                  label={"Quota"}
                  disabled={!distributedSetup}
                  helpTipID="add_bucket_quota"
                />
              </Grid>
              {quotaEnabled && distributedSetup && (
                <React.Fragment>
                  <Grid item xs={12}>
                    <InputBoxWrapper
                      type="string"
                      id="quota_size"
                      name="quota_size"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        dispatch(setQuotaSize(e.target.value));
                      }}
                      label="Capacity"
                      value={quotaSize}
                      required
                      min="1"
                      overlayObject={
                        <InputUnitMenu
                          id={"quota_unit"}
                          onUnitChange={(newValue) => {
                            dispatch(setQuotaUnit(newValue));
                          }}
                          unitSelected={quotaUnit}
                          unitsList={k8sScalarUnitsExcluding(["Ki"])}
                          disabled={false}
                        />
                      }
                      error={
                        invalidFields.includes("quotaSize")
                          ? "Please enter a valid quota"
                          : ""
                      }
                    />
                  </Grid>
                </React.Fragment>
              )}
              {versioningEnabled && distributedSetup && lockingAllowed && (
                <Grid item xs={12}>
                  <FormSwitchWrapper
                    value="bucket_retention"
                    id="bucket_retention"
                    name="bucket_retention"
                    checked={retentionEnabled}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      dispatch(setRetention(event.target.checked));
                    }}
                    label={"Retention"}
                    helpTipID="add_bucket_retention"
                  />
                </Grid>
              )}
              {retentionEnabled && distributedSetup && (
                <React.Fragment>
                  <Grid item xs={12}>
                    <RadioGroupSelector
                      currentSelection={retentionMode}
                      id="retention_mode"
                      name="retention_mode"
                      label="Mode"
                      onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
                        dispatch(
                          setRetentionMode(
                            e.target.value as ObjectRetentionMode,
                          ),
                        );
                      }}
                      selectorOptions={[
                        { value: "compliance", label: "Compliance" },
                        { value: "governance", label: "Governance" },
                      ]}
                      helpTipID="add_bucket_retention_mode"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputBoxWrapper
                      type="number"
                      id="retention_validity"
                      name="retention_validity"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        dispatch(setRetentionValidity(e.target.valueAsNumber));
                      }}
                      label="Validity"
                      value={String(retentionValidity)}
                      required
                      overlayObject={
                        <InputUnitMenu
                          id={"retention_unit"}
                          onUnitChange={(newValue) => {
                            dispatch(setRetentionUnit(newValue));
                          }}
                          unitSelected={retentionUnit}
                          unitsList={[
                            { value: "days", label: "Days" },
                            { value: "years", label: "Years" },
                          ]}
                          disabled={false}
                        />
                      }
                      helpTipID="add_bucket_validity"
                    />
                  </Grid>
                </React.Fragment>
              )}
            </Grid>
            <Grid item xs={12} className={classes.buttonContainer}>
              <Button
                id={"clear"}
                type="button"
                variant={"regular"}
                className={classes.clearButton}
                onClick={resForm}
                label={"Clear"}
              />
              <TooltipWrapper
                tooltip={
                  invalidFields.length > 0 || !isDirty || hasErrors
                    ? "You must apply a valid name to the bucket"
                    : ""
                }
              >
                <Button
                  id={"create-bucket"}
                  type="submit"
                  variant="callAction"
                  color="primary"
                  disabled={
                    addLoading ||
                    invalidFields.length > 0 ||
                    !isDirty ||
                    hasErrors
                  }
                  label={"Create Bucket"}
                />
              </TooltipWrapper>
            </Grid>
            {addLoading && (
              <Grid item xs={12}>
                <LinearProgress />
              </Grid>
            )}
          </form>
        </FormLayout>
      </PageLayout>
    </Fragment>
  );
};

export default AddBucket;
