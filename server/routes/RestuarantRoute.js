import express from "express";
import { getRestuarants, createRestuarant } from "../controllers/RestaurantController.js";

const router = express.Router();

router.get("/getrestuarants", getRestuarants);
router.post("/addrestuarants", createRestuarant);

export default router;
