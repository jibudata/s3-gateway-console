// This file is part of MinIO Console Server
// Copyright (c) 2020 MinIO, Inc.
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
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "./Routes";
import configureStore from "./store";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import "react-virtualized/styles.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import "./index.css";
import theme from "./theme/main";

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  "@global": {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    ".MuiButton-contained": {
      fontSize: "14px",
      textTransform: "capitalize",
      padding: "16px 25px 16px 25px",
      borderRadius: 3,
    },
    ".MuiButton-sizeSmall": {
      padding: "4px 10px",
      fontSize: "0.8125rem",
    },
    ".MuiTableCell-head": {
      borderRadius: "3px 3px 0px 0px",
      fontSize: 13,
    },
    ".MuiPaper-root": {
      borderRadius: 3,
    },
    ".MuiDrawer-paperAnchorDockedLeft": {
      borderRight: 0,
    },
    ".MuiDrawer-root": {
      "& .MuiPaper-root": {
        borderRadius: 0,
      },
    },
  },
})(() => null);

ReactDOM.render(
  <Provider store={configureStore()}>
    <GlobalCss />
    <ThemeProvider theme={theme}>
      {/*<ThemeProvider theme={newTheme}>*/}
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
