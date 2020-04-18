import React, { useRef, useState, Children, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

// hooks
import useWidth from "../../hooks/useWidth";

// components
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Zoom from "@material-ui/core/Zoom";
import {} from "@material-ui/core/useMediaQuery";

// icons
import PrevArrowIcon from "@material-ui/icons/ArrowForward";
import NextArrowIcon from "@material-ui/icons/ArrowBack";

// styles
const useStyles = makeStyles(() => ({
  item: {
    color: "white",
  },
  viewport: {
    whiteSpace: "nowrap",
    transition: "transform 0.75s ease-in-out",
  },
  nextButton: {
    position: "absolute",
    top: "50%",
    right: 10,
    transform: "translateY(-50%)",
    zIndex: 1,
    minWidth: "auto",
    width: 42,
    height: 42,
    borderRadius: "50%",
  },
  prevButton: {
    position: "absolute",
    top: "50%",
    left: 10,
    transform: "translateY(-50%)",
    zIndex: 1,
    minWidth: "auto",
    width: 42,
    height: 42,
    borderRadius: "50%",
  },
}));

const Carousel = ({
  currentPage = 0,
  onNextClick,
  onPrevClick,
  children,
  itemsToShow = 3,
}) => {
  const classes = useStyles();

  const [showButtons, setShowButtons] = useState(false);
  const [itemCount, setItemCount] = useState(false);

  const containerRef = useRef();
  const viewportRef = useRef();

  const handleOnMouseEnter = () => {
    setShowButtons(true);
  };

  const handleOnMouseExit = () => {
    setShowButtons(false);
  };

  useEffect(() => {
    setItemCount(Children.toArray(children).length);
  }, []);

  const viewportStyle = {
    transform: `translateX(-${currentPage * 100}%)`,
  };
  const itemStyle = {
    width: `calc(100% / ${itemsToShow})`,
    minWidth: `calc(100% / ${itemsToShow})`,
  };
  return (
    <Box
      ref={containerRef}
      position="relative"
      width="100%"
      overflow="hidden"
      paddingRight="2rem"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseExit}
    >
      {currentPage < Math.floor(itemCount / itemsToShow) && (
        <Zoom in={showButtons}>
          <Button
            className={classes.nextButton}
            variant="contained"
            color="primary"
            onClick={onNextClick}
          >
            <PrevArrowIcon />
          </Button>
        </Zoom>
      )}

      <Box
        ref={viewportRef}
        style={viewportStyle}
        className={classes.viewport}
        display="flex"
        width="100%"
        flexWrap="nowrap"
      >
        {Children.map(children, (child, index) => (
          <Box key={index} style={itemStyle} className={classes.item}>
            {child}
          </Box>
        ))}
      </Box>

      {currentPage > 0 && (
        <Zoom in={showButtons}>
          <Button
            className={classes.prevButton}
            variant="contained"
            color="primary"
            onClick={onPrevClick}
          >
            <NextArrowIcon />
          </Button>
        </Zoom>
      )}
    </Box>
  );
};

export default Carousel;
