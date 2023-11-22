import { Routes, Route, BrowserRouter } from "react-router-dom";

import LoginApp from "../components/Login/login";
import WelcomeView from "./../WelcomeView";

import Header from "../components/Header/Header";
import { Box } from "@mui/material";
import AllStandardsView from "../Modules/AllStandards";
import BasicSpeedDial from "../components/SpeedDial/SpeedDial";
import CompanyData from "../Modules/CompanyData/view/CompanyData";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Box 
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        height: '90%'
      }}
    >
        <Routes>
          <Route path="/" element={<WelcomeView />} />
          <Route path="/login" element={<LoginApp />} />
          <Route path="/allStandars" element={<AllStandardsView />} />
          <Route path="/companyData" element={<CompanyData />} />
        </Routes>
        </Box>
        <BasicSpeedDial />
       
    </BrowserRouter>
  );
};

export default RoutesApp;
