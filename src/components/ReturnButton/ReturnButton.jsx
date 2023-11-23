import React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useNavigate, useLocation } from "react-router-dom";

export default function ReturnButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const isMainPath = location.pathname === "/";

  if (isMainPath) {
    return null;
  }

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "absolute", bottom: 32, left: 16 }}
      icon={<KeyboardReturnIcon />}
      onClick={() => navigate(-1)}
    />
  );
}
