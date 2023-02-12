import AppBarr from "../components/Appbar";
import SideBar from "../components/SizeBar";

import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Ordered() {
  const navigate = useNavigate();
  const [navOpen, setnavOpen] = useState(false);
  const [orderList, setOrderList] = useState([]);

  const orderAgain = (id) => {
    navigate("/fooddetail", { state: { id: id } });
  };

  useEffect(() => {
    const getOrder = async () => {
      await axios.get("http://localhost:5000/getdeliveredorder").then((res) => {
        setOrderList(res.data);
      });
    };

    getOrder();
  }, []);
  return (
    <div className="flex h-screen w-screen justify-center xl:py-5">
      <AppBarr navOpen={navOpen} setnavOpen={setnavOpen} />
      <SideBar navOpen={navOpen} setnavOpen={setnavOpen} />
      <div className="flex h-fit w-full flex-col gap-5 px-2 pt-20 xl:w-[700px]">
        {orderList.map((item) => (
          <Card key={item.id} sx={{ boxShadow: "5", borderRadius: "25px", overflow: "auto" }}>
            <CardActionArea onClick={() => orderAgain(item.food_id)} sx={{ display: "flex" }}>
              <CardMedia component="img" image={item.food_logo} alt={item.food_name} sx={{ width: 150 }} />
              <CardContent sx={{ flexGrow: "1" }}>
                <Typography gutterBottom variant="body1" component="div">
                  {item.food_name}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  ฿ {item.total}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  {item.status}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Ordered;
