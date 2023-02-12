import AppBarr from "../components/Appbar";
import SideBar from "../components/SizeBar";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, MenuItem, TextField, Typography } from "@mui/material";

function OrderPlacing() {
  const location = useLocation();
  const navigate = useNavigate();
  const foodorder = location.state.item;
  const [navOpen, setnavOpen] = useState(false);
  const [restaurant, setRestaurant] = useState({});
  const [payment, setPayment] = useState("");

  const placeOrder = async () => {
    await axios
      .patch("http://localhost:5000/updateorder", {
        id: foodorder.id,
        status: "delivered",
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/home");
        }
      });
  };

  useEffect(() => {
    const resID = foodorder.restaurant_id;
    const getStore = async () => {
      await axios.get(`http://localhost:5000/getresbyid/${resID}`).then((res) => {
        setRestaurant(res.data);
      });
    };
    getStore();
  }, []);

  return (
    <div className="flex h-screen w-screen justify-center xl:py-5">
      <AppBarr navOpen={navOpen} setnavOpen={setnavOpen} />
      <SideBar navOpen={navOpen} setnavOpen={setnavOpen} />
      <div className="flex h-full w-full flex-col gap-5 bg-white px-2 pt-20 md:w-[500px] md:rounded-xl md:drop-shadow-xl">
        {/* store */}
        <div className="flex h-[50px] items-center justify-center gap-5">
          <img
            className="object-contain"
            src={restaurant.restaurant_logo}
            alt={restaurant.restaurant_name}
            width="50px"
          />
          <Typography variant="">{restaurant.restaurant_name}</Typography>
        </div>
        {/* location */}
        <div className="flex flex-col">
          <Typography variant="h6">ส่งไปที่</Typography>
          <div className="flex cursor-pointer items-center justify-around gap-5">
            <LocationOnIcon color="secondary" />
            <Typography variant="body1">location infomation...</Typography>
            <ArrowForwardIosIcon color="secondary" sx={{ textAlign: "end" }} />
          </div>
        </div>

        {/* food */}
        <div className="mt-5 flex flex-col gap-5">
          <Typography variant="h6">สรุปคำสั่งซื้อ</Typography>
          <div
            className="flex cursor-pointer flex-col"
            onClick={() => navigate("/fooddetail", { state: { id: foodorder.food_id } })}
          >
            <div className="flex justify-between gap-5">
              <Typography variant="body1" color="secondary">
                {foodorder.amount}x
              </Typography>
              <Typography variant="body1">{foodorder.food_name}</Typography>
              <Typography variant="body1">{foodorder.total}</Typography>
            </div>
            <Typography variant="body1" sx={{ color: "blue", opacity: 0.8 }}>
              ปรับแต่งรายการ
            </Typography>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-5">
          <Typography variant="h6">รายละเอียดการชำระเงิน</Typography>
          <TextField
            value={payment}
            label="เลือกช่องทางการชำระเงิน"
            onChange={(e) => setPayment(e.target.value)}
            select
            fullWidth
          >
            <MenuItem value="mtc">MasterCard 9999</MenuItem>
            <MenuItem value="cash">เงินสด</MenuItem>
          </TextField>
        </div>

        {/* submit */}
        <div className="fixed bottom-5 w-full px-5 md:w-[500px]">
          <Button variant="contained" fullWidth onClick={placeOrder}>
            สั่งซื้อ {foodorder.total}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OrderPlacing;
