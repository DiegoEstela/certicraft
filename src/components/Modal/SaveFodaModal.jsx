import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, ButtonGroup, LinearProgress } from "@mui/material";
import NewFodaModal from "./NewFodaModal";
import { AuthContext } from "../../context/AuthContext";
import useGetFodaDocuments from "./../../hooks/useGetFodaDocuments";
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

export function SaveFodaModal({ fodaData, setSaveModal }) {
  const [openNewModal, setOpenNewModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const { user } = useContext(AuthContext);

  const { data: fodaList, status, isLoading } = useGetFodaDocuments(user?.uid);

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
        </Box>
        {isLoading ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        ) : (
          <>
            {status === "success" && fodaList?.length ? (
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
            fodaList={fodaList}
          />
        )}
        {openUpdateModal && (
          <UpdateFodaModal
            fodaData={fodaData}
            setOpenUpdateModal={setOpenUpdateModal}
            fodaList={fodaList}
            setSaveModal={setSaveModal}
          />
        )}
      </Box>
    </Modal>
  );
}
