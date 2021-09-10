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

import React, { useState, Fragment } from "react";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { IWizardMain } from "./types";
import WizardPage from "./WizardPage";
import { Grid, List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = (theme: Theme) =>
  createStyles({
    wizardMain: {
      display: "flex",
      width: "100%",
      height: "100%",
      flexGrow: 1,
    },
    wizFromContainer: {},
    wizFromModal: {
      position: "relative",
    },
    modalWizardSteps: {
      padding: 5,
      borderBottom: "#eaeaea 1px solid",
      "& ul": {
        padding: 0,
        marginTop: 0,
        display: "flex",
        justifyContent: "space-evenly",

        "& li": {
          listStyle: "lower-roman",
          "&::marker": {
            paddingLeft: 15,
          },
        },
      },
    },
    buttonList: {
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      "&:not(:disabled):hover": {
        textDecoration: "underline",
      },
      "&:selected, &:active, &:focus, &:focus:active": {
        border: "none",
        outline: 0,
        boxShadow: "none",
      },
    },
    paddedContentGrid: {
      padding: "0 10px",
    },
    stepsLabel: {
      fontSize: 20,
      color: "#393939",
      fontWeight: 600,
      margin: "15px 12px",
      "&.stepsModalTitle": {
        textAlign: "center",
        width: "100%",
        marginTop: 0,
        marginBottom: 10,
      },
    },
    stepsMasterContainer: {
      position: "sticky",
      top: 0,
      backgroundColor: "#FFFFFF",
      width: "100%",
      maxHeight: 90,
    },
  });

const GenericWizard = ({
  classes,
  wizardSteps,
  loadingStep,
  forModal,
}: IWizardMain) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const pageChange = (toElement: string | number) => {
    const lastPage = wizardSteps.length - 1;

    if (toElement === "++") {
      let nextPage = currentStep + 1;

      if (nextPage > lastPage) {
        nextPage = lastPage;
      }

      setCurrentStep(nextPage);
    }

    if (toElement === "--") {
      let prevPage = currentStep - 1;

      if (prevPage < 0) {
        prevPage = 0;
      }

      setCurrentStep(prevPage);
    }

    if (typeof toElement === "number") {
      let pg = toElement;
      if (toElement < 0) {
        pg = 0;
      }

      if (toElement > lastPage) {
        pg = lastPage;
      }

      setCurrentStep(pg);
    }
  };

  if (wizardSteps.length === 0) {
    return null;
  }

  const stepsList = () => {
    return (
      <Fragment>
        <List component="nav" dense={true}>
          {wizardSteps.map((step, index) => {
            return (
              <ListItem
                button
                onClick={() => pageChange(index)}
                key={`wizard-${index.toString()}`}
                selected={currentStep === index}
              >
                <ListItemText primary={step.label} />
              </ListItem>
            );
          })}
        </List>
      </Fragment>
    );
  };
  const stepsListModal = () => {
    return (
      <ul>
        {wizardSteps.map((step, index) => {
          return (
            <li key={`wizard-${index.toString()}`}>
              <button
                onClick={() => pageChange(index)}
                disabled={index > currentStep}
                className={classes.buttonList}
              >
                {step.label}
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <Grid
      container
      className={forModal ? classes.wizFromModal : classes.wizFromContainer}
    >
      {forModal ? (
        <Fragment>
          <div className={classes.stepsMasterContainer}>
            <div className={`${classes.stepsLabel} stepsModalTitle`}>Steps</div>
            <div className={classes.modalWizardSteps}>{stepsListModal()}</div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
            {stepsList()}
          </Grid>
        </Fragment>
      )}

      <Grid
        item
        xs={12}
        sm={forModal ? 12 : 10}
        md={forModal ? 12 : 10}
        lg={forModal ? 12 : 10}
        xl={forModal ? 12 : 10}
        className={forModal ? "" : classes.paddedContentGrid}
      >
        <WizardPage
          page={wizardSteps[currentStep]}
          pageChange={pageChange}
          loadingStep={loadingStep}
          forModal={forModal}
        />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(GenericWizard);
