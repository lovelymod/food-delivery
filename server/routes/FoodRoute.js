import express from "express";
import { createFood, getAllFoodByID, getFoodByID, getFoodsinOrder } from "../controllers/FoodController.js";

const router = express.Router();

router.get("/getallfood/:id", getAllFoodByID);
router.get("/getfood/:id", getFoodByID);
router.get("/getfoodinorder/:id", getFoodsinOrder);
router.post("/addfood", createFood);

export default router;
