import React, { useContext } from "react";
import {
  Button,
  Paper,
  TextField,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext} from "../../context/AuthContext";
import logoByFe from "../../assets/logoByFe.png";

const LoginApp = () => {
  const { signIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      await signIn(email, password);
    } catch (error) {
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
          height: "60%",
          maxHeight: "420px",
          padding: "24px",
          minWidth: "280px",
          width: "24vw",
        }}
      >
         
          <>
            <Box sx={{ display: 'flex' , flexDirection: 'column', width: '100%', alignItems: 'center', }}>
     
              <Avatar src={logoByFe} alt="byfe" sx={{ width: "40px"}} />
  
              <Typography variant="h6">Inicia sesión</Typography>
            </Box>
            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  label="Correo electrónico"
                  variant="outlined"
                  fullWidth
                  {...register("email", {
                    required: "Este campo es requerido",
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  sx={{ marginBottom: "24px", maxHeight: "60px"}}
                />
                <TextField
                  label="Contraseña"
                  type="password"
                  variant="outlined"
                  fullWidth
                  {...register("password", {
                    required: "Este campo es requerido",
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  sx={{ marginBottom: "24px", maxHeight: "60px" }}
                />

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Iniciar Sesión
                </Button>
              </form>
            </Box>
          </>
        
      </Paper>
    </Box>
  );
};

export default LoginApp;
