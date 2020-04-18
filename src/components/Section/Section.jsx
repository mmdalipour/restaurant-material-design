import React from "react";
import { makeStyles } from "@material-ui/styles";

// components
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

// styles
const useStyles = makeStyles(() => ({}));

const Section = ({ children }) => {
  const classes = useStyles();
  return (
    <Box width="100%">
      <Divider variant="middle" />
      {children}
    </Box>
  );
};

export default Section;
