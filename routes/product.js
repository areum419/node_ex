import express from "express";
import product from "../models/product.js";
import productModel from "../models/product.js";
const router = express.Router();

router.get("/", async (req,res) => {

    const products = await productModel.find(); // productModel에있는걸 찾겠다

    res.json({
        msg :"product get all",
        count: products.length,
      //  products:products,
        products: products.map(item => {
            return {
                id: item._id,
                title: item.title,
                price: item.price
            }
        }) // arry 데이터를 한번에 뿌려줄때 map이라는 함수씀
    })
})

// 상세데이터 가져오는 api
router.get("/:productId", async (req,res) => {

    const product = await productModel.findById(req.params.productId);

    if (!product){
      res.json({
          msg: "no product"
      })
    }else{
        res.json({
            msg: `successful get ${req.params.productId}$`,
            product: product
        })
    }

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