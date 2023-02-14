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
router.get("/getorder", getOrder);
router.get("/getdeliveredorder", getDelivOrder);
router.get("/getoneorder/:id", getoneOrder);
router.patch("/updateorder", updateOrder);
router.delete("/deleteorder/:id", deleteOrder);

export default router;
