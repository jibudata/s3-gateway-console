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
import React, { Fragment, useState } from "react";
import { DialogContentText } from "@mui/material";

import { ErrorResponseHandler } from "../../../../../../common/types";
import useApi from "../../../../Common/Hooks/useApi";
import ConfirmDialog from "../../../../Common/ModalWrapper/ConfirmDialog";
import { ConfirmDeleteIcon } from "../../../../../../icons";
import FormSwitchWrapper from "../../../../Common/FormComponents/FormSwitchWrapper/FormSwitchWrapper";

import { setErrorSnackMessage } from "../../../../../../systemSlice";
import { AppState, useAppDispatch } from "../../../../../../store";
import { hasPermission } from "../../../../../../common/SecureComponent";
import { IAM_SCOPES } from "../../../../../../common/SecureComponent/permissions";
import { useSelector } from "react-redux";

interface IDeleteObjectProps {
  closeDeleteModalAndRefresh: (refresh: boolean) => void;
  deleteOpen: boolean;
  selectedObjects: string[];
  selectedBucket: string;

  versioning: boolean;
}

const DeleteObject = ({
  closeDeleteModalAndRefresh,
  deleteOpen,
  selectedBucket,
  selectedObjects,

  versioning,
}: IDeleteObjectProps) => {
  const dispatch = useAppDispatch();
  const onDelSuccess = () => closeDeleteModalAndRefresh(true);
  const onDelError = (err: ErrorResponseHandler) =>
    dispatch(setErrorSnackMessage(err));
  const onClose = () => closeDeleteModalAndRefresh(false);

  const [deleteLoading, invokeDeleteApi] = useApi(onDelSuccess, onDelError);

  const [deleteVersions, setDeleteVersions] = useState<boolean>(false);
  const [bypassGovernance, setBypassGovernance] = useState<boolean>(false);

  const retentionConfig = useSelector(
    (state: AppState) => state.objectBrowser.retentionConfig
  );

  const canBypass =
    hasPermission(
      [selectedBucket],
      [IAM_SCOPES.S3_BYPASS_GOVERNANCE_RETENTION]
    ) && retentionConfig?.mode === "governance";

  if (!selectedObjects) {
    return null;
  }
  const onConfirmDelete = () => {
    let toSend = [];
    for (let i = 0; i < selectedObjects.length; i++) {
      if (selectedObjects[i].endsWith("/")) {
        toSend.push({
          path: selectedObjects[i],
          versionID: "",
          recursive: true,
        });
      } else {
        toSend.push({
          path: selectedObjects[i],
          versionID: "",
          recursive: false,
        });
      }
    }

    if (toSend) {
      invokeDeleteApi(
        "POST",
        `/api/v1/buckets/${selectedBucket}/delete-objects?all_versions=${deleteVersions}${
          bypassGovernance ? "&bypass=true" : ""
        }`,
        toSend
      );
    }
  };

  return (
    <ConfirmDialog
      title={`${t("Delete Objects")}`}
      confirmText={t("Delete")}
      isOpen={deleteOpen}
      titleIcon={<ConfirmDeleteIcon />}
      isLoading={deleteLoading}
      onConfirm={onConfirmDelete}
      onClose={onClose}
      confirmationContent={
        <DialogContentText>
          {t("Are you sure you want to delete the selected")}
          {selectedObjects.length} {t("objects?")}{" "}
          {versioning && (
            <Fragment>
              <br />
              <br />
              <FormSwitchWrapper
                label={t("Delete All Versions")}
                indicatorLabels={["Yes", "No"]}
                checked={deleteVersions}
                value={"delete_versions"}
                id="delete-versions"
                name="delete-versions"
                onChange={(e) => {
                  setDeleteVersions(!deleteVersions);
                }}
                description=""
              />
              {canBypass && deleteVersions && (
                <Fragment>
                  <div
                    style={{
                      marginTop: 10,
                    }}
                  >
                    <FormSwitchWrapper
                      label={t("Bypass Governance Mode")}
                      indicatorLabels={["Yes", "No"]}
                      checked={bypassGovernance}
                      value={"bypass_governance"}
                      id="bypass_governance"
                      name="bypass_governance"
                      onChange={(e) => {
                        setBypassGovernance(!bypassGovernance);
                      }}
                      description=""
                    />
                  </div>
                </Fragment>
              )}
              {deleteVersions && (
                <Fragment>
                  <div
                    style={{
                      marginTop: 10,
                      border: "#c83b51 1px solid",
                      borderRadius: 3,
                      padding: 5,
                      backgroundColor: "#c83b5120",
                      color: "#c83b51",
                    }}
                  >
                    {t(
                      "This will remove the objects as well as all of their versions,"
                    )}
                    <br />
                    {t("This action is irreversible.")}
                  </div>
                  <br />
                  {t("Are you sure you want to continue?")}
                </Fragment>
              )}
            </Fragment>
          )}
        </DialogContentText>
      }
    />
  );
};

export default DeleteObject;
