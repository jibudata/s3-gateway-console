// This file is part of MinIO Console Server
// Copyright (c) 2023 MinIO, Inc.
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

import { IFileInfo } from "../Buckets/ListBuckets/Objects/ObjectDetails/types";
import { encodeURLString, getClientOS } from "../../../common/utils";
import { makeid, storeCallForObjectWithID } from "./transferManager";
import { download } from "../Buckets/ListBuckets/Objects/utils";
import {
  cancelObjectInList,
  completeObject,
  failObject,
  setLongFileOpen,
  setNewObject,
  updateProgress,
} from "./objectBrowserSlice";
import { AppDispatch } from "../../../store";
import { setSnackBarMessage } from "../../../systemSlice";

export const downloadObject = (
  dispatch: AppDispatch,
  bucketName: string,
  internalPaths: string,
  object: IFileInfo
) => {
  const identityDownload = encodeURLString(
    `${bucketName}-${object.name}-${new Date().getTime()}-${Math.random()}`
  );

  if (object.name.length > 200 && getClientOS().toLowerCase().includes("win")) {
    dispatch(setLongFileOpen(true));
    return;
  }

  const ID = makeid(8);

  const downloadCall = download(
    bucketName,
    internalPaths,
    object.version_id,
    parseInt(object.size || "0"),
    null,
    ID,
    (progress) => {
      dispatch(
        updateProgress({
          instanceID: identityDownload,
          progress: progress,
        })
      );
    },
    () => {
      dispatch(completeObject(identityDownload));
    },
    (msg: string) => {
      dispatch(failObject({ instanceID: identityDownload, msg }));
    },
    () => {
      dispatch(cancelObjectInList(identityDownload));
    },
    () => {
      dispatch(
        setSnackBarMessage(
          "File exceeds size limit (8GB), progress won't be shown and download will be handled directly by the browser."
        )
      );
    }
  );

  storeCallForObjectWithID(ID, downloadCall);
  dispatch(
    setNewObject({
      ID,
      bucketName,
      done: false,
      instanceID: identityDownload,
      percentage: 0,
      prefix: object.name,
      type: "download",
      waitingForFile: true,
      failed: false,
      cancelled: false,
      errorMessage: "",
    })
  );
};
