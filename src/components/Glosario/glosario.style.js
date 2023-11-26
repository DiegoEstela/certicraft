import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const CustomPaper = styled(Paper)({
  width: "60%",
  height: "80%",
  overflowY: "auto",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  margin: "auto",
  position: "relative",
});

export const Backdrop = styled("div")({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1300,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
