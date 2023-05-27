import express from "express";
import orderModel from "../models/order.js";
import {getAllOrder, OrderCreate} from "../controllers/order.js";
const router = express.Router();


// order 전체 데이터 가져옴
router.get("/", getAllOrder)


// order 등록
router.post("/", OrderCreate)




export default router;