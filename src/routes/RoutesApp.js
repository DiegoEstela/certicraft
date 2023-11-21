
  import { Routes, Route, BrowserRouter } from 'react-router-dom';

  import LoginApp from '../components/Login/login';
  import WelcomeView from './../WelcomeView';
  import PrivateRoute from './PrivateRoute';
import Header from '../components/Header/Header';
import { Container } from '@mui/material';

  const RoutesApp = () => {
    return (
      
      <BrowserRouter>
        <Header />
        <Container
    sx={{
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "center",
      alignContent: "center",
      width: "100vw",
      height: "100vh",
    }}
  >
        <Routes>
        <Route path='/*' element={<PrivateRoute><WelcomeView /></PrivateRoute>} />
          <Route path='/login' Component={LoginApp} />
        </Routes>
        </Container>
      </BrowserRouter>

    );
  };

  export default RoutesApp;



