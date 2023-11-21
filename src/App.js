import { ThemeProvider, CssBaseline, Container, Box } from "@mui/material";
import { primaryTheme } from "./themes/themes";
import Header from "./components/Header/Header";
import Login from "./components/Login/login";





const App = () => {
  
  return (
      <ThemeProvider theme={primaryTheme}> 
      <CssBaseline/>
      <Box sx={{width: "100vw"}}>
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
        <Login/>
        </Container>
      </Box>
      </ThemeProvider>

  );
};

export default App;