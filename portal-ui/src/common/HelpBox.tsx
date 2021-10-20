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

import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { createStyles } from "@material-ui/core";
import { Theme, withStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      border: "1px solid rgb(234, 237, 238)",
      borderRadius: 5,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: "#fbfafa",
    },
    icon: {
      textAlign: "center",
      padding: 30,
      fontSize: 64,
    },
    iconSize: {
      fontSize: 64,
    },
    helpText: { padding: 30, paddingLeft: 0, fontSize: 16 },
  });

interface IHelpBox {
  classes: any;
  iconComponent: React.ComponentType;
  help: any;
}

const HelpBox = ({ classes, iconComponent: Component, help }: IHelpBox) => {
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={2} className={classes.icon}>
          <Component className={classes.iconSize} />
        </Grid>
        <Grid xs={10} className={classes.helpText}>
          {help}
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(HelpBox);
