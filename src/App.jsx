import React from "react";
import { ThemeProvider, makeStyles } from "@material-ui/styles";

// themes
import defaultTheme from "./themes/default";

// layouts
import BaseLayout from "./layouts/BaseLayout";

// components
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import ActionBar from "./components/ActionBar";
import FoodCarousel from "./components/FoodCarousel";

// styles
const useStyles = makeStyles(() => ({
  container: {
    padding: "4rem",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Box width="100%" height="100%">
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <BaseLayout>
          <ActionBar />
          <Container className={classes.container} maxWidth="xl">
            <FoodCarousel />
          </Container>
        </BaseLayout>
      </ThemeProvider>
    </Box>
  );
};

export default App;
