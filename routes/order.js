import express from "express";
import orderModel from "../models/order.js";
const router = express.Router();


// order 전체 데이터 가져옴
router.get("/", async (req,res) => {

    const orders= await orderModel
        .find() // 전체조회
   //     .populate("product", ["title", "price"]) // 이건 title 이랑 price만 조회함
        .populate("product") // 이건 title 이랑 price만 조회함 (위아래 차이점 다시확인)


    res.json({
        msg :"order get all",
        orders
    })
})


// order 등록
router.post("/", async (req, res) => {

    const {product, qty, memo} = req.body;

    const newOrder =  new orderModel({
        product, qty, memo
    })

    const createdOrder = await newOrder.save();

    res.json({
        msg : "successful new order",
        order : createdOrder
    })
})




export default router;