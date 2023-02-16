// icon
import LogoutIcon from "@mui/icons-material/Logout";

// utill
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SettingPage() {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("customer_id");
    navigate("/");
  };
  return (
    <div className="flex h-fit w-full flex-col gap-5 px-2 pb-20 pt-20 xl:w-[700px] xl:pb-5">
      <div className="flex items-center justify-center gap-5">
        <Button variant="contained" endIcon={<LogoutIcon />} onClick={onLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}

export default SettingPage;
