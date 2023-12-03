import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { Button } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
import moment from "moment";

const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
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

export default function UpdateFodaModal({
  fodaData,
  setOpenUpdateModal,
  fodaList,
}) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const { user } = useContext(AuthContext);

  const updateFoda = async () => {
    try {
      const uid = user?.uid;
      setOpenUpdateModal(false);
    } catch (err) {
      console.log(err);
    }
  };

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
          Edicion de Foda
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, textAlign: "center" }}
        >
          {`Estar por editar el foda: Vigencia: ${moment(
            fodaList._vigencia
          ).format("DD/MM/YYYY")} `}{" "}
        </Typography>
        {fodaList.version}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Button variant="outlined" onClick={updateFoda}>
            Crear Foda
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
