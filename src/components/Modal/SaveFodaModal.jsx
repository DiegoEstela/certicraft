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

  console.log("OOOO", lastFoda);

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

          <ol>
            <li>
              <strong>Edición por Error:</strong>
              <br />
              Si estás editando por una mala interpretación o error, haz clic en
              el botón "Editar" para corregir los detalles.
            </li>

            <li>
              <strong>Actualización de Versión:</strong>
              <br />
              Si estás realizando cambios significativos y deseas actualizar la
              versión del FODA, selecciona "Actualizar Versión".
            </li>

            <li>
              <strong>Nuevo FODA con Nueva Vigencia:</strong>
              <br />
              Si estás creando un nuevo FODA con una vigencia diferente, elige
              la opción "Nuevo FODA".
            </li>
          </ol>

          <p>
            Recuerda que cualquier acción que elijas requerirá que presiones el
            botón correspondiente para confirmar tus decisiones. ¡Gracias por tu
            colaboración!
          </p>
          <Typography sx={{ textAlign: "center", mb: 2 }}>
            {lastFoda
              ? ""
              : "Apreta en Nuevo Foda ya que todavia no has creado ningun docuemento"}
          </Typography>
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
                  <Button
                    variant="contained"
                    onClick={() => setOpenNewModal(true)}
                  >
                    Nuevo FODA
                  </Button>
                </ButtonGroup>
              </Box>
            ) : (
              <Button onClick={() => setOpenNewModal(true)}>Nuevo FODA</Button>
            )}
          </>
        )}

        {openNewModal && (
          <NewFodaModal
            fodaData={fodaData}
            setOpenNewModal={setOpenNewModal}
            setSaveModal={setSaveModal}
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
