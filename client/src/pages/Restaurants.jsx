// utill
import { Card, CardContent, CardActionArea, CardMedia, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

// hooks
import useRestaurants from "../hooks/useRestaurants";

function Restaurants() {
  const navigate = useNavigate();
  const store = useRestaurants("http://localhost:5000/getrestuarants");

  const onTapb = (id) => {
    navigate("/home/foodmenu", { state: { id: id } });
  };

  return (
    <div className="grid h-fit w-full auto-rows-auto grid-cols-1 place-items-center gap-5 pb-20 pt-20 md:grid-cols-2 xl:grid-cols-4 xl:pb-5">
      {store.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 300, boxShadow: "5", borderRadius: "25px" }}>
          <CardActionArea onClick={() => onTapb(item.id)}>
            <CardMedia component="img" image={`/${item.restaurant_logo}`} alt={item.restaurant_name} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.restaurant_name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default Restaurants;
