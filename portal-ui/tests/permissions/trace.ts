// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
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

import * as roles from "../utils/roles";
import * as elements from "../utils/elements";
import { monitoringElement, supportElement } from "../utils/elements-menu";

fixture("For user with Trace permissions")
  .page("http://localhost:9090")
  .beforeEach(async (t) => {
    await t.useRole(roles.trace);
  });

test("Tools sidebar item exists", async (t) => {
  const toolsExist = supportElement.exists;
  await t.expect(toolsExist).ok();
});

test("Trace link exists in Tools page", async (t) => {
  const traceLinkExists = elements.traceLink.exists;
  await t
    .expect(monitoringElement.exists)
    .ok()
    .click(monitoringElement)
    .expect(traceLinkExists)
    .ok();
});

test("Trace page can be opened", async (t) => {
  await t.navigateTo("http://localhost:9090/tools/trace");
});

test("Start button can be clicked", async (t) => {
  await t
    .navigateTo("http://localhost:9090/tools/trace")
    .click(elements.startButton);
});

test("Stop button appears after Start button has been clicked", async (t) => {
  const stopButtonExists = elements.stopButton.exists;
  await t
    .navigateTo("http://localhost:9090/tools/trace")
    .click(elements.startButton)
    .expect(stopButtonExists)
    .ok();
});

test("Stop button can be clicked after Start button has been clicked", async (t) => {
  await t
    .navigateTo("http://localhost:9090/tools/trace")
    .click(elements.startButton)
    .click(elements.stopButton);
});
