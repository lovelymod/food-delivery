import express from "express";
import { getRestuarants, createRestuarant, getRestuarantsbyID } from "../controllers/RestaurantController.js";

const router = express.Router();

router.get("/getrestuarants", getRestuarants);
router.get("/getresbyid/:id", getRestuarantsbyID);
router.post("/addrestuarants", createRestuarant);

export default router;
