import express from "express";
import product from "../models/product.js";
import productModel from "../models/product.js";
const router = express.Router();

router.get("/", (req,res) => {
    res.json({
        msg :"product get all"
    })
})

router.post("/", async(req,res) => {

    // const userInput = {
    //     name : req.body.produtName,
    //     price : req.body.produtPrice
    // }

    const userInput = new productModel({
        title: req.body.productTitle,
        price: req.body.productPrice,
        description: req.body.productDesc,
        brand: req.body.productBrand,
        company: req.body.productCompany,
        stock: req.body.productStock
    })

    const newProduct = await userInput.save();


    res.json({
        msg : "create & product",
        product : newProduct
    })
})

router.put("/", (req,res) => {
    res.json({
        msg : "update & product"
    })
})

router.delete("/", (req,res) => {
    res.json({
        msg : "delete & product"
    })
})

export default router;