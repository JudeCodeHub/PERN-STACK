import express from "express";
import { createProduct, getAllProducts } from "../controllers/productControlller.js";

const router = express.Router();

router.get("/", getAllProducts) 

router.post("/", createProduct)



export default router;