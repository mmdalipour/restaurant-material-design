import React from "react";
import { makeStyles } from "@material-ui/styles";

// porp-types
import PropTypes from "prop-types";

// components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  delivery: {},
  seprator: {
    color: "#a5a5a5",
    margin: theme.spacing(0, 1),
  },
  pickup: {},
  marker: {
    position: "absolute",
    bottom: theme.spacing(-1),
    left: 0,
    height: "2px",
    backgroundColor: theme.palette.primary.main,
  },
}));

const ReceiveOption = ({ option = "delivery" }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography component="span" className={classes.delivery}>
        Delivery
      </Typography>
      <Typography component="span" className={classes.seprator}>
        or
      </Typography>
      <Typography component="span" className={classes.pickup}>
        Pickup
      </Typography>
      <div className={classes.marker}></div>
    </Box>
  );
};

ReceiveOption.propTypes = {
  option: PropTypes.oneOf(["delivery", "pickup"]),
};

export default ReceiveOption;
