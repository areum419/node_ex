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
import {admin, protect} from "../middleware/authMiddleware.js";
const router = express.Router();

// 전체조회
router.get("/", getAllProducts)

// 상세데이터 가져오는 api
router.get("/:productId", protect, getProductById)

// 생성
router.post("/", protect, admin, productCreate)

// 수정API
router.put("/:productId", protect, admin, productUpdate)

//전체 삭제
router.delete("/", protect, admin, productAllDelete)

//단건 삭제
router.delete("/:productId", protect, admin, productDelete)

export default router;