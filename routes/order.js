import express from "express";
const router = express.Router();

router.get("/", (req,res) => {
    res.json({
        msg :"order get all"
    })
})

router.post("/", (req, res) => {
    res.json({
        msg : "order post"
    })
})




export default router;