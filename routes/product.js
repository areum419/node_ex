import express from "express";
import product from "../models/product.js";
import productModel from "../models/product.js";
import {
    getAllProducts,
    getProductById,
    productAllDelete,
    productCreate,
    productDelete,
    productUpdate
} from "../controllers/product.js";
const router = express.Router();

// 전체조회
router.get("/", getAllProducts)

// 상세데이터 가져오는 api
router.get("/:productId", getProductById)

// 생성
router.post("/", productCreate)

// 수정API
router.put("/:productId", productUpdate)


//전체 삭제
router.delete("/", productAllDelete)

//단건 삭제
router.delete("/:productId", productDelete)

export default router;