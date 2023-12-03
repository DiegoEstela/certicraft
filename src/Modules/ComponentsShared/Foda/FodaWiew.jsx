import { useContext, useState } from "react";
import { Box, Paper } from "@mui/material";
import LinearStepper from "../../../components/Stepper/Stepper";
import { fodaSteps } from "./utils/FodaSteps";
import FootersButtons from "./components/FooterButtons/FootersButtons";
import Fortalezas from "./components/ContainerForms/Fortalezas";
import Oportunidades from "./components/ContainerForms/Oportunidades";
import Debilidades from "./components/ContainerForms/Debilidades";
import Amenazas from "./components/ContainerForms/Amenazas";
import BasicModal from "../../../components/Modal/BasicModal";
import { TEXT_WELCOME_MODAL_FODA } from "./utils/textModal";
import { useForm } from "react-hook-form";
import { transformData } from "./utils/trasnformData";
import { SaveFodaModal } from "../../../components/Modal/SaveFodaModal";
import { AuthContext } from "../../../context/AuthContext";
import useGetFodaDocuments from "../../../hooks/useGetFodaDocuments";
import { BallTriangle } from "react-loader-spinner";

const FodaView = () => {
  const title = ["fortalezas", "oportunidades", "debilidades", "amenazas"];
  const [saveModal, setSaveModal] = useState(false);
  const [activeStepNum, setActiveStepNum] = useState(1);
  const [fodaData, setFodaData] = useState();
  const { register, getValues, setValue } = useForm();
  const { user } = useContext(AuthContext);

  const { data: lastFoda, status } = useGetFodaDocuments(user?.uid);

  const handlePreSave = () => {
    setFodaData((prevData) => {
      const currentSectionData = transformData(
        getValues(),
        title[activeStepNum - 1]
      );

      const newData = {
        ...prevData,
        [title[activeStepNum - 1]]: {
          ...prevData?.[title[activeStepNum - 1]],
          ...currentSectionData,
        },
      };

      return newData;
    });

    return true;
  };

  const renderFodaComponentes = () => {
    switch (activeStepNum) {
      case 1:
        return (
          <Fortalezas
            register={register}
            title="fortalezas"
            setValue={setValue}
            lastFoda={lastFoda && lastFoda?.fortalezas?.fortalezas}
          />
        );
      case 2:
        return (
          <Oportunidades
            register={register}
            title="oportunidades"
            setValue={setValue}
            lastFoda={lastFoda && lastFoda?.oportunidades?.oportunidades}
          />
        );
      case 3:
        return (
          <Debilidades
            register={register}
            title="debilidades"
            setValue={setValue}
            lastFoda={lastFoda && lastFoda?.debilidades?.debilidades}
          />
        );
      case 4:
        return (
          <Amenazas
            register={register}
            title="amenazas"
            setValue={setValue}
            lastFoda={lastFoda && lastFoda?.amenazas?.amenazas}
          />
        );
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

      {status === "loading" ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#63CCCA"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </Box>
      ) : (
        ""
      )}

      {status === "success" ? <>{renderFodaComponentes()}</> : ""}

      <FootersButtons
        activeStepNum={activeStepNum}
        setActiveStepNum={setActiveStepNum}
        handlePreSave={handlePreSave}
        setSaveModal={setSaveModal}
      />

      <BasicModal
        title={TEXT_WELCOME_MODAL_FODA.title}
        subTitle={TEXT_WELCOME_MODAL_FODA.subTitle}
        description={TEXT_WELCOME_MODAL_FODA.description}
      />
      {saveModal && (
        <SaveFodaModal fodaData={fodaData} setSaveModal={setSaveModal} />
      )}
    </Paper>
  );
};

export default FodaView;
