import React, { useEffect, useState } from "react";
import ModalWrapper from "../../Common/ModalWrapper/ModalWrapper";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import { Theme } from "@mui/material/styles";
import { modalBasic } from "../../Common/FormComponents/common/styleLibrary";
import { Button } from "@mui/material";
import api from "../../../../common/api";
import { ITenant } from "../ListTenants/types";
import { ErrorResponseHandler } from "../../../../common/types";
import { IKeyValue } from "../ListTenants/types";
import KeyPairEdit from "./KeyPairEdit";
import InputBoxWrapper from "../../Common/FormComponents/InputBoxWrapper/InputBoxWrapper";
import {
  commonFormValidation,
  IValidation,
} from "../../../../utils/validationFunctions";
import { clearValidationError } from "../utils";
import { setModalErrorSnackMessage } from "../../../../actions";

interface IEditTenantMonitoringProps {
  tenant: ITenant;
  classes: any;
  open: boolean;
  onClose: (shouldReload: boolean) => void;
  image: string;
  labels: IKeyValue[];
  annotations: IKeyValue[];
  nodeSelector: IKeyValue[];
  diskCapacityGB: number;
  serviceAccountName: string;
  tenantName: string;
  tenantNamespace: string;
}

const styles = (theme: Theme) =>
  createStyles({
    buttonContainer: {
      textAlign: "right",
    },
    ...modalBasic,
  });

const EditTenantMonitoringModal = ({
  tenant,
  classes,
  open,
  onClose,
  image,
  labels,
  annotations,
  nodeSelector,
  diskCapacityGB,
  serviceAccountName,
  tenantName,
  tenantNamespace,
}: IEditTenantMonitoringProps) => {
  const [validationErrors, setValidationErrors] = useState<any>({});
  const [newLabels, setNewLabels] = useState<IKeyValue[]>(
    labels.length > 0 ? [...labels] : [{ key: "", value: "" }]
  );
  const [newAnnotations, setNewAnnotations] = useState<IKeyValue[]>(
    annotations.length > 0 ? [...annotations] : [{ key: "", value: "" }]
  );
  const [newNodeSelector, setNewNodeSelector] = useState<IKeyValue[]>(
    nodeSelector.length > 0 ? [...nodeSelector] : [{ key: "", value: "" }]
  );
  const [newImage, setNewImage] = useState<string>(image);
  const [newDiskCapacityGB, setNewDiskCapacityGB] = useState<string>(
    diskCapacityGB.toString()
  );
  const [newServiceAccountName, setNewServiceAccountName] =
    useState<string>(serviceAccountName);

  const [labelsError, setLabelsError] = useState<any>({});
  const [annotationsError, setAnnotationsError] = useState<any>({});
  const [nodeSelectorError, setNodeSelectorError] = useState<any>({});

  const trim = (x: IKeyValue[]): IKeyValue[] => {
    let retval: IKeyValue[] = [];
    for (let i = 0; i < x.length; i++) {
      if (x[i].key !== "") {
        retval.push(x[i]);
      }
    }
    return retval;
  };
  const submitMonitoringInfo = (event: React.FormEvent) => {
    event.preventDefault();

    api
      .invoke(
        "PUT",
        `/api/v1/namespaces/${tenantNamespace}/tenants/${tenantName}/monitoring`,
        {
          labels: trim(newLabels),
          annotations: trim(newAnnotations),
          nodeSelector: trim(newNodeSelector),
          image: newImage,
          diskCapacityGB: newDiskCapacityGB,
          serviceAccountName: newServiceAccountName,
        }
      )
      .then(() => {
        onClose(true);
      })
      .catch((err: ErrorResponseHandler) => {});
  };

  return (
    <ModalWrapper
      onClose={() => onClose(true)}
      modalOpen={open}
      title="Edit Prometheus Monitoring Configuration"
    >
      <form noValidate autoComplete="off" onSubmit={submitMonitoringInfo}>
        <h4>Image</h4>
        <InputBoxWrapper
          id={`image`}
          label={""}
          placeholder={"Image"}
          name={`image`}
          value={newImage}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setNewImage(event.target.value);
          }}
          key={`image`}
          error={validationErrors[`image`] || ""}
        />
        <h4>Disk Capacity (GB)</h4>
        <InputBoxWrapper
          id={`diskCapacityGB`}
          label={""}
          placeholder={"Disk Capacity (GB)"}
          name={`diskCapacityGB`}
          value={newDiskCapacityGB.toString()}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setNewDiskCapacityGB(event.target.value);
          }}
          key={`diskCapacityGB`}
          error={validationErrors[`diskCapacityGB`] || ""}
        />
        <h4>Service Account Name</h4>
        <InputBoxWrapper
          id={`serviceAccountName`}
          label={""}
          placeholder={"Service Account Name"}
          name={`serviceAccountName`}
          value={newServiceAccountName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setNewServiceAccountName(event.target.value);
          }}
          key={`serviceAccountName`}
          error={validationErrors[`serviceAccountName`] || ""}
        />

        <div className={classes.buttonContainer}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={parseInt(newDiskCapacityGB) <= 0}
          >
            Save
          </Button>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default withStyles(styles)(EditTenantMonitoringModal);
