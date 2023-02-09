import axios from "axios";
import { Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function FoodDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [food, setFood] = useState({});

  useEffect(() => {
    const getFood = async () => {
      const id = location.state.id;
      await axios.get(`http://localhost:5000/getfood/${id}`).then((res) => {
        console.log(res.data);
        setFood(res.data);
      });
    };
    getFood();
  }, []);
  return (
    <div className="flex h-screen w-screen justify-center xl:py-5">
      <div className="w-full bg-white drop-shadow-2xl xl:w-[700px] xl:rounded-lg">
        {/* detail */}
        <div className="flex w-full flex-col gap-5 ">
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
        </div>

        {/* button */}
        <div className="fixed bottom-10 w-full px-5 xl:w-[700px]">
          <Button size="large" variant="contained" fullWidth>
            เพิ่มไปยังตระกร้า - {food.food_price}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FoodDetail;
