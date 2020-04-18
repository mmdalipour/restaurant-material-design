import React from "react";
import { makeStyles } from "@material-ui/styles";

// assets
import IOSImage from "../../assets/images/ios_mobile.jpg";
import AndroidImage from "../../assets/images/android_mobile.jpg";
import FullOsImage from "../../assets/images/full_mobile.jpg";

// components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";

// styles
const useStyles = makeStyles(() => ({
  leftSection: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const CrossPlatform = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Hidden smDown>
        <Grid className={classes.leftSection} item sm={4}>
          <img src={IOSImage} alt="ios mobile" />
        </Grid>
      </Hidden>
      <Grid item sm={4}>
        <Box>
          <Hidden mdUp>
            <img src={FullOsImage} alt="cross platform mobile" />
          </Hidden>
          <Typography align="center">Hello</Typography>
        </Box>
      </Grid>

      <Grid item sm={4}>
        <Hidden smDown>
          <img src={AndroidImage} alt="android mobile" />
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default CrossPlatform;
