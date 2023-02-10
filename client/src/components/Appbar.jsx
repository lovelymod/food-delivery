import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useNavigate } from "react-router-dom";

const AppBarr = ({ navOpen, setnavOpen }) => {
  const navigate = useNavigate();
  const toggleMenu = () => setnavOpen(!navOpen);
  return (
    <AppBar>
      <Toolbar className="gap-5">
        <IconButton aria-label="menu" size="large" onClick={toggleMenu}>
          {navOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Discover
        </Typography>
        <IconButton aria-label="bucket" size="large" onClick={() => navigate("/buckget")}>
          <ShoppingBasketIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarr;
