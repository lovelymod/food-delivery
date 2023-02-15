import express from "express";
import { createCustomer, loginCustumer } from "../controllers/CustomerController.js";

const router = express.Router();

router.post("/addcustomer", createCustomer);
router.post("/login", loginCustumer);

export default router;
