import React from "react";
import { makeStyles } from "@material-ui/styles";

// components
import Box from "@material-ui/core/Box";

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#d7d7d7",
    overflow: "hidden"
  },
  cursor: {
    backgroundColor: theme.palette.secondary.main,
    transition: "0.3s ease-in-out",
    transform: "translate(-50%)"
  },
}));

const CarouselBar = ({ pageCount, currentPage }) => {
  const classes = useStyles();
  console.error(pageCount);
  console.error(currentPage);
  const per = (currentPage * 100) / pageCount;
  return (
    <Box className={classes.root} width="100%" position="relative" height={2}>
      <Box
        position="absolute"
        style={{ left: `calc(${per}%)`}}
        className={classes.cursor}
        height={2}
        width={64}
      ></Box>
    </Box>
  );
};

export default CarouselBar;
