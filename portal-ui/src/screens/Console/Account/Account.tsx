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
import { Button } from "mds";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import Grid from "@mui/material/Grid";
import api from "../../../common/api";
import { Box } from "@mui/material";

import { AppState } from "../../../store";
import AButton from "../Common/AButton/AButton";
import {
  AccountIcon,
  AddIcon,
  DeleteIcon,
  PasswordKeyIcon,
} from "../../../icons";
import TableWrapper from "../Common/TableWrapper/TableWrapper";
import { stringSort } from "../../../utils/sortFunctions";
import PageHeader from "../Common/PageHeader/PageHeader";
import {
  actionsTray,
  containerForHeader,
  searchField,
  tableStyles,
} from "../Common/FormComponents/common/styleLibrary";

import { ErrorResponseHandler } from "../../../common/types";
import ChangePasswordModal from "./ChangePasswordModal";
import HelpBox from "../../../common/HelpBox";
import PageLayout from "../Common/Layout/PageLayout";
import SearchBox from "../Common/SearchBox";
import withSuspense from "../Common/Components/withSuspense";
import {
  CONSOLE_UI_RESOURCE,
  IAM_PAGES,
  IAM_SCOPES,
} from "../../../common/SecureComponent/permissions";
import { SecureComponent } from "../../../common/SecureComponent";

import { selectSAs } from "../Configurations/utils";
import DeleteMultipleServiceAccounts from "../Users/DeleteMultipleServiceAccounts";
import ServiceAccountPolicy from "./ServiceAccountPolicy";
import {
  setErrorSnackMessage,
  setSnackBarMessage,
  setTooltipsMute,
} from "../../../systemSlice";
import makeStyles from "@mui/styles/makeStyles";
import { selFeatures } from "../consoleSlice";
import { useAppDispatch } from "../../../store";
import TooltipWrapper from "../Common/TooltipWrapper/TooltipWrapper";

const DeleteServiceAccount = withSuspense(
  React.lazy(() => import("./DeleteServiceAccount"))
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...actionsTray,
    ...searchField,
    searchField: {
      ...searchField.searchField,
      marginRight: "auto",
      maxWidth: 380,
    },
    ...tableStyles,
    ...containerForHeader(theme.spacing(4)),
  })
);

const Account = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const classes = useStyles();
  const features = useSelector(selFeatures);

  const [records, setRecords] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [selectedServiceAccount, setSelectedServiceAccount] = useState<
    string | null
  >(null);
  const [changePasswordModalOpen, setChangePasswordModalOpen] =
    useState<boolean>(false);
  const [selectedSAs, setSelectedSAs] = useState<string[]>([]);
  const [deleteMultipleOpen, setDeleteMultipleOpen] = useState<boolean>(false);
  const [policyOpen, setPolicyOpen] = useState<boolean>(false);

  const userIDP = (features && features.includes("external-idp")) || false;

  const tooltipsMute = useSelector(
    (state: AppState) => state.system.tooltipsMute
  );

  useEffect(() => {
    fetchRecords();
  }, []);

  useEffect(() => {
    if (loading) {
      api
        .invoke("GET", `/api/v1/service-accounts`)
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
  }, [loading, setLoading, setRecords, dispatch]);

  const fetchRecords = () => {
    setLoading(true);
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
      dispatch(setSnackBarMessage(`Service accounts deleted successfully.`));
      setSelectedSAs([]);
      setLoading(true);
    }
  };

  const policyModalOpen = (selectedServiceAccount: string) => {
    setSelectedServiceAccount(selectedServiceAccount);
    setPolicyOpen(true);
  };

  const selectAllItems = () => {
    if (selectedSAs.length === records.length) {
      setSelectedSAs([]);
      return;
    }
    setSelectedSAs(records);
  };

  const closePolicyModal = () => {
    setPolicyOpen(false);
    setLoading(true);
  };

  const confirmDeleteServiceAccount = (selectedServiceAccount: string) => {
    setSelectedServiceAccount(selectedServiceAccount);
    setDeleteOpen(true);
  };

  const tableActions = [
    { type: "view", onClick: policyModalOpen },
    { type: "delete", onClick: confirmDeleteServiceAccount },
  ];

  const filteredRecords = records.filter((elementItem) =>
    elementItem.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <React.Fragment>
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

      {policyOpen && (
        <ServiceAccountPolicy
          open={policyOpen}
          selectedAccessKey={selectedServiceAccount}
          closeModalAndRefresh={closePolicyModal}
        />
      )}
      <ChangePasswordModal
        open={changePasswordModalOpen}
        closeModal={() => setChangePasswordModalOpen(false)}
      />
      <PageHeader label="Service Accounts" />
      <PageLayout>
        <Grid item={true} xs={12} className={classes.actionsTray}>
          <SearchBox
            placeholder={"Search Service Accounts"}
            onChange={setFilter}
            overrideClass={classes.searchField}
            value={filter}
          />

          <Box
            sx={{
              display: "flex",
            }}
          >
            {" "}
            <TooltipWrapper tooltip={"Delete Selected"}>
              <Button
                id={"delete-selected-accounts"}
                onClick={() => {
                  setDeleteMultipleOpen(true);
                }}
                label={"Delete Selected"}
                icon={<DeleteIcon />}
                disabled={selectedSAs.length === 0}
                variant={"secondary"}
              />
            </TooltipWrapper>
            <SecureComponent
              scopes={[IAM_SCOPES.ADMIN_CREATE_USER]}
              resource={CONSOLE_UI_RESOURCE}
              matchAll
              errorProps={{ disabled: true }}
            >
              <Button
                id={"change-password"}
                onClick={() => setChangePasswordModalOpen(true)}
                label={`Change Password`}
                icon={<PasswordKeyIcon />}
                variant={"regular"}
                disabled={userIDP}
              />
            </SecureComponent>
            <Button
              id={"create-service-account"}
              onClick={() => {
                navigate(`${IAM_PAGES.ACCOUNT_ADD}`);
              }}
              label={`Create service account`}
              icon={<AddIcon />}
              variant={"callAction"}
            />
          </Box>
        </Grid>

        <Grid item xs={12} className={classes.tableBlock}>
          <TableWrapper
            isLoading={loading}
            records={filteredRecords}
            entityName={"Service Accounts"}
            idField={""}
            columns={[{ label: "Service Account", elementKey: "" }]}
            itemActions={tableActions}
            selectedItems={selectedSAs}
            onSelect={(e) => selectSAs(e, setSelectedSAs, selectedSAs)}
            onSelectAll={selectAllItems}
          />
        </Grid>
        <Grid item xs={12} marginTop={"15px"}>
          <HelpBox
            title={"Learn more about SERVICE ACCOUNTS"}
            iconComponent={<AccountIcon />}
            help={
              <Fragment>
                MinIO service accounts are child identities of an authenticated
                MinIO user, including externally managed identities. Each
                service account inherits its privileges based on the policies
                attached to it’s parent user or those groups in which the parent
                user has membership. Service accounts also support an optional
                inline policy which further restricts access to a subset of
                actions and resources available to the parent user.
                <br />
                <br />
                You can learn more at our{" "}
                <a
                  href="https://min.io/docs/minio/linux/administration/identity-access-management/minio-user-management.html?ref=con#service-accounts"
                  target="_blank"
                  rel="noreferrer"
                >
                  documentation
                </a>
                .
                <br />
                <span>
                  <AButton
                    onClick={() => {
                      dispatch(setTooltipsMute(!tooltipsMute));
                    }}
                  >
                    {tooltipsMute
                      ? "Need help discovering the required policies for disabled actions? Enable Permission Tooltips"
                      : "Happy with your configured permissions? Disable Permission Tooltips"}
                  </AButton>
                </span>
              </Fragment>
            }
          />
        </Grid>
      </PageLayout>
    </React.Fragment>
  );
};

export default Account;
