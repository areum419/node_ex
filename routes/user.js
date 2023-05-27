import express from "express";
import userModel from "../models/user.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {getAllUsers, getProfil, loginHandling, singupHandling} from "../controllers/user.js";
import {protect} from "../middleware/authMiddleware.js";
import productModel from "../models/product.js";


const router = express.Router();

// 회원가입 (데이터 등록)
router.post("/singup", singupHandling)

// 로그인은 post 사용
router.post("/login", loginHandling)

//개인정보조회
router.get("/", protect, getProfil)
// 2번쨰 파라미터 함수 호출이

//사용자 전체조회
router.get("/all", protect, getAllUsers)


export default router;