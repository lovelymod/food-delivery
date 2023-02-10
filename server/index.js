import express from "express";
import cors from "cors";
import RestuarantRoute from "./routes/RestuarantRoute.js";
import FoodRoute from "./routes/FoodRoute.js";
import OrderRoute from "./routes/OrderRoute.js";

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(FoodRoute);
app.use(RestuarantRoute);
app.use(OrderRoute);

app.listen(5000, () => console.log("Server running at port 5000"));
