import { AppBar, Avatar, Toolbar } from "@mui/material";
import byfe from '../../assets/logoByFeText.png'
import { AuthContext} from "../../context/AuthContext";
import { useContext } from "react";

function Header() {
  const {user} = useContext(AuthContext)
  return (
    <AppBar position="static">
       <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <img src={byfe} alt="Logo"   style={{ width: 'auto', height: '40px', }}/>
      <Avatar
        sx={{
          backgroundColor: '#7F7F7F', 
          width: 40,
          height: 40,
        }}
      >
        {user?.email[0].toUpperCase()}
      </Avatar>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
