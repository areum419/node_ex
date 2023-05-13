import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    {},
    {
        timestamps: true
    }
);

const orderModel = mongoose.model("order", orderSchema);

export default orderModel;