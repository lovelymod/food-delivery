// utill
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// hooks
import useOrdered from "../hooks/useOrdered";

function Ordered() {
  const navigate = useNavigate();
  const orderedList = useOrdered("http://localhost:5000/getdeliveredorder");
  orderedList.sort((a, b) => b.id - a.id);
  const orderAgain = (id) => {
    navigate("/home/fooddetail", { state: { id: id } });
  };

  return (
    <div className="flex h-fit w-full flex-col gap-5 px-2 pb-20 pt-20 xl:w-[700px] xl:pb-5">
      {orderedList.map((item) => (
        <Card key={item.id} sx={{ boxShadow: "5", borderRadius: "25px" }}>
          <CardActionArea onClick={() => orderAgain(item.food_id)} sx={{ display: "flex" }}>
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

export default Ordered;
