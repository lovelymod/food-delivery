// icon
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// utill
import { AppBar, Toolbar, IconButton, Typography, Badge } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

// hooks
import useGetOrder from "../hooks/useGetOrder";

const AppBarr = ({ navOpen, setnavOpen }) => {
  const navigate = useNavigate();
  const localhost = useLocation();
  const orderList = useGetOrder("http://localhost:5000/getorder");

  const toggleMenu = () => setnavOpen(!navOpen);
  const back = () => history.back();
  // sx={{ display: window.innerWidth < 1280 ? "none" : "block" }}
  return (
    <>
      {window.innerWidth < 1280 ? (
        <AppBar>
          <Toolbar className="gap-5">
            <IconButton aria-label="menu" size="large" onClick={back}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {localhost.pathname.substring(6).toUpperCase()}
            </Typography>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar>
          <Toolbar className="gap-5">
            <IconButton aria-label="menu" size="large" onClick={toggleMenu}>
              {navOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {localhost.pathname.substring(6).toUpperCase()}
            </Typography>
            <IconButton aria-label="bucket" size="large" onClick={() => navigate("/home/bucket")}>
              <Badge badgeContent={orderList.length} color="error">
                <ShoppingBasketIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default AppBarr;
