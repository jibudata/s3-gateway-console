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
import { Route, Router, Switch } from "react-router-dom";
import history from "../../../history";
import ConfigurationOptions from "./ConfigurationPanels/ConfigurationOptions";
import ConfigurationForm from "./ConfigurationPanels/ConfigurationForm";
import NotFoundPage from "../../NotFoundPage";

const ConfigurationMain = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/settings" exact component={ConfigurationOptions} />
        <Route path="/settings/:option" component={ConfigurationForm} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default ConfigurationMain;