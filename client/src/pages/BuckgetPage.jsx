// utill
import { Card, CardContent, CardActionArea, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// hooks
import useGetOrder from "../hooks/useGetOrder";

function BuckgetPage() {
  const navigate = useNavigate();
  const orderList = useGetOrder("http://localhost:5000/getorder").sort((a, b) => b.id - a.id);

  const placingOrder = (item) => {
    navigate("/home/placing", { state: { item: item } });
  };

  return (
    <div className="flex h-fit w-full flex-col gap-5 px-2 pb-20 pt-20 xl:w-[700px] xl:pb-5">
      {orderList.map((item) => (
        <Card key={item.id} sx={{ boxShadow: "5", borderRadius: "25px", overflow: "auto" }}>
          <CardActionArea onClick={() => placingOrder(item)} sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              image={`/${item.food_logo}`}
              alt={item.food_name}
              sx={{ width: 125, height: 125, objectFit: "contain" }}
            />
            <CardContent sx={{ flexGrow: "1", overflow: "hidden" }}>
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}
              >
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
  );
}

export default BuckgetPage;
