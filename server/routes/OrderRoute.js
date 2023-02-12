import express from "express";
import { createOrder, getOrder, getoneOrder, updateOrder, getDelivOrder } from "../controllers/OrderController.js";

const router = express.Router();

router.post("/createorder", createOrder);
router.get("/getorder", getOrder);
router.get("/getdeliveredorder", getDelivOrder);
router.get("/getoneorder/:id", getoneOrder);
router.patch("/updateorder", updateOrder);

export default router;
