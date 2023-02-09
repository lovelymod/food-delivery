import { Backdrop } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SettingsIcon from "@mui/icons-material/Settings";
const SideBar = ({ navOpen, setnavOpen }) => {
  const closeNav = () => setnavOpen(false);

  const navList = [
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
          <div key={item.title} className="flex cursor-pointer gap-5 p-5 hover:text-white">
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
