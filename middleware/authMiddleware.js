//token 검증
import jwt from "jsonwebtoken"
import userModel from "../models/user.js";

// 미들웨어는 next가 꼭 필요
const protect = async (req, res, next) => {
    let token //지역변수 token

    // token이 어디에 담길지
    // Bearer 는 타입이라 생각하면됨
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY)

            req.user = await userModel.findById(decoded.userId)

            next()
        } catch (error) {
            res.json({
                msg: 'not authorizde, token nono~'
            })
        }
    }
    if (!token){
        res.json({
            msg: 'not autorization, no token'
        })
    }
}

export {protect}