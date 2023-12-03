import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";

function FootersButtons({
  activeStepNum,
  setActiveStepNum,
  handlePreSave,
  setSaveModal,
  lastFoda,
}) {
  const navigate = useNavigate();

  const handleNextStep = async () => {
    const res = await handlePreSave();
    res && setActiveStepNum(activeStepNum + 1);
  };

  console.log();

  const handleFinish = async () => {
    const res = await handlePreSave();
    res && setActiveStepNum(activeStepNum + 1);
    setSaveModal(true);
  };
  return (
    <Box display="flex" justifyContent="center" position="relative">
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
      {lastFoda ? (
        <Typography
          variant="caption"
          color="#001D4A" // Ajusta el color según tus necesidades
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            fontWeight: "bold", // Agrega negrita
          }}
        >
          {` Vigencia: ${moment(lastFoda?._vigencia?.seconds * 1000).format(
            "YYYY-MM-DD"
          )} V: ${lastFoda?._version}`}
        </Typography>
      ) : (
        " "
      )}
    </Box>
  );
}

export default FootersButtons;
