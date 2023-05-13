import express from "express";
import orderModel from "../models/order.js";
const router = express.Router();

router.get("/", (req,res) => {
    res.json({
        msg :"order get all"
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