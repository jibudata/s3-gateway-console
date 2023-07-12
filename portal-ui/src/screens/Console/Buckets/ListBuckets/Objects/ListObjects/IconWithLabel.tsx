import React from "react";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import { Theme } from "@mui/material/styles";
import { replaceUnicodeChar } from "../../../../../../common/utils";

interface IIconWithLabel {
  classes: any;
  icon: JSX.Element;
  strings: string[];
}

const styles = (theme: Theme) =>
  createStyles({
    fileName: {
      display: "flex",
      alignItems: "center",
      "& .min-icon": {
        width: 16,
        height: 16,
        marginRight: 4,
        minWidth: 16,
        minHeight: 16,
      },
    },
    fileNameText: {
      whiteSpace: "pre",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  });

const IconWithLabel = ({ classes, icon, strings }: IIconWithLabel) => {
  return (
    <div className={classes.fileName}>
      {icon}
      <span className={classes.fileNameText}>
        {replaceUnicodeChar(strings[strings.length - 1])}
      </span>
    </div>
  );
};

export default withStyles(styles)(IconWithLabel);
