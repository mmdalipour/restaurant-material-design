import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";

// themes
import defaultTheme from "./themes/default";

// components
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Box width="100%" height="100%">
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Navbar />
      </ThemeProvider>
    </Box>
  );
};

export default App;
