import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { DatePicker } from "@mui/x-date-pickers";
import { Button, TextField } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
import { saveFodaAnalice } from "./../../services/saveFodaAnalice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "./Modal.css";

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

export default function NewFodaModal({ fodaData, lastFoda, setOpenNewModal }) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const [date, setDate] = useState();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const newFoda = async () => {
    try {
      const prevFoda = moment(lastFoda?._vigencia?.seconds * 1000).format(
        "YYYYMMDD"
      );
      const newFoda = moment(date?.$d).format("YYYYMMDD");

      if (prevFoda === newFoda) {
        Swal.fire({
          customClass: {
            container: "swal-container",
          },
          icon: "warning",
          text: `No le puedes poner a tu nuevo foda la fecha de vigencia del anterior.`,
        });
      } else {
        const uid = user?.uid;
        const res = await saveFodaAnalice(uid, fodaData, date);
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
          Nuevo Foda
        </Typography>

        <Typography
          id="modal-modal-description"
          sx={{ m: 3, textAlign: "center" }}
        >
          Elegi una nueva fecha de vigencia:
        </Typography>
        <DatePicker
          value={date}
          onChange={(newDate) => setDate(newDate)}
          renderInput={(params) => <TextField {...params} />}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => setOpenNewModal(false)}
            sx={{ marginRight: "16px" }}
          >
            Atras
          </Button>
          <Button variant="outlined" onClick={newFoda}>
            Crear Foda
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
