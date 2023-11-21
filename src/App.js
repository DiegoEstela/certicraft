import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { primaryTheme } from "./themes/themes";

import RoutesApp from "./routes/RoutesApp";

const App = () => {
  return (
    <ThemeProvider theme={primaryTheme}>
      <CssBaseline />
          <RoutesApp />
    </ThemeProvider>
  );
};

export default App;
