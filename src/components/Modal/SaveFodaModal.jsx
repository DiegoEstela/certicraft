import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, ButtonGroup, LinearProgress } from "@mui/material";
import NewFodaModal from "./NewFodaModal";

import UpdateFodaModal from "./UpdateFodaModal";

const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  borderRadius: "16px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export function SaveFodaModal({
  lastFoda,
  lastFodaStatus,
  fodaData,
  setSaveModal,
}) {
  const [openNewModal, setOpenNewModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          sx={{ mb: 2, textAlign: "center" }}
        >
          Confirmación de Guardado de Datos FODA
        </Typography>

        <Box>
          <p>
            Estás a punto de guardar los datos del FODA. Por favor, selecciona
            la opción adecuada según tu situación:
          </p>
          {lastFoda ? (
            <ol>
              <li>
                <strong>Edición sin cambio de versión:</strong>
                <br />
                Si quieres editar para agregar o modificar la información sin
                cambiar la versión, haz clic en el botón "Editar".
              </li>

              <li>
                <strong>Actualización de Versión:</strong>
                <br />
                Si estás realizando cambios significativos y deseas actualizar
                la versión del FODA, selecciona "Actualizar Versión".
              </li>

              <li>
                <strong>Nuevo FODA con Nueva Vigencia:</strong>
                <br />
                Si estás creando un nuevo FODA con una vigencia diferente, elige
                la opción "Nuevo FODA".
              </li>
              <p>
                Recuerda que cualquier acción que elijas requerirá que presiones
                el botón correspondiente para confirmar tus decisiones.
              </p>
            </ol>
          ) : (
            <strong style={{ textAlign: "center" }}>
              Aún no creaste ningún documento. Presiona Nuevo Foda{" "}
            </strong>
          )}

          <Typography sx={{ textAlign: "center", mb: 2 }}></Typography>
        </Box>
        {lastFodaStatus === "loading" ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        ) : (
          <>
            {lastFodaStatus === "success" && lastFoda ? (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  <Button
                    onClick={() => {
                      setOpenUpdateModal(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button>Actualizar version</Button>
                  <Button onClick={() => setOpenNewModal(true)}>
                    Nuevo FODA
                  </Button>
                </ButtonGroup>
              </Box>
            ) : (
              <Button
                variant="outlined"
                size="small"
                sx={{ width: "40%", textAlign: "center", display: "flex" }}
                onClick={() => setOpenNewModal(true)}
              >
                Nuevo FODA
              </Button>
            )}
          </>
        )}

        {openNewModal && (
          <NewFodaModal
            fodaData={fodaData}
            lastFoda={lastFoda}
            setOpenNewModal={setOpenNewModal}
          />
        )}
        {openUpdateModal && (
          <UpdateFodaModal
            fodaData={fodaData}
            setOpenUpdateModal={setOpenUpdateModal}
            setSaveModal={setSaveModal}
            lastFoda={lastFoda}
          />
        )}
      </Box>
    </Modal>
  );
}
