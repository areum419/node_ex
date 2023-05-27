//token 검증
import jwt from "jsonwebtoken"
import userModel from "../models/user.js";

// 미들웨어는 next가 꼭 필요
const protect = async (req, res, next) => {
    let token //지역변수 token
console.log("++++++++++++++++++++++++++++", token);
    // token이 어디에 담길지
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer') // Bearer 타입
    ) {
        try {
            token = req.headers.authorization.split(' ')[1]
            console.log("----------------------", token);
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY)

            req.user = await userModel.findById(decoded.userId)
            console.log("====================", decoded);

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