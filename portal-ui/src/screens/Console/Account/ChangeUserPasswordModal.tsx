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

import React, { useState } from "react";
import { connect } from "react-redux";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import ModalWrapper from "../Common/ModalWrapper/ModalWrapper";
import Grid from "@material-ui/core/Grid";
import InputBoxWrapper from "../Common/FormComponents/InputBoxWrapper/InputBoxWrapper";
import { Button, LinearProgress } from "@material-ui/core";
import {
  actionsTray,
  containerForHeader,
  modalBasic,
} from "../Common/FormComponents/common/styleLibrary";
import { ChangeUserPasswordRequest } from "../Buckets/types";
import api from "../../../common/api";
import { setModalErrorSnackMessage } from "../../../actions";
import { User, UsersList } from "../Users/types";

const styles = (theme: Theme) =>
  createStyles({
    buttonContainer: {
      textAlign: "right",
    },
    ...actionsTray,
    ...modalBasic,
    ...containerForHeader(theme.spacing(4)),
  });

interface IChangePasswordProps {
  classes: any;
  open: boolean;
  selectedUser: User | null;
  closeModal: () => void;
  setModalErrorSnackMessage: typeof setModalErrorSnackMessage;
}

const ChangePassword = ({
  classes,
  open,
  selectedUser,
  closeModal,
  setModalErrorSnackMessage,
}: IChangePasswordProps) => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [reNewPassword, setReNewPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const changePassword = (event: React.FormEvent) => {
    event.preventDefault();

    if (loading) {
      return;
    }
    setLoading(true);

    let request: ChangeUserPasswordRequest = {
      selectedUser: String(selectedUser?.id),
      new_secret_key: newPassword,
    };

    api
      .invoke("POST", "/api/v1/account/change-user-password", request)
      .then((res) => {
        setLoading(false);
        setNewPassword("");
        setReNewPassword("");
        closeModal();
      })
      .catch((err) => {
        setLoading(false);
        setNewPassword("");
        setReNewPassword("");
        setModalErrorSnackMessage(err);
      });
  };

  return open ? (
    <ModalWrapper
      title="Change Password for user FIX THIS" //title should show selectedUser.accessKey
      modalOpen={open}
      onClose={() => {
        setNewPassword("");
        setReNewPassword("");
        closeModal();
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          changePassword(e);
        }}
      >
        <Grid container>
          <Grid item xs={12} className={classes.formScrollable}>
            <Grid item xs={12}>
              <InputBoxWrapper
                id="new-password"
                name="new-password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setNewPassword(event.target.value);
                }}
                label="New Password"
                type="password"
                value={newPassword}
              />
            </Grid>
            <Grid item xs={12}>
              <InputBoxWrapper
                id="re-new-password"
                name="re-new-password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setReNewPassword(event.target.value);
                }}
                label="Type New Password Again"
                type="password"
                value={reNewPassword}
              />
            </Grid>
            <div>{selectedUser?.accessKey}</div>
          </Grid>
          <Grid item xs={12} className={classes.buttonContainer}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={
                loading || !(newPassword.length > 0 && reNewPassword.length > 0)
              }
            >
              Save
            </Button>
          </Grid>
          {loading && (
            <Grid item xs={12}>
              <LinearProgress />
            </Grid>
          )}
        </Grid>
      </form>
    </ModalWrapper>
  ) : null;
};

const connector = connect(null, {
  setModalErrorSnackMessage,
});

export default withStyles(styles)(connector(ChangePassword));
