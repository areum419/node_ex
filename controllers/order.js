import orderModel from "../models/order.js";

const getAllOrder = async (req,res) => {

    const orders= await orderModel
        .find() // 전체조회
        .populate("product") // 이건 title 이랑 price만 조회함 (위아래 차이점 다시확인)
        .populate("user") // post man > order 전체조회

    res.json({
        msg :"order get all",
        orders
    })
}

const OrderCreate = async (req, res) => {

    const {product, qty, memo} = req.body;

    const newOrder =  new orderModel({
        product, qty, memo, user: req.user._id
    })

    const createdOrder = await newOrder.save();

    res.json({
        msg : "successful new order",
        order : createdOrder
    })
}


export {getAllOrder
    ,OrderCreate}