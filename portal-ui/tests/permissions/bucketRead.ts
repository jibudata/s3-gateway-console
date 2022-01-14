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

import * as roles from "../utils/roles";
import * as elements from "../utils/elements";
import * as functions from "../utils/functions";

fixture("For user with Bucket Read permissions")
  .page("http://localhost:5005")
  .beforeEach(async (t) => {
    await t.useRole(roles.bucketRead);
  });

test("Buckets sidebar item exists", async (t) => {
  const bucketsExist = elements.bucketsElement.exists;
  await t.expect(bucketsExist).ok();
});

test.before(async (t) => {
  // Create a bucket
  await functions.setUpBucket(t);
})("Browse button exists", async (t) => {
  const browseExists = elements.browseButton.exists;
  // We need to log back in after we use the admin account to create bucket,
  // using the specific role we use in this module
  await t.useRole(roles.bucketRead).expect(browseExists).ok();
});

test("Bucket access is set to R", async (t) => {
  await t.expect(elements.bucketAccessText.innerText).eql("Access: R");
});

test.before(async (t) => {
  await t
    .useRole(roles.admin)
    .navigateTo("http://localhost:5005/buckets")
    .click(elements.browseButton)
    // Upload object to bucket
    .setFilesToUpload(elements.uploadInput, "../uploads/test.txt")
    .click(elements.logoutItem)
})
("Object list table is enabled", async (t) => {
  const bucketsTableExists = elements.table.exists;
  await t.useRole(roles.bucketRead).click(elements.browseButton).expect(bucketsTableExists).ok();
}).after(async (t) => {
  // Cleanup created bucket and corresponding uploads
  await functions.cleanUpBucketAndUploads(t);
});
