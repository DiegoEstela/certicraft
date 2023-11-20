import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ label, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomButton;
