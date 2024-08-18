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

import React from "react";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { InputLabel, Switch, Tooltip, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { actionsTray, fieldBasic } from "../common/styleLibrary";
import HelpIcon from "../../../../../icons/HelpIcon";

interface IFormSwitch {
  label?: string;
  classes: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | boolean;
  id: string;
  name: string;
  disabled?: boolean;
  tooltip?: string;
  description?: string;
  index?: number;
  indicatorLabels?: string[];
  checked: boolean;
  switchOnly?: boolean;
  containerClass?: string;
}

const styles = (theme: Theme) =>
  createStyles({
    seeMore: {
      marginTop: theme.spacing(3),
    },
    paper: {
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
      paddingTop: 15,
      boxShadow: "none",
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
    minTableHeader: {
      color: "#393939",
      "& tr": {
        "& th": {
          fontWeight: "bold",
        },
      },
    },
    noFound: {
      textAlign: "center",
      padding: "10px 0",
    },
    tableContainer: {
      maxHeight: 200,
    },
    stickyHeader: {
      backgroundColor: "#fff",
    },
    actionsTitle: {
      fontWeight: 600,
      color: "#081C42",
      fontSize: 16,
      alignSelf: "center",
    },
    tableBlock: {
      marginTop: 15,
    },
    filterField: {
      width: 375,
      fontWeight: 600,
      "& .input": {
        "&::placeholder": {
          fontWeight: 600,
          color: "#081C42",
        },
      },
    },
    divContainer: {
      borderBottom: "#e2e2e2 1px dashed",
      paddingBottom: 14,
      marginBottom: 20,
      maxWidth: 840,
    },
    wrapperContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: 840,
    },
    indicatorLabel: {
      fontSize: 12,
      fontWeight: 600,
      color: "#081C42",
      margin: "0 8px 0 10px",
    },
    fieldDescription: {
      marginTop: 4,
      color: "#999999",
    },
    ...actionsTray,
    ...fieldBasic,
  });

const StyledSwitch = withStyles({
  root: {
    alignItems: "flex-start",
    height: 22,
    padding: "0 12px",
    display: "flex",
    position: "relative",
  },
  switchBase: {
    color: "#fff",
    padding: 0,
    top: "initial",
    "&$checked": {
      color: "#fff",
    },
    "&$checked + $track": {
      backgroundColor: "#081C42",
      opacity: 1,
      height: 15,
    },
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  checked: {},
  track: {
    height: 15,
    backgroundColor: "#9C9C9C",
    border: "#081C42 1px solid",
    opacity: 1,
    padding: 0,
    "&$checked": {
      backgroundColor: "#081C42",
    },
  },
  thumb: {
    backgroundColor: "#fff",
    boxShadow: "none",
    width: 18,
    height: 18,
    padding: 0,
    marginLeft: 13,
    marginTop: 1,
  },
})(Switch);

const FormSwitchWrapper = ({
  label = "",
  onChange,
  value,
  id,
  name,
  checked = false,
  disabled = false,
  switchOnly = false,
  tooltip = "",
  description = "",
  indicatorLabels = [],
  containerClass = "",
  classes,
}: IFormSwitch) => {
  const switchComponent = (
    <React.Fragment>
      <div className={`${classes.switchContainer} ${containerClass}`}>
        <Switch
          checked={checked}
          onChange={onChange}
          color="primary"
          name={name}
          inputProps={{ "aria-label": "primary checkbox" }}
          disabled={disabled}
          disableRipple
          disableFocusRipple
          disableTouchRipple
          value={value}
        />
        {indicatorLabels.length === 2 && (
          <span className={classes.indicatorLabel}>
            {checked ? indicatorLabels[0] : indicatorLabels[1]}
          </span>
        )}
      </div>
    </React.Fragment>
  );

  if (switchOnly) {
    return switchComponent;
  }

  return (
    <div className={classes.divContainer}>
      <Grid item xs={12} className={classes.wrapperContainer}>
        {label !== "" && (
          <InputLabel htmlFor={id} className={classes.inputLabel}>
            <span>{label}</span>
            {tooltip !== "" && (
              <div className={classes.tooltipContainer}>
                <Tooltip title={tooltip} placement="top-start">
                  <div>
                    <HelpIcon className={classes.tooltip} />
                  </div>
                </Tooltip>
              </div>
            )}
          </InputLabel>
        )}
        {switchComponent}
      </Grid>
      {description !== "" && (
        <Grid item xs={10}>
          <Typography component="p" className={classes.fieldDescription}>
            {description}
          </Typography>
        </Grid>
      )}
    </div>
  );
};

export default withStyles(styles)(FormSwitchWrapper);
