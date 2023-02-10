import AppBarr from "../components/Appbar";
import SideBar from "../components/SizeBar";

import { Card, CardContent, CardActionArea, CardMedia, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function BuckgetPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [navOpen, setnavOpen] = useState(false);
  const [orderList, setOrderList] = useState([]);
  console.log("🚀 ~ file: BuckgetPage.jsx:13 ~ orderList", orderList);

  useEffect(() => {
    const getOrder = async () => {
      await axios.get("http://localhost:5000/getorder").then((res) => {
        setOrderList(res.data);
      });
    };

    getOrder();
  }, []);

  return (
    <div className="flex h-screen w-screen justify-center xl:py-5">
      <AppBarr navOpen={navOpen} setnavOpen={setnavOpen} />
      <SideBar navOpen={navOpen} setnavOpen={setnavOpen} />
      <div className="flex h-fit w-full flex-col gap-5 px-2 pt-20">
        {orderList.map((item) => (
          <Card key={item.id} sx={{ boxShadow: "5", borderRadius: "25px", overflow: "auto" }}>
            <CardActionArea sx={{ display: "flex" }}>
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

export default BuckgetPage;
