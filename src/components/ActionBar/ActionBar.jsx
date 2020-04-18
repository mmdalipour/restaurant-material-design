import React from "react";
import { makeStyles } from "@material-ui/styles";

// components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Searchbar from "../Searchbar";
import { NAVBAR_HEIGHT } from "../Navbar";

export const ACTIONBAR_HEIGHT = 70;

// styles
const useStyles = makeStyles(() => ({
  root: {
    height: ACTIONBAR_HEIGHT,
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0 0 0.5rem rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    position: "sticky",
    top: NAVBAR_HEIGHT,
  },
}));

const ActionBar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box flex={1}>
        <Typography component="span">Delivery</Typography>
        <Typography component="span"> or </Typography>
        <Typography component="span">Pickup</Typography>
      </Box>

      <Box flex={1}>
        <Searchbar />
      </Box>
    </Box>
  );
};

export default ActionBar;
