import { Player } from "@lottiefiles/react-lottie-player";
import { Box } from "@mui/material";
import { useRef } from "react";

function Animation() {
  const playerRef = useRef(null);
  return (
    <Box
      onMouseEnter={() => playerRef.current.pause()}
      onMouseLeave={() => playerRef.current.play()}
      sx={{
        cursor: "pointer",
        padding: 0,
        width: "30%",
        minWidth: "240px",
        display: "flex",
      }}
    >
      <Player
        src="https://lottie.host/57adaccc-96f8-4570-ba0a-22c572c5eec8/zSbWVNcGTK.json"
        className="player"
        loop
        autoplay
        style={{ height: "100%", width: "100%" }}
        ref={playerRef}
      />
    </Box>
  );
}

export default Animation;
