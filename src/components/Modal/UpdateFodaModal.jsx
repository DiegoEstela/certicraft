import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { Button } from "@mui/material";

import moment from "moment";
import { AuthContext } from "../../context/AuthContext";
import { updateFodaAnalice } from "../../services/updateFodaAnalice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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

export default function UpdateFodaModal({ fodaData, lastFoda }) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(lastFoda);
  const updateFoda = async () => {
    try {
      const uid = user?.uid;
      const res = await updateFodaAnalice(
        uid,
        fodaData,
        lastFoda?._vigencia,
        lastFoda?._version,
        lastFoda?.id
      );
      if (res) {
        Swal.fire({
          customClass: {
            container: "swal-container",
          },
          icon: "success",
          title: "Datos actualizados",
          text: `Los datos se actualizaron correctamente.`,
        });

        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al acutalizar los datos",
          customClass: {
            container: "swal-container",
          },
        });
      }
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
          {` Estas por editar : Vigencia: ${moment(
            lastFoda?._vigencia?.seconds * 1000
          ).format("YYYY-MM-DD")} V: ${lastFoda?._version}`}
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Button variant="outlined" onClick={updateFoda}>
            Editar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
