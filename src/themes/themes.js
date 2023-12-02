import { createTheme } from "@mui/material";

export const primaryTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#63CCCA",
      light: "#a2e7e6", // Color más claro
      dark: "#007270", // Color más oscuro
    },

    secondary: {
      main: "#7F7F7F",
      light: "#c2c2c2", // Color más claro
      dark: "#4d4d4d", // Color más oscuro
    },
    highLight: {
      main: "#001D4A",
      light: "#33517a", // Color más claro
      dark: "#001227", // Color más oscuro
    },
    text: {
      main: "#104F55",
    },
    background: {
      paper: "#fff",
      back: "#F1F1F1",
    },
    border: {
      main: "#007270",
    },
  },
});
