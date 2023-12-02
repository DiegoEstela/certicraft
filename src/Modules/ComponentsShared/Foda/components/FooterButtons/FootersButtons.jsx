import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function FootersButtons({ activeStepNum, setActiveStepNum }) {
  const navigate = useNavigate();
  return (
    <Box display="flex" justifyContent="center">
      <ButtonGroup variant="text" aria-label="text button group">
        {activeStepNum === 1 ? (
          <Button variant="outlined" onClick={() => navigate(-1)}>
            Salir
          </Button>
        ) : (
          <Button onClick={() => setActiveStepNum(activeStepNum - 1)}>
            Anterior
          </Button>
        )}

        {activeStepNum === 4 ? (
          <Button variant="outlined" onClick={() => alert("Guardado")}>
            Guardar
          </Button>
        ) : (
          <Button onClick={() => setActiveStepNum(activeStepNum + 1)}>
            Siguente
          </Button>
        )}
      </ButtonGroup>
    </Box>
  );
}

export default FootersButtons;
