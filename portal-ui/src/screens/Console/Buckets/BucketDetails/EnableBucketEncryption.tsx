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
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { LinearProgress, SelectChangeEvent } from "@mui/material";
import { Button } from "mds";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import {
  formFieldStyles,
  modalStyleUtils,
} from "../../Common/FormComponents/common/styleLibrary";
import { BucketEncryptionInfo } from "../types";
import { ErrorResponseHandler } from "../../../../common/types";
import api from "../../../../common/api";
import ModalWrapper from "../../Common/ModalWrapper/ModalWrapper";
import InputBoxWrapper from "../../Common/FormComponents/InputBoxWrapper/InputBoxWrapper";
import SelectWrapper from "../../Common/FormComponents/SelectWrapper/SelectWrapper";
import { BucketEncryptionIcon } from "../../../../icons";

import { setModalErrorSnackMessage } from "../../../../systemSlice";
import { useAppDispatch } from "../../../../store";

const styles = (theme: Theme) =>
  createStyles({
    ...modalStyleUtils,
    ...formFieldStyles,
  });

interface IEnableBucketEncryptionProps {
  classes: any;
  open: boolean;
  encryptionEnabled: boolean;
  encryptionCfg: BucketEncryptionInfo | null;
  selectedBucket: string;
  closeModalAndRefresh: () => void;
}

const EnableBucketEncryption = ({
  classes,
  open,
  encryptionCfg,
  selectedBucket,
  closeModalAndRefresh,
}: IEnableBucketEncryptionProps) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [kmsKeyID, setKmsKeyID] = useState<string>("");
  const [encryptionType, setEncryptionType] = useState<string>("disabled");

  useEffect(() => {
    if (encryptionCfg) {
      if (encryptionCfg.algorithm === "AES256") {
        setEncryptionType("sse-s3");
      } else {
        setEncryptionType("sse-kms");
        setKmsKeyID(encryptionCfg.kmsMasterKeyID);
      }
    }
  }, [encryptionCfg]);

  const enableBucketEncryption = (event: React.FormEvent) => {
    event.preventDefault();
    if (loading) {
      return;
    }
    if (encryptionType === "disabled") {
      api
        .invoke("POST", `/api/v1/buckets/${selectedBucket}/encryption/disable`)
        .then(() => {
          setLoading(false);
          closeModalAndRefresh();
        })
        .catch((err: ErrorResponseHandler) => {
          setLoading(false);
          dispatch(setModalErrorSnackMessage(err));
        });
    } else {
      api
        .invoke("POST", `/api/v1/buckets/${selectedBucket}/encryption/enable`, {
          encType: encryptionType,
          kmsKeyID: kmsKeyID,
        })
        .then(() => {
          setLoading(false);
          closeModalAndRefresh();
        })
        .catch((err: ErrorResponseHandler) => {
          setLoading(false);
          dispatch(setModalErrorSnackMessage(err));
        });
    }
  };

  return (
    <ModalWrapper
      modalOpen={open}
      onClose={() => {
        closeModalAndRefresh();
      }}
      title={t("Enable Bucket Encryption")}
      titleIcon={<BucketEncryptionIcon />}
    >
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          enableBucketEncryption(e);
        }}
      >
        <Grid container>
          <Grid item xs={12} className={classes.modalFormScrollable}>
            <Grid item xs={12} className={classes.formFieldRow}>
              <SelectWrapper
                onChange={(e: SelectChangeEvent<string>) => {
                  setEncryptionType(e.target.value as string);
                }}
                id="select-encryption-type"
                name="select-encryption-type"
                label={t("Encryption Type")}
                value={encryptionType}
                options={[
                  {
                    label: t("Disabled"),
                    value: "disabled",
                  },
                  {
                    label: t("SSE-S3"),
                    value: "sse-s3",
                  },
                  {
                    label: t("SSE-KMS"),
                    value: "sse-kms",
                  },
                ]}
              />
            </Grid>

            {encryptionType === "sse-kms" && (
              <Grid item xs={12} className={classes.formFieldRow}>
                <InputBoxWrapper
                  id="kms-key-id"
                  name="kms-key-id"
                  label={t("KMS Key ID")}
                  value={kmsKeyID}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setKmsKeyID(e.target.value);
                  }}
                />
              </Grid>
            )}
          </Grid>
          <Grid item xs={12} className={classes.modalButtonBar}>
            <Button
              id={"cancel"}
              type="submit"
              variant="regular"
              onClick={() => {
                closeModalAndRefresh();
              }}
              disabled={loading}
              label={t("Cancel")}
            />
            <Button
              id={"save"}
              type="submit"
              variant="callAction"
              disabled={loading}
              label={t("Save")}
            />
          </Grid>
          {loading && (
            <Grid item xs={12}>
              <LinearProgress />
            </Grid>
          )}
        </Grid>
      </form>
    </ModalWrapper>
  );
};

export default withStyles(styles)(EnableBucketEncryption);
