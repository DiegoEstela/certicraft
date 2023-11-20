import { ThemeProvider, CssBaseline, Container, Box } from "@mui/material";
import { primaryTheme } from "./themes/themes";
import WelcomeView from "./WelcomeView";
import Header from "./components/Header/Header";





const App = () => {
  
  return (
      <ThemeProvider theme={primaryTheme}> 
      <CssBaseline/>
      <Box>
        <Header/>
        <Container  sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center",
        width: "100vw",
        height: '100vh'
      }}> 
        <WelcomeView/>
        </Container>
      </Box>
      </ThemeProvider>

  );
};

export default App;