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
  image: {
    width: "100%",
    objectFit: "scale-down",
  },
}));

const CrossPlatform = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justify="center">
      <Hidden xsDown>
        <Grid className={classes.leftSection} item sm={4}>
          <img src={IOSImage} alt="ios mobile" />
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={4}>
        <Box>
          <Hidden smUp>
            <img
              className={classes.image}
              src={FullOsImage}
              alt="cross platform mobile"
            />
          </Hidden>
          <Typography align="center">Hello</Typography>
        </Box>
      </Grid>

      <Grid item sm={4}>
        <Hidden xsDown>
          <img src={AndroidImage} alt="android mobile" />
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default CrossPlatform;
