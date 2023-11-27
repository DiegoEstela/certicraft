import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Box, Paper, Typography } from "@mui/material";
import { HandleCuitChange } from "../../../utils/handleCuilChange";
import { AuthContext } from "../../../context/AuthContext";
import useGetCompanyData from "./../../../hooks/useGetCompanyData";
import { handleSaveOrUpdate } from "../../../utils/handleSabeOrUpdate";
import FullLoader from "./../../../components/FullLoader/FullLoader";
import Forms from "../components/Forms";

const ClientForm = () => {
  const { user } = useContext(AuthContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const [metodQuery, setMetodQuery] = useState("save");
  const { data: clientes, isLoading, isError } = useGetCompanyData(user?.uid);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleEdit = () => {
    if (!isEditMode) {
      setMetodQuery("update");
      setIsEditMode(false);
    } else {
      setMetodQuery("save");
      setIsEditMode(false);
    }
    setIsEditMode(!isEditMode);
  };

  const onSubmit = async (data) => {
    try {
      const uid = user?.uid;
      const datosCliente = { ...data };
      await handleSaveOrUpdate(uid, datosCliente, metodQuery, handleEdit);
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
      {isLoading ? (
        <FullLoader />
      ) : (
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

            {isError && <p>Error al cargar datos del cliente</p>}
            {!isLoading && !isError && (
              <Forms
                control={control}
                clientes={clientes}
                errors={errors}
                isEditMode={isEditMode}
                HandleCuitChange={HandleCuitChange}
              />
            )}
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box m={2}>
                {clientes !== "NO_CLIENTE" ? (
                  <Button
                    onClick={handleEdit}
                    variant="contained"
                    color="primary"
                  >
                    {isEditMode ? "Atras" : "Editar"}
                  </Button>
                ) : (
                  ""
                )}
              </Box>
              <Box mt={2}>
                {clientes !== "NO_CLIENTE" && !isLoading && !isError ? (
                  <>
                    {isEditMode ? (
                      <Button type="submit" variant="contained" color="primary">
                        Actualizar
                      </Button>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  <>
                    {!isEditMode ? (
                      <Button type="submit" variant="contained" color="primary">
                        {" "}
                        Crear Cliente
                      </Button>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </Box>
            </Box>
          </Paper>
        </form>
      )}
    </Box>
  );
};

export default ClientForm;
