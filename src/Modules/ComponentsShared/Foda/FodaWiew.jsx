import React, { useState } from "react";
import { Paper } from "@mui/material";
import LinearStepper from "../../../components/Stepper/Stepper";

import { fodaSteps } from "./utils/FodaSteps";
import FootersButtons from "./components/FooterButtons/FootersButtons";
import Fortalezas from "./components/ContainerForms/Fortalezas";
import Oportunidades from "./components/ContainerForms/Oportunidades";
import Debilidades from "./components/ContainerForms/Debilidades";
import Amenazas from "./components/ContainerForms/Amenazas";

const FodaView = () => {
  const [activeStepNum, setActiveStepNum] = useState(1);

  const renderFodaComponentes = () => {
    switch (activeStepNum) {
      case 1:
        return <Fortalezas />;
      case 2:
        return <Oportunidades />;
      case 3:
        return <Debilidades />;
      case 4:
        return <Amenazas />;
      default:
        return null;
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        height: "80vh",
        width: "80vw",
        margin: "auto",
        marginTop: 4,
      }}
    >
      <LinearStepper
        steps={fodaSteps}
        activeStep={activeStepNum}
        sx={{ marginBottom: "16px" }}
      />

      {renderFodaComponentes()}

      <FootersButtons
        activeStepNum={activeStepNum}
        setActiveStepNum={setActiveStepNum}
      />
    </Paper>
  );
};

export default FodaView;
