import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { primaryTheme } from "./themes/themes";

import RoutesApp from "./routes/RoutesApp";

const App = () => {
  return (
    <ThemeProvider theme={primaryTheme}>
      <CssBaseline />
      <Box sx={{ width: "100vw" }}>
          <RoutesApp />
      </Box>
    </ThemeProvider>
  );
};

export default App;
