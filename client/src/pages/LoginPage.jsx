// utill
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    await axios
      .post("http://localhost:5000/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("customer_id", res.data.cusID);
        toast.success(res.data.msg, {
          duration: 1500,
          position: "top-center",
        });
        setTimeout(() => navigate("/home/restaurants"), 1300);
      })
      .catch((err) => {
        toast.error(err.response.data.msg, {
          duration: 1500,
          position: "top-center",
        });
      });
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-Meyellow">
      <Toaster />
      <form className="flex h-4/5 w-11/12 flex-col justify-center gap-5 rounded-xl bg-white p-5 drop-shadow-lg lg:w-[700px]">
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          LOGO
        </Typography>
        <TextField value={username} onChange={(e) => setUsername(e.target.value)} label="Username" color="secondary" />
        <TextField value={password} onChange={(e) => setPassword(e.target.value)} label="Password" color="secondary" />
        <Button variant="contained" color="secondary" onClick={onLogin} sx={{ color: "white" }}>
          Login
        </Button>
        <Button sx={{ color: "#ff6d59" }}>Register</Button>
      </form>
    </div>
  );
}

export default LoginPage;
