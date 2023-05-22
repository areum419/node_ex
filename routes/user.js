import express from "express";
import userModel from "../models/user.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// 회원가입 (데이터 등록)
router.post("/", async (req, res) => {

    // 사용자 입력값
    const {username, password, email, phone, adress} =req.body;

    // 1. 이메일 유무 체크
    const user = await userModel.findOne({email})
    if(user) {
        return res.json({
            msg: "회원가입되어있음"
        })
    }

    // 2. 패스워드 암호화
    const hashedPw = await bcrypt.hash(password, 10 )

    // 3. return

    const newUser = new userModel({
        username,
        password: hashedPw,
        email,
        phone,
        adress
    })

    const createdUser = await newUser.save();

    res.json({
        msg: "create & user",
        user: createdUser
    })
})

// 로그인은 post 사용
router.post("/login", async (req, res) => {

    // 1. 이메일유무 체크
    const {email, password} = req.body;
    const user = await userModel.findOne({email})

    if(!user) {
        return res.json({
           msg: "회원가입 해주세요"
        })
    }
//    console.log(user);

    // 2. 패스워드매칭 --> return jwt (json web token)
    const mach = await bcrypt.compare(password, user.password) // 사용자 입력값, 비교되는 값

    const token = await jwt.sign(
        // 1. 어떤정보를 암호화하는지 (object 형태로 저장 {}) ,
        // 2. 암호화 key값
        // 3. 유효기간
        {userId: user._id},
        process.env.ACCESS_TOKEN_KEY,
        {expiresIn: "10m"}
        //db상 id값이고, .env 에 추가한 토큰값이고, 유효기간은 10분으로 설정
    )

    if(!mach) {
        return res.json({
            msg : "패스워드 재 확인"
        })
    }

    res.json({
        msg: "Login",
        token
    })
    // 로그인여부는 token으로 확인할 수 있음
})


//개인정보조회
router.get("/", async (req,res) => {

    res.json({
        msg: "select"
    })
})




export default router;