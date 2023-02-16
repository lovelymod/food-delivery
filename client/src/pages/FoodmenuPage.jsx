// utill
import { Card, CardContent, CardActionArea, CardMedia, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

// hooks
import useFoods from "../hooks/useFoodbyRestaurant";

function FoodmenuPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const resID = location.state.resID;
  const foodsList = useFoods(`http://localhost:5000/getallfood/${resID}`);

  const onTap = (id) => {
    navigate("/home/fooddetail", { state: { foodID: id } });
  };

  return (
    <div className="grid h-fit w-full auto-rows-auto grid-cols-1 place-items-center gap-5 px-5 pb-20 pt-20 md:grid-cols-2 xl:md:grid-cols-4 xl:pb-5">
      {foodsList.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 300, boxShadow: "5", borderRadius: "25px", overflow: "auto" }}>
          <CardActionArea onClick={() => onTap(item.id)}>
            <CardMedia component="img" image={`/${item.food_logo}`} alt={item.food_name} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {item.food_name}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}
              >
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
  );
}

export default FoodmenuPage;
