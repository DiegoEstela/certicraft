import React, { useEffect, useState } from "react";
import {
  Modal,
  Typography,
  IconButton,
  Box,
  Divider,
  useTheme,
  Backdrop,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { glosarioText } from "./../../utils/GlosarioText";

import { CustomPaper } from "./glosario.style";
import GlosarioText from "./GlosarioText";

const Glosario = ({ open, onClose }) => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const normalizeString = (str) => {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const filteredGlosarioText = glosarioText.filter((entrada) =>
    normalizeString(entrada.termino).includes(normalizeString(searchTerm))
  );
  return (
    <Modal
      open={open}
      onClose={onClose}
      className="modal"
      closeAfterTransition
      disableScrollLock
      disablePortal
      hideBackdrop
    >
      <>
        <Backdrop />
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1400,
          }}
        >
          <CustomPaper>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.light,
                padding: theme.spacing(2),
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "4px",
              }}
            >
              <Typography variant="h5">Glosario</Typography>

              <TextField
                color="border"
                label="Buscar término"
                size="small"
                fullWidth
                margin="dense"
                value={searchTerm}
                onChange={handleSearchChange}
                sx={{
                  margin: "0 50% 0px 5%",
                }}
              />
              <IconButton color="inherit" onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Divider sx={{ marginY: 0 }} />
            <Box
              sx={{
                maxHeight: "86%",
                height: "86%",

                overflowY: "auto",
              }}
            >
              <GlosarioText glosarioText={filteredGlosarioText} />
            </Box>
          </CustomPaper>
        </Box>
      </>
    </Modal>
  );
};

export default Glosario;
