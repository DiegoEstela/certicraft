import React, { useState } from "react";
import { Button, Paper, TextField, Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { auth } from "../../config/firebase";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoader(true);
      const { email, password } = data;
      const result = await signInWithEmailAndPassword(auth, email, password);
      if (result) {
        setLoader(false);
        Swal.fire({
          icon: "success",
          title: "¡Inicio de sesión exitoso!",
          text: "Bienvenido de vuelta.",
        });
      }
    } catch (error) {
      setLoader(false);
      Swal.fire({
        icon: "error",
        title: "Error al iniciar sesión",
      });
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      p="0 16px"
      minHeight="100vh"
      alignItems="center"
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "40vh",
          padding: "24px",
          minWidth: "280px",
          width: "24vw",

        }}
      >
        {!loader ? 
        (
          <>
          <Box display="flex" flexDirection="column" justifyContent="space-between" height="2%" >
        <Typography variant="h5">
          CERTICRAFT
        </Typography>
        <Typography variant="h6">Inicia sesión</Typography>
      </Box>
      <Box  > 
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          {...register("email", { required: "Este campo es requerido" })}
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={{ marginBottom: "24px", padding:'2' }}
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          {...register("password", { required: "Este campo es requerido" })}
          error={!!errors.password}
          helperText={errors.password?.message}
          sx={{ marginBottom: "24px" }}
        />

        <Button variant="contained" color="primary" fullWidth type="submit">
          Iniciar Sesión
        </Button>
      </form>
      </Box>
       </>)
        : "cargando"}

       
      </Paper>
    </Box>
  );
};

export default Login;
