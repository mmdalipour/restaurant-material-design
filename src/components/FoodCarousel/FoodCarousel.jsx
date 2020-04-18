import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

// assets
import SushiImage from "../../assets/images/sushi.jpg";

// components
import Box from "@material-ui/core/Box";
import Carousel from "../Carousel";
import FoodCard from "../FoodCard";
import CarouselBar from "../CarouselBar";

// styles
const useStyles = makeStyles(() => ({}));

const items = [
  {
    image: SushiImage,
    name: "Salmon Red Caviar Sushi",
    category: ["Sushi", "Japanese", "Main Course"],
    time: { min: 4, max: 6 },
    price: 4.25,
  },
  {
    image: SushiImage,
    name: "Salmon Red Caviar Sushi",
    category: ["Sushi", "Japanese", "Main Course"],
    time: { min: 4, max: 6 },
    price: 4.25,
  },
  {
    image: SushiImage,
    name: "Salmon Red Caviar Sushi",
    category: ["Sushi", "Japanese", "Main Course"],
    time: { min: 4, max: 6 },
    price: 4.25,
  },
  {
    image: SushiImage,
    name: "Salmon Red Caviar Sushi",
    category: ["Sushi", "Japanese", "Main Course"],
    time: { min: 4, max: 6 },
    price: 4.25,
  },
  {
    image: SushiImage,
    name: "Salmon Red Caviar Sushi",
    category: ["Sushi", "Japanese", "Main Course"],
    time: { min: 4, max: 6 },
    price: 4.25,
  },
  {
    image: SushiImage,
    name: "Salmon Red Caviar Sushi",
    category: ["Sushi", "Japanese", "Main Course"],
    time: { min: 4, max: 6 },
    price: 4.25,
  },
  {
    image: SushiImage,
    name: "Salmon Red Caviar Sushi",
    category: ["Sushi", "Japanese", "Main Course"],
    time: { min: 4, max: 6 },
    price: 4.25,
  },
];

const FoodCarousel = () => {
  const classes = useStyles();

  const [page, setPage] = useState(0);

  const handleNextClick = () => {
    setPage(page + 1);
  };

  const handlePrevClick = () => {
    setPage(page - 1);
  };
  return (
    <Box display="flex" flexDirection="column">
      <Box width="100%" marginBottom="3rem">
        <CarouselBar
          currentPage={page}
          pageCount={Math.floor(items.length / 3)}
        />
      </Box>
      <Carousel
        currentPage={page}
        onNextClick={handleNextClick}
        onPrevClick={handlePrevClick}
      >
        {items.map((food, index) => (
          <Box padding="0.5rem" key={index}>
            <FoodCard
              image={food.image}
              name={food.name}
              category={food.category}
              time={food.time}
              price={food.price}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default FoodCarousel;
