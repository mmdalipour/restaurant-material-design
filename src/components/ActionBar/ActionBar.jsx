import React from "react";
import { makeStyles } from "@material-ui/styles";

// components
import Box from "@material-ui/core/Box";

export const ACTIONBAR_HEIGHT = 70;

// styles
const useStyles = makeStyles(() => ({
  root: {
    height: ACTIONBAR_HEIGHT,
    width: "100%",
    backgroundColor: "white",
  },
}));

const ActionBar = () => {
  const classes = useStyles();
  return <Box className={classes.root}></Box>;
};

export default ActionBar;
