import express from "express";
import cors from "cors";
import RestuarantRoute from "./routes/RestuarantRoute.js";
import FoodRoute from "./routes/FoodRoute.js";
import OrderRoute from "./routes/OrderRoute.js";
import CustomerRoute from "./routes/CustomerRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(FoodRoute);
app.use(RestuarantRoute);
app.use(OrderRoute);
app.use(CustomerRoute);

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
