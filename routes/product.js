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

    // if (!product){
    //   res.json({
    //       msg: "no product"
    //   })
    // }else{
        res.json({
            msg: `successful get ${req.params.productId}$`,
            product: product
        })
    //   }

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

// 수정API
router.put("/:productId", async (req,res) => {

    const product = await productModel.findById(req.params.productId)

    if(product) {
        product.title = req.body.productTitle ? req.body.productTitle : product.title
        product.price = req.body.productPrice ? req.body.productPrice : product.price
        product.description = req.body.productDesc ? req.body.productDesc : product.description
        product.brand = req.body.productBrand ? req.body.productBrand : product.brand
        product.company = req.body.productCompany ? req.body.productCompany : product.company
        product.stock = req.body.productStock ? req.body.productStock : product.stock
    }

    const updateProduct = await product.save()
    res.json({
        msg : `update product at ${req.params.productId}`,
        product : updateProduct
    })
})


//전체 삭제
router.delete("/", async (req,res) => {

    await productModel.deleteMany()

    res.json({
        msg : "delete all products"
    })
})

//단건 삭제
router.delete("/:productId", async (req,res) => {

    await productModel.findByIdAndDelete(req.params.productId)

    res.json({
        msg : `delete & product at ${req.params.productId}`
    })
})

export default router;