import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { Button } from "@mui/material";

import moment from "moment";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { updateFodaVersion } from "./../../services/updateFodaVersion";

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

export default function ChangeVersionModal({ fodaData, lastFoda }) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const updateFoda = async () => {
    try {
      const uid = user?.uid;
      const res = await updateFodaVersion(
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
          title: `Actualizaste el foda a la version: ${lastFoda?._version + 1}`,
          text: `Los datos se actualizaron correctamente.`,
        });

        navigate(0);
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
          Actualizar
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, textAlign: "center" }}
        >
          {` Estas por cambiar de version al foda : Vigencia: ${moment(
            lastFoda?._vigencia?.seconds * 1000
          ).format("YYYY-MM-DD")}`}
          <strong>
            {" "}
            {`VERSION: ${lastFoda?._version} x VERSION: ${
              lastFoda?._version + 1
            }`}{" "}
          </strong>
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
            Actualizar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
