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
import { Theme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "mds";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import {
  actionsTray,
  searchField,
  tableStyles,
} from "../Common/FormComponents/common/styleLibrary";
import api from "../../../common/api";
import TableWrapper from "../Common/TableWrapper/TableWrapper";
import { NewServiceAccount } from "../Common/CredentialsPrompt/types";
import { stringSort } from "../../../utils/sortFunctions";
import { ErrorResponseHandler } from "../../../common/types";
import AddUserServiceAccount from "./AddUserServiceAccount";
import DeleteServiceAccount from "../Account/DeleteServiceAccount";
import CredentialsPrompt from "../Common/CredentialsPrompt/CredentialsPrompt";
import { AddIcon, DeleteIcon } from "../../../icons";
import PanelTitle from "../Common/PanelTitle/PanelTitle";

import DeleteMultipleServiceAccounts from "./DeleteMultipleServiceAccounts";
import { selectSAs } from "../Configurations/utils";
import ServiceAccountPolicy from "../Account/ServiceAccountPolicy";
import {
  CONSOLE_UI_RESOURCE,
  IAM_SCOPES,
} from "../../../common/SecureComponent/permissions";
import { SecureComponent } from "../../../common/SecureComponent";
import { encodeURLString } from "../../../common/utils";
import { setErrorSnackMessage, setSnackBarMessage } from "../../../systemSlice";
import { useAppDispatch } from "../../../store";
import TooltipWrapper from "../Common/TooltipWrapper/TooltipWrapper";

interface IUserServiceAccountsProps {
  classes: any;
  user: string;
  hasPolicy: boolean;
}

const styles = (theme: Theme) =>
  createStyles({
    ...searchField,
    ...actionsTray,
    actionsTray: {
      ...actionsTray.actionsTray,
    },
    ...tableStyles,
  });

const UserServiceAccountsPanel = ({
  classes,
  user,
  hasPolicy,
}: IUserServiceAccountsProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [records, setRecords] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [addScreenOpen, setAddScreenOpen] = useState<boolean>(false);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [selectedServiceAccount, setSelectedServiceAccount] = useState<
    string | null
  >(null);
  const [showNewCredentials, setShowNewCredentials] = useState<boolean>(false);
  const [newServiceAccount, setNewServiceAccount] =
    useState<NewServiceAccount | null>(null);
  const [selectedSAs, setSelectedSAs] = useState<string[]>([]);
  const [deleteMultipleOpen, setDeleteMultipleOpen] = useState<boolean>(false);
  const [policyOpen, setPolicyOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchRecords();
  }, []);

  useEffect(() => {
    if (loading) {
      api
        .invoke("GET", `/api/v1/user/${encodeURLString(user)}/service-accounts`)
        .then((res: string[]) => {
          const serviceAccounts = res.sort(stringSort);
          setLoading(false);
          setRecords(serviceAccounts);
        })
        .catch((err: ErrorResponseHandler) => {
          dispatch(setErrorSnackMessage(err));
          setLoading(false);
        });
    }
  }, [loading, setLoading, setRecords, user, dispatch]);

  const fetchRecords = () => {
    setLoading(true);
  };

  const closeAddModalAndRefresh = (res: NewServiceAccount | null) => {
    setAddScreenOpen(false);
    fetchRecords();

    if (res !== null) {
      const nsa: NewServiceAccount = {
        console: {
          accessKey: `${res.accessKey}`,
          secretKey: `${res.secretKey}`,
          url: `${res.url}`,
        },
      };
      setNewServiceAccount(nsa);
      setShowNewCredentials(true);
    }
  };

  const closeDeleteModalAndRefresh = (refresh: boolean) => {
    setDeleteOpen(false);

    if (refresh) {
      fetchRecords();
    }
  };

  const closeDeleteMultipleModalAndRefresh = (refresh: boolean) => {
    setDeleteMultipleOpen(false);
    if (refresh) {
      dispatch(setSnackBarMessage(`Access Keys deleted successfully.`));
      setSelectedSAs([]);
      setLoading(true);
    }
  };

  const selectAllItems = () => {
    if (selectedSAs.length === records.length) {
      setSelectedSAs([]);
      return;
    }
    setSelectedSAs(records);
  };

  const closeCredentialsModal = () => {
    setShowNewCredentials(false);
    setNewServiceAccount(null);
  };

  const policyModalOpen = (selectedServiceAccount: string) => {
    setSelectedServiceAccount(selectedServiceAccount);
    setPolicyOpen(true);
  };

  const confirmDeleteServiceAccount = (selectedServiceAccount: string) => {
    setSelectedServiceAccount(selectedServiceAccount);
    setDeleteOpen(true);
  };

  const closePolicyModal = () => {
    setPolicyOpen(false);
    setLoading(true);
  };

  const tableActions = [
    { type: "view", onClick: policyModalOpen },
    { type: "delete", onClick: confirmDeleteServiceAccount },
  ];

  return (
    <React.Fragment>
      {addScreenOpen && (
        <AddUserServiceAccount
          open={addScreenOpen}
          closeModalAndRefresh={(res: NewServiceAccount | null) => {
            closeAddModalAndRefresh(res);
          }}
          user={user}
        />
      )}

      {deleteOpen && (
        <DeleteServiceAccount
          deleteOpen={deleteOpen}
          selectedServiceAccount={selectedServiceAccount}
          closeDeleteModalAndRefresh={(refresh: boolean) => {
            closeDeleteModalAndRefresh(refresh);
          }}
        />
      )}

      {deleteMultipleOpen && (
        <DeleteMultipleServiceAccounts
          deleteOpen={deleteMultipleOpen}
          selectedSAs={selectedSAs}
          closeDeleteModalAndRefresh={closeDeleteMultipleModalAndRefresh}
        />
      )}

      {showNewCredentials && (
        <CredentialsPrompt
          newServiceAccount={newServiceAccount}
          open={showNewCredentials}
          closeModal={() => {
            closeCredentialsModal();
          }}
          entity="Access Key"
        />
      )}

      {policyOpen && (
        <ServiceAccountPolicy
          open={policyOpen}
          selectedAccessKey={selectedServiceAccount}
          closeModalAndRefresh={closePolicyModal}
        />
      )}

      <div className={classes.actionsTray}>
        <PanelTitle>{t("Access Keys")}</PanelTitle>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <TooltipWrapper tooltip={t("Delete Selected")}>
            <Button
              id={"delete-selected"}
              onClick={() => {
                setDeleteMultipleOpen(true);
              }}
              label={t("Delete Selected")}
              icon={<DeleteIcon />}
              disabled={selectedSAs.length === 0}
              variant={"secondary"}
            />
          </TooltipWrapper>
          <SecureComponent
            scopes={[
              IAM_SCOPES.ADMIN_CREATE_SERVICEACCOUNT,
              IAM_SCOPES.ADMIN_UPDATE_SERVICEACCOUNT,
              IAM_SCOPES.ADMIN_REMOVE_SERVICEACCOUNT,
              IAM_SCOPES.ADMIN_LIST_SERVICEACCOUNTS,
            ]}
            resource={CONSOLE_UI_RESOURCE}
            matchAll
            errorProps={{ disabled: true }}
          >
            <TooltipWrapper tooltip={t("Create Access Key")}>
              <Button
                id={"create-service-account"}
                label={t("Create Access Key")}
                variant="callAction"
                icon={<AddIcon />}
                onClick={() => {
                  navigate(
                    `/identity/users/new-user-sa/${encodeURLString(user)}`
                  );
                }}
                disabled={!hasPolicy}
              />
            </TooltipWrapper>
          </SecureComponent>
        </Box>
      </div>
      <div className={classes.tableBlock}>
        <TableWrapper
          isLoading={loading}
          records={records}
          entityName={"Access Keys"}
          idField={""}
          columns={[{ label: t("Access Key"), elementKey: "" }]}
          itemActions={tableActions}
          selectedItems={selectedSAs}
          onSelect={(e) => selectSAs(e, setSelectedSAs, selectedSAs)}
          onSelectAll={selectAllItems}
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(UserServiceAccountsPanel);
