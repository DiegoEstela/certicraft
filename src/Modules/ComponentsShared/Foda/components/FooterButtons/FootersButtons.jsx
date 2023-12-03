import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function FootersButtons({
  activeStepNum,
  setActiveStepNum,
  handlePreSave,
  setSaveModal,
}) {
  const navigate = useNavigate();

  const handleNextStep = async () => {
    const res = await handlePreSave();
    res && setActiveStepNum(activeStepNum + 1);
  };

  const handleFinish = async () => {
    const res = await handlePreSave();
    res && setActiveStepNum(activeStepNum + 1);
    setSaveModal(true);
  };
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
          <Button variant="outlined" onClick={handleFinish}>
            Guardar
          </Button>
        ) : (
          <Button onClick={handleNextStep}>Siguente</Button>
        )}
      </ButtonGroup>
    </Box>
  );
}

export default FootersButtons;
