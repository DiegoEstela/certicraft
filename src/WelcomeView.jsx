import {
  Box,
  Button,
  ButtonGroup,
  Typography,
  useMediaQuery,
} from "@mui/material";

import Animation from "./components/Animation/Animation";
import { useNavigate } from "react-router-dom";

const WelcomeView = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <>
      <Animation />

      <Typography variant={isSmallScreen ? "h4" : "h3"} gutterBottom>
        Test
      </Typography>
      <Typography variant={isSmallScreen ? "body2" : "body1"}>
        Nuestro sistema de gestión de certificación ISO{" "}
        <Box component="span" fontStyle="italic">
          powered by ByFE Tech
        </Box>
      </Typography>
      <Box sx={{ marginTop: "40px" }}>
        <ButtonGroup
          variant="outlined"
          aria-label="outlined button group"
          color="primary"
        >
          <Button onClick={() => navigate("/companyData")}>
            DATOS DEL CLIENTE
          </Button>
          <Button onClick={() => navigate("/allStandars")}>Normas ISO</Button>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default WelcomeView;
