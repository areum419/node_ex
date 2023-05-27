import express from "express";
import orderModel from "../models/order.js";
import {getAllOrder, OrderCreate} from "../controllers/order.js";
import {admin, protect} from "../middleware/authMiddleware.js";
const router = express.Router();


// order 전체 데이터 가져옴
router.get("/", protect, admin, getAllOrder)

//상세정보
router.get("/:orderId", protect, async (req,res) => {

    const {orderId} = req.params

    const order = await orderModel
        .findById(orderId)
        .populate("product")
        .populate("user")

    console.log("$$", order.user)
    console.log("##", req.user._id)

                //req.user._id 로그인한사람
    if(order.user._id.toString() !== req.user._id.toString()){
        return res.json({
            msg: 'you are not order'
        })
    }

    res.json({
        msg: 'get order info',
        order
    })
})
// order 등록
router.post("/", protect, OrderCreate)




export default router;