import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

function AllInputControl({
  index,
  title,
  handleInputChange,
  totalPercentage,
  register,
  defaultValue,
  setValue,
  lastFoda,
}) {
  const [importancia, setImportancia] = useState(lastFoda?.importancia || "");

  const handleChange = (e) => {
    if (isNaN(e.target.value)) {
      return;
    }
    const newValue = e.target.value !== "" ? parseInt(e.target.value, 10) : 0;
    setImportancia(newValue);
    handleInputChange(index - 1, newValue);
  };

  useEffect(() => {
    setValue(`${index}-importancia`, "");
  }, [index, setValue]);
  console.log("AAAA", lastFoda);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "50px",
        margin: "8px 0px",
        padding: 0,
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          lg={7}
          xs={6}
          md={6}
          spacing={2}
          sx={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ marginRight: "4px" }}>{`# ${index}`}</Box>

          <TextField
            name={`${index}-${title}`}
            label={`${title} ${index}`}
            defaultValue={lastFoda?.description || ""}
            {...register(`${index}-${title}`, {
              required: "Este campo es requerido",
            })}
            variant="outlined"
            fullWidth
            margin="dense"
            size="small"
            sx={{ width: "95%" }}
          />
        </Grid>

        <Grid item xs={4} md={5} lg={4}>
          <FormControl
            name={`${index}-interesadoUno`}
            variant="outlined"
            margin="dense"
            size="small"
            sx={{
              width: "30%",
              marginRight: "3px",
            }}
          >
            <InputLabel sx={{ fontSize: "14px" }}>Interesado</InputLabel>
            <Select
              defaultValue={lastFoda?.interesados?.Uno || ""}
              label={`${index}-interesadoUno`}
              sx={{ fontSize: "14px" }}
              {...register(`${index}-interesadoUno`, {
                required: "Este campo es requerido",
              })}
            >
              <MenuItem value="personas">Personas</MenuItem>
              <MenuItem value="comunidad">Comunidad</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            name={`${index}-interesadoDos`}
            variant="outlined"
            margin="dense"
            size="small"
            sx={{
              width: "30%",
              marginRight: "3px",
            }}
          >
            <InputLabel sx={{ fontSize: "14px" }}>Interesado</InputLabel>
            <Select
              defaultValue={lastFoda?.interesados?.Dos || ""}
              label={`${index}-interesadoDos`}
              sx={{ fontSize: "14px" }}
              {...register(`${index}-interesadoDos`, {
                required: "Este campo es requerido",
              })}
            >
              <MenuItem value="personas">Personas</MenuItem>
              <MenuItem value="comunidad">Comunidad</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            name={`${index}-interesadoTres`}
            variant="outlined"
            margin="dense"
            size="small"
            sx={{
              width: "30%",
              marginRight: "3px",
            }}
          >
            <InputLabel sx={{ fontSize: "14px" }}>Interesado</InputLabel>
            <Select
              defaultValue={lastFoda?.interesados?.Tres || ""}
              label={`${index}-interesadoTres`}
              sx={{ fontSize: "14px" }}
              {...register(`${index}-interesadoTres`, {
                required: "Este campo es requerido",
              })}
            >
              <MenuItem value="personas">Personas</MenuItem>
              <MenuItem value="comunidad">Comunidad</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={1} md={1} lg={1} sx={{ display: "flex" }}>
          <TextField
            name={`${index}-importancia`}
            {...register(`${index}-importancia`, {
              required: "Este campo es requerido",
            })}
            type="text"
            value={importancia}
            label="%"
            margin="dense"
            size="small"
            onChange={handleChange}
            InputProps={{
              inputProps: { max: 100, min: 0, maxLength: 2 },
            }}
            error={totalPercentage > 100}
            sx={{
              width: "60px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AllInputControl;
