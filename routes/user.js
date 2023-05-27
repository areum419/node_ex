import express from "express";
import userModel from "../models/user.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {getProfil, loginHandling, singupHandling} from "../controllers/user.js";


const router = express.Router();

// 회원가입 (데이터 등록)
router.post("/singup", singupHandling)

// 로그인은 post 사용
router.post("/login", loginHandling)


//개인정보조회
router.get("/", getProfil)




export default router;