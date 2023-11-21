import { Box, Container } from "@mui/material";
import React from "react";
import { BallTriangle } from "react-loader-spinner";

const FullLoader = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#63CCCA"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </Box>
    </Container>
  );
};

export default FullLoader;
