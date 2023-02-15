import express from "express";
import {
  createOrder,
  getOrder,
  getoneOrder,
  updateOrder,
  getDelivOrder,
  deleteOrder,
} from "../controllers/OrderController.js";

const router = express.Router();

router.post("/createorder", createOrder);
router.get("/getorder/:id", getOrder);
router.get("/getdeliveredorder/:id", getDelivOrder);
router.get("/getoneorder/:customer_id/:food_id", getoneOrder);
router.patch("/updateorder", updateOrder);
router.delete("/deleteorder/:id", deleteOrder);

export default router;
