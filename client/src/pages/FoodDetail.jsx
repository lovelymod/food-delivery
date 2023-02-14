// icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// utill
import axios from "axios";
import { Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function FoodDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state.id;
  const orderID = location.state.orderID;
  console.log("🚀 ~ file: FoodDetail.jsx:16 ~ orderID", orderID);
  const [food, setFood] = useState({});
  const [count, setCount] = useState(1);
  const total = food.food_price * count;

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => count !== 0 && setCount((prev) => prev - 1);

  const addtoBucket = async () => {
    const id = food.id;
    await axios.get(`http://localhost:5000/getoneorder/${id}`).then(async (res) => {
      // ? true:update false:create
      if (res.data) {
        // todo update order
        await axios
          .patch("http://localhost:5000/updateorder", {
            id: res.data.id,
            amount: count,
            total: total,
          })
          .then((res) => {
            if (res.status === 200) navigate("/home/bucket");
          })
          .catch((err) => console.log(err));
      } else {
        // todo delete order if count = false and orderID = true
        if (count === 0 && orderID !== 0) {
          console.log("delete order here");
        } else {
          // todo create order if count !== 0 and orderID === 0
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
              res.status === 201 && navigate("/home/foodmenu", { state: { id: food.restaurant_id } });
            })
            .catch((err) => console.log(err));
        }
      }
    });
  };

  useEffect(() => {
    const getFood = async () => {
      await axios.get(`http://localhost:5000/getfood/${id}`).then(async (res) => {
        setFood(res.data);
        await axios
          .get(`http://localhost:5000/getoneorder/${res.data.id}`)
          .then((res) => {
            res.data.amount ? setCount(res.data.amount) : setCount(1);
          })
          .catch((err) => {});
      });
    };
    getFood();
  }, []);

  return (
    <div className="flex h-full w-full flex-col gap-5 bg-white pt-20 xl:w-[700px] xl:rounded-lg xl:drop-shadow-2xl">
      {/* detail */}
      <img className="h-[300px] w-full object-contain" src={`/${food.food_logo}`} alt={food.food_name} />
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

      {/* button */}
      <div className="fixed bottom-14 left-0 mb-5 w-full px-5 xl:bottom-0 xl:w-[700px]">
        <Button
          size="large"
          color={count === 0 ? "error" : "primary"}
          variant="contained"
          fullWidth
          onClick={addtoBucket}
        >
          {count === 0 ? "ลบออกจากตระกร้า" : `เพิ่มไปยังตระกร้า - ${total}`}
        </Button>
      </div>
    </div>
  );
}

export default FoodDetail;
