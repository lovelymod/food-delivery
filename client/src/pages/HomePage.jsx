// components
import AppBarr from "../components/Appbar";
import SideBar from "../components/SizeBar";

// icons
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

// utill
import { Paper, BottomNavigation, BottomNavigationAction, Badge } from "@mui/material";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// hooks
import useGetOrder from "../hooks/useGetOrder";

// context

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.substring(6);
  const [navOpen, setnavOpen] = useState(false);
  const [value, setValue] = useState(
    pathname === "restaurants"
      ? 0
      : "" || pathname === "order"
      ? 1
      : "" || pathname === "buckget"
      ? 2
      : "" || pathname === "setting"
      ? 4
      : ""
  );

  const orderList = useGetOrder("http://localhost:5000/getorder", value);

  return (
    <div className="flex h-screen w-screen flex-col items-center">
      <AppBarr navOpen={navOpen} setnavOpen={setnavOpen} />
      <SideBar navOpen={navOpen} setnavOpen={setnavOpen} />

      <Outlet />

      <Paper className="xl:hidden" sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => navigate("/home/restaurants")} />
          <BottomNavigationAction label="Orders" icon={<ListAltIcon />} onClick={() => navigate("/home/order")} />

          <BottomNavigationAction
            label="Bucket"
            icon={
              <Badge badgeContent={orderList.length} color="error">
                <ShoppingBasketIcon />
              </Badge>
            }
            onClick={() => navigate("/home/bucket")}
          />

          <BottomNavigationAction label="Profile" icon={<PersonIcon />} onClick={() => navigate("/home/profile")} />
          <BottomNavigationAction label="Setting" icon={<SettingsIcon />} onClick={() => navigate("/home/setting")} />
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default HomePage;
