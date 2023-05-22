import mongoose from "mongoose";

const userSchema = mongoose.Schema(

    // 회원가입 할때 필요하는 정보
    // id, pw, email, pn, adress
    {
        email : {
            type: String,
            required: true,
            unique: true
        }, // required 필수값인지 여부
        username: {
            type: String,
            required: true
        },
        password: {
            type: Number
        },
        phone: {
           type: Number
        },
        adress: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const userModel = mongoose.model("user", userSchema)

export default userModel;