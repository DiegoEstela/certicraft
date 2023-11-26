import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Button, Container, Grid, Paper } from "@mui/material";
import { standards } from "../../../utils/standards";

const StandardDetail = () => {
  const { name } = useParams();
  const standard = standards.find((standar) => standar.name === name);

  const handleOptionClick = (option) => {
    console.log(`Opción seleccionada: ${option}`);
    // Agrega lógica adicional según sea necesario
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          {standard.name}
        </Typography>
        <Typography variant="body1">{standard.description}</Typography>
        <Grid container spacing={2} sx={{ marginTop: 3 }}>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              onClick={() => handleOptionClick("Option 1")}
            >
              Opción 1
            </Button>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              onClick={() => handleOptionClick("Option 2")}
            >
              Opción 2
            </Button>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              onClick={() => handleOptionClick("Option 3")}
            >
              Opción 3
            </Button>
          </Grid>

          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              onClick={() => handleOptionClick("Option 4")}
            >
              Opción 4
            </Button>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              onClick={() => handleOptionClick("Option 5")}
            >
              Opción 5
            </Button>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              onClick={() => handleOptionClick("Option 6")}
            >
              Opción 6
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default StandardDetail;
