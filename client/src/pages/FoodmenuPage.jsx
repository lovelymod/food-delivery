import AppBarr from "../components/Appbar";
import SideBar from "../components/SizeBar";

import axios from "axios";
import { Card, CardContent, CardActionArea, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function FoodmenuPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [navOpen, setnavOpen] = useState(false);
  const [foodslist, setFoodsList] = useState([]);

  const onTap = (id) => {
    navigate("/fooddetail", { state: { id: id } });
  };

  useEffect(() => {
    const getFoods = async () => {
      const id = location.state.id;
      await axios.get(`http://localhost:5000/getallfood/${id}`).then((res) => {
        console.log(res.data);
        setFoodsList(res.data);
      });
    };

    getFoods();
  }, []);
  return (
    <div className="flex h-screen w-screen flex-col">
      <AppBarr navOpen={navOpen} setnavOpen={setnavOpen} />
      <SideBar navOpen={navOpen} setnavOpen={setnavOpen} />

      <div className="grid h-fit w-full auto-rows-auto grid-cols-1 place-items-center gap-5 px-5 pt-20 pb-5 md:grid-cols-2 xl:md:grid-cols-4">
        {foodslist.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 300, boxShadow: "5", borderRadius: "25px", overflow: "auto" }}>
            <CardActionArea onClick={() => onTap(item.id)}>
              <CardMedia component="img" image={item.food_logo} alt={item.food_name} />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {item.food_name}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                  {item.description.split(",").join(" , ")}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  ฿ {item.food_price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default FoodmenuPage;
