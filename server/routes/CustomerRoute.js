import express from "express";
import { createCustomer, loginCustumer, getCustomer } from "../controllers/CustomerController.js";

const router = express.Router();

router.post("/addcustomer", createCustomer);
router.post("/login", loginCustumer);
router.get("/getcustomer/:id", getCustomer);

export default router;
