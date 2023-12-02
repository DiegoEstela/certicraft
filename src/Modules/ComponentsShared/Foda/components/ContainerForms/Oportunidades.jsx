import { useState } from "react";
import AllInputControl from "../Forms/AllInputControl";
import { Box, LinearProgress, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { trasnforData } from "../../trasnformData";

const Oportunidades = () => {
  const title = "oportunidades";
  const [totalPercentage, setTotalPercentage] = useState(0);
  const [percentages, setPercentages] = useState(Array(10).fill(0));

  const { register, getValues } = useForm();

  const handleInputChange = (index, newValue) => {
    const diff = newValue - percentages[index];
    setPercentages((prev) => {
      const updated = [...prev];
      updated[index] = newValue;
      return updated;
    });
    setTotalPercentage((prev) => prev + diff);
  };

  return (
    <>
      <Box
        alignItems="center"
        textAlign="center"
        display="flex"
        flexDirection="column"
      >
        <Box alignItems="center" textAlign="center" display="flex">
          <Typography variant="subtitle1" sx={{ padding: "0px 20px" }}>
            Porcentaje de Importancia: {totalPercentage}
          </Typography>
          {totalPercentage > 100 && (
            <Typography variant="subtitle1" sx={{ color: "red" }}>
              No puedes sumar más importancia.
            </Typography>
          )}
        </Box>
        <LinearProgress
          variant="determinate"
          value={Math.min(100, totalPercentage)}
          sx={{
            marginBottom: 2,
            width: "90%",
            backgroundColor: totalPercentage >= 100 && "red",
          }}
        />
      </Box>
      <Box
        sx={{
          overflowY: "scroll",
          height: "75%",
        }}
      >
        <AllInputControl
          index={1}
          title={title}
          handleInputChange={handleInputChange}
          totalPercentage={totalPercentage}
          register={register}
        />
        <AllInputControl
          index={2}
          title={title}
          handleInputChange={handleInputChange}
          totalPercentage={totalPercentage}
          register={register}
        />
        <AllInputControl
          index={3}
          title={title}
          handleInputChange={handleInputChange}
          totalPercentage={totalPercentage}
          register={register}
        />
        <AllInputControl
          index={4}
          title={title}
          handleInputChange={handleInputChange}
          totalPercentage={totalPercentage}
          register={register}
        />
        <AllInputControl
          index={5}
          title={title}
          handleInputChange={handleInputChange}
          totalPercentage={totalPercentage}
          register={register}
        />
        <AllInputControl
          index={6}
          title={title}
          handleInputChange={handleInputChange}
          totalPercentage={totalPercentage}
          register={register}
        />
        <AllInputControl
          index={7}
          title={title}
          handleInputChange={handleInputChange}
          totalPercentage={totalPercentage}
          register={register}
        />
        <AllInputControl
          index={8}
          title={title}
          handleInputChange={handleInputChange}
          totalPercentage={totalPercentage}
          register={register}
        />
        <AllInputControl
          index={9}
          title={title}
          handleInputChange={handleInputChange}
          totalPercentage={totalPercentage}
          register={register}
        />
        <button onClick={() => console.log(trasnforData(getValues(), title))}>
          {" "}
          hola
        </button>
      </Box>
    </>
  );
};

export default Oportunidades;
