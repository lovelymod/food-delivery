import { Backdrop } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
const SideBar = ({ navOpen, setnavOpen }) => {
  const navigate = useNavigate();
  const closeNav = () => setnavOpen(false);

  const navList = [
    {
      icon: <HomeIcon />,
      title: "Home",
      func: () => navigate("/home"),
    },
    {
      icon: <PersonIcon />,
      title: "Profile",
    },
    {
      icon: <ListAltIcon />,
      title: "Order & Order again",
    },
    {
      icon: <SettingsIcon />,
      title: "Setting",
    },
    {
      icon: <LogoutIcon />,
      title: "Logout",
      func: () => navigate("/"),
    },
  ];
  return (
    <>
      <Backdrop className="z-[19]" open={navOpen} onClick={closeNav} />
      <div
        className={`fixed top-0  ${
          navOpen ? "left-0" : "-left-full"
        } z-20 h-full w-[250px] overflow-auto bg-Meyellow pt-20 transition-all`}
      >
        {navList.map((item) => (
          <div key={item.title} className="flex cursor-pointer gap-5 p-5 hover:text-white" onClick={item.func}>
            {item.icon}
            {item.title}
          </div>
        ))}
      </div>
      ;
    </>
  );
};

export default SideBar;
