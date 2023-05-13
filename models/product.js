// 1
import mongoose from "mongoose";

// 2
const productSchema = mongoose.Schema(
    // 5
    {
        title: String,          // 제품명
        price: Number,          // 제품가격
        description: String,    // 제품설명
        brand: String,          // 브랜드
        company: String,        // 제조기업
        stock: Number          // 재고량
    } ,
    {
        timestamps: true
    }
);

// 3
const productModel = mongoose.model("product", productSchema); //테이블명 , 스카마(db항목들)


// 4
export default productModel;