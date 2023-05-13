import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    {
        //구매하고자 하는 대상
        //ref는 어느 테이블에잇는 오브젝트 형태인지
        product:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
            required: true
        },
        qty:{
            type: Number,
            default: 1
        },
        memo:{
            type: String
        }

    },
    {
        timestamps: true
    }
);

const orderModel = mongoose.model("order", orderSchema);

export default orderModel;