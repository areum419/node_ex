import express from "express";
const router = express.Router();

router.get("/all", (req,res) => {
    res.json({
        msg :"product get all"
    })
})

router.post("/create", (req,res) => {

    const userInput = {
        name : req.body.produtName,
        price : req.body.produtPrice
    }

    res.json({
        msg : "create & product",
        product : userInput
    })
})

router.put("/update", (req,res) => {
    res.json({
        msg : "update & product"
    })
})

router.delete("/delete", (req,res) => {
    res.json({
        msg : "delete & product"
    })
})

export default router;