import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";

// themes
import defaultTheme from "./themes/default";

// layouts
import BaseLayout from "./layouts/BaseLayout";

// components
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import ActionBar from "./components/ActionBar";

const App = () => {
  return (
    <Box width="100%" height="100%">
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <BaseLayout>
          <ActionBar />
          <h1>helleheheh</h1>
        </BaseLayout>
      </ThemeProvider>
    </Box>
  );
};

export default App;
