import { ThemeProvider, CssBaseline } from "@mui/material";
import { primaryTheme } from "./themes/themes";

import RoutesApp from "./routes/RoutesApp";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const App = () => {
  return (
    <ThemeProvider theme={primaryTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <RoutesApp />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
