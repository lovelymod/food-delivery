import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const AppBarr = ({ navOpen, setnavOpen }) => {
  const toggleMenu = () => setnavOpen(!navOpen);
  return (
    <AppBar>
      <Toolbar className="gap-5">
        <IconButton aria-label="menu" size="large" onClick={toggleMenu}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Discover
        </Typography>
        <IconButton aria-label="bucket" size="large">
          <ShoppingBasketIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarr;
