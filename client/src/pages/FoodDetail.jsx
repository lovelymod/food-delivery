import AppBarr from "../components/Appbar";
import SideBar from "../components/SizeBar";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import axios from "axios";
import { Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function FoodDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [navOpen, setnavOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [food, setFood] = useState({});
  const total = food.food_price * count;

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => count !== 1 && setCount((prev) => prev - 1);

  const addtoBucket = async () => {
    const id = food.id;
    await axios.get(`http://localhost:5000/getoneorder/${id}`).then(async (res) => {
      // ? true:update false:create
      if (res.data) {
        // todo update order
        await axios.patch("http://localhost:5000/updateorder", {
          id: res.data.id,
          amount: count,
          total: total,
        });
      } else {
        // todo create order
        await axios
          .post("http://localhost:5000/createorder", {
            restaurant_id: food.restaurant_id,
            food_id: food.id,
            food_name: food.food_name,
            food_logo: food.food_logo,
            amount: count,
            total: total,
            status: "pending",
          })
          .then((res) => {
            res.status === 201 && navigate("/foodmenu", { state: { id: food.restaurant_id } });
          });
      }
    });
  };

  useEffect(() => {
    const getFood = async () => {
      const id = location.state.id;
      await axios.get(`http://localhost:5000/getfood/${id}`).then(async (res) => {
        setFood(res.data);
        await axios.get(`http://localhost:5000/getoneorder/${res.data.id}`).then((res) => {
          res.data.amount ? setCount(res.data.amount) : setCount(1);
        });
      });
    };
    getFood();
  }, []);
  return (
    <div className="flex h-screen w-screen justify-center xl:py-5">
      <AppBarr navOpen={navOpen} setnavOpen={setnavOpen} />
      <SideBar navOpen={navOpen} setnavOpen={setnavOpen} />
      <div className="flex-col flex h-full w-full justify-between gap-5 overflow-auto bg-white drop-shadow-2xl xl:w-[700px] xl:rounded-lg">
        {/* detail */}
        <div className="flex-col flex w-full gap-5 pt-20">
          <img className="h-[300px] w-full object-contain" src={food.food_logo} alt={food.food_name} />
          <div className="flex justify-between px-5">
            <Typography gutterBottom variant="h4" component="div">
              {food.food_name}
            </Typography>
            <div className="flex items-center gap-3">
              <Typography gutterBottom variant="body1" component="div" sx={{ opacity: 0.5 }}>
                ราคา
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
                {food.food_price}
              </Typography>
            </div>
          </div>
          <div className="px-5">
            <Typography gutterBottom variant="h5" component="div" sx={{ opacity: 0.9 }}>
              {food.description}
            </Typography>
          </div>

          <div className="flex w-full items-center justify-evenly self-center px-5 md:w-3/5">
            <Button variant="outlined" color="secondary" onClick={decrement}>
              <RemoveIcon />
            </Button>
            <p className="text-xl"> {count} </p>
            <Button variant="outlined" color="secondary" onClick={increment}>
              <AddIcon />
            </Button>
          </div>
        </div>

        {/* button */}
        <div className="mb-5 w-full px-5 xl:w-[700px]">
          <Button size="large" variant="contained" fullWidth onClick={addtoBucket}>
            เพิ่มไปยังตระกร้า - {total}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FoodDetail;
