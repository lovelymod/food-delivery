import AppBarr from "../components/Appbar";
import SideBar from "../components/SizeBar";

import axios from "axios";
import { Card, CardContent, CardActionArea, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [navOpen, setnavOpen] = useState(false);
  const [store, setStore] = useState([]);

  const onTapb = (id) => {
    navigate("/foodmenu", { state: { id: id } });
  };

  useEffect(() => {
    const getRestaurant = async () => {
      await axios.get("http://localhost:5000/getrestuarants").then((res) => {
        setStore(res.data);
      });
    };

    getRestaurant();
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col">
      <AppBarr navOpen={navOpen} setnavOpen={setnavOpen} />
      <SideBar navOpen={navOpen} setnavOpen={setnavOpen} />

      <div className="grid h-fit w-full auto-rows-auto grid-cols-1 place-items-center gap-5 pt-20 pb-5 md:grid-cols-2 xl:md:grid-cols-4">
        {store.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 300, boxShadow: "5", borderRadius: "25px" }}>
            <CardActionArea onClick={() => onTapb(item.id)}>
              <CardMedia component="img" image={item.restaurant_logo} alt={item.restaurant_name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.restaurant_name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
