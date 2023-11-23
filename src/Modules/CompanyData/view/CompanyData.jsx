import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Grid,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { HandleCuitChange } from "../../../utils/handleCuilChange";
import { AuthContext } from "../../../context/AuthContext";
import { saveDataCompany } from "../../../services/saveDataCompany";
import Swal from "sweetalert2";

const ClientForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const uid = user?.uid;
      const datosCliente = { ...data };
      const saveOk = await saveDataCompany(uid, datosCliente);
      if (saveOk) {
        Swal.fire({
          icon: "success",
          title: "Datos guardados",
          text: "Los datos se guardaron correctamente en Firestore.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un error al intentar guardar los datos. Por favor, inténtalo de nuevo.",
        });
      }
    } catch (error) {
      console.error("Error al guardar datos:", error);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "80%" }}>
        <Paper
          elevation={3}
          style={{
            padding: "15px",
            margin: "15px",
            height: "95%",
            overflowY: "auto",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Datos del Cliente
          </Typography>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12} sm={6}>
              <Controller
                name="razonSocial"
                control={control}
                defaultValue=""
                rules={{ required: "Campo obligatorio" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Razon Social"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    size="small"
                    error={Boolean(errors?.razonSocial)}
                    helperText={
                      errors?.razonSocial && errors?.razonSocial.message
                    }
                  />
                )}
              />

              <Controller
                name="cuil"
                control={control}
                defaultValue=""
                rules={{
                  required: "Campo obligatorio",
                  pattern: {
                    value: /^[0-9]{2}-[0-9]{8}-[0-9]$/,
                    message: "Formato de CUIL inválido",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="CUIL"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    size="small"
                    error={Boolean(errors?.cuil)}
                    helperText={errors?.cuil && errors?.cuil.message}
                    value={HandleCuitChange(field.value)}
                    onChange={(e) => {
                      const formattedValue = HandleCuitChange(e.target.value);
                      field.onChange(formattedValue);
                    }}
                  />
                )}
              />

              <Controller
                name="direccion"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Dirección"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    size="small"
                  />
                )}
              />

              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <Controller
                    name="numeroCalle"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Número"
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        size="small"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Controller
                    name="codigoPostal"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Código Postal"
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        size="small"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Controller
                    name="ciudad"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Ciudad"
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        size="small"
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    size="small"
                  >
                    <InputLabel>Código de Área</InputLabel>
                    <Controller
                      name="codigoArea"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Select {...field} label="Código de Área" size="small">
                          <MenuItem value="1">+1</MenuItem>
                          <MenuItem value="52">+52</MenuItem>
                        </Select>
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={8}>
                  <Controller
                    name="telefono"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Teléfono"
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        size="small"
                        error={Boolean(errors?.telefono)}
                        helperText={
                          errors?.telefono && "Ingresa un número válido"
                        }
                      />
                    )}
                  />
                </Grid>
              </Grid>

              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Campo obligatorio",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Formato de correo electrónico inválido",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    size="small"
                    error={Boolean(errors?.email)}
                    helperText={errors?.email && errors?.email.message}
                  />
                )}
              />

              <Controller
                name="web"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Web"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    size="small"
                    error={Boolean(errors?.web)}
                    helperText={
                      errors?.web && "Ingresa una dirección web válida"
                    }
                  />
                )}
              />

              <Controller
                name="numeroContacto"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Número de Contacto"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    size="small"
                  />
                )}
              />
            </Grid>
          </Grid>

          <Box mt={2} p={1} bgcolor="#f0f0f0" sx={{ borderRadius: "8px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="condicionIVA"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Campo obligatorio" }}
                  render={({ field }) => (
                    <FormControl
                      variant="outlined"
                      fullWidth
                      margin="dense"
                      size="small"
                      sx={{ marginBottom: 2 }}
                    >
                      <InputLabel>Condición frente al IVA</InputLabel>
                      <Select
                        {...field}
                        label="Condición frente al IVA"
                        style={{ height: "48px" }}
                      >
                        <MenuItem value="Responsable Inscripto">
                          Responsable Inscripto
                        </MenuItem>
                        <MenuItem value="Monotributista">
                          Monotributista
                        </MenuItem>
                        <MenuItem value="Exento">Exento</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
                <Controller
                  name="actividadPrincipal"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Campo obligatorio" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Actividad Principal"
                      variant="outlined"
                      fullWidth
                      margin="dense"
                      size="small"
                      style={{ marginBottom: 2 }}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="ingresosBrutos"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Ingresos Brutos"
                      variant="outlined"
                      fullWidth
                      margin="dense"
                      size="small"
                      style={{ marginBottom: 2 }}
                    />
                  )}
                />
                <Box mt={1.8}> </Box>
                <Controller
                  name="fechaInicioActividades"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Fecha de Inicio de Actividades"
                      variant="outlined"
                      fullWidth
                      margin="dense"
                      size="small"
                      style={{ marginBottom: 2 }}
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Box>

          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Guardar
            </Button>
          </Box>
        </Paper>
      </form>
    </Box>
  );
};

export default ClientForm;
