import { Typography, List, ListItem, ListItemText } from "@mui/material";

const GlosarioText = ({ glosarioText }) => {
  return (
    <>
      <List>
        {glosarioText.map((entrada, index) => (
          <ListItem key={index}>
            <ListItemText
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="h6"
                    color="text.primary"
                    sx={{ fontSize: "16px" }}
                  >
                    {entrada?.termino} :
                  </Typography>
                  <br />
                  {entrada.texto}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GlosarioText;
