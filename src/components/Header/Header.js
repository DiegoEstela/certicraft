import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const { signOut } = useAuth();
 
  const handleSignOut = async () => {
    await signOut();
    window.location.replace('/login')
    
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Certicraft</Typography>
        <Button onClick={handleSignOut} color="secondary">
          {" "}
          cerrar{" "}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
