import express from "express";
import userModel from "../models/user.js";

const router = express.Router();

// 회원가입 (데이터 등록)
router.post("/", async (req, res) => {

    // 사용자 입력값
    const {username, password, email, phone, adress} =req.body;

    const newUser = new userModel({
        username, password, email, phone, adress
    })

    const createdUser = await newUser.save();

    res.json({
        msg: "create & user",
        user: createdUser
    })
})

// 로그인은 post 사용
router.post("/login", async (req, res) => {

    res.json({
        msg: "Login"
    })
})


//개인정보조회
router.get("/", async (req,res) => {

    res.json({
        msg: "select"
    })
})




export default router;