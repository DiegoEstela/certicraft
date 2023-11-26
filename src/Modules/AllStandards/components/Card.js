import { useTheme } from "@emotion/react";
import { Card, CardContent, Typography } from "@mui/material";

export const StandardCard = ({ standard, onCardClick }) => {
  const theme = useTheme();

  return (
    <Card
      onClick={standard.active ? onCardClick : null}
      sx={{
        backgroundColor: standard.active
          ? theme.palette.primary.main
          : theme.palette.grey[500],
        color: theme.palette.common.white,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: standard.active ? "pointer" : "default",
        "&:hover": {
          backgroundColor: standard.active
            ? theme.palette.primary.dark
            : theme.palette.grey[500],
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" align="center">
          {standard.name}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }} align="center">
          {standard.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
