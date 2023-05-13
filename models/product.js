// 1
import mongoose from "mongoose";

// 2
const productSchema = mongoose.Schema(
    // 5
    {
        title: {
            type: String,
            required: true
        },          // 제품명
        price: {
            type: Number,
            default: 0
        },          // 제품가격
        description: {
            type: String,
            min: 3,
            max: 300
        },    // 제품설명
        brand: {
            type: String
        },          // 브랜드
        company: String,        // 제조기업
        stock: {
            type: Number,
            default: 0
        }          // 재고량
    } ,
    {
        timestamps: true
    }
);

// 3
const productModel = mongoose.model("product", productSchema); //테이블명 , 스카마(db항목들)


// 4
export default productModel;