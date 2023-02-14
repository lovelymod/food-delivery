// utill
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const onLogin = () => navigate("/home/restaurants");
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-Meyellow">
      <form className="flex h-4/5 w-11/12 flex-col justify-center gap-5 rounded-xl bg-white p-5 drop-shadow-lg lg:w-[700px]">
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          LOGO
        </Typography>
        <TextField label="Username" color="secondary" />
        <TextField label="Password" color="secondary" />
        <Button variant="contained" color="secondary" onClick={onLogin} sx={{ color: "white" }}>
          Login
        </Button>
        <Button sx={{ color: "#ff6d59" }}>Register</Button>
      </form>
    </div>
  );
}

export default LoginPage;
