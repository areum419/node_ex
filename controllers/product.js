import productModel from "../models/product.js";

const getAllProducts = async (req,res) => {

    const products = await productModel.find(); // productModel에있는걸 찾겠다

    res.json({
        msg :"product get all",
        count: products.length,
        products: products.map(item => {
            return {
                id: item._id,
                title: item.title,
                price: item.price
            }
        }) // arry 데이터를 한번에 뿌려줄때 map이라는 함수씀
    })
}

const getProductById = async (req,res) => {

    const {productId} = req.params
    const product = await productModel.findById(productId);

    res.json({
        msg: `successful get ${productId}$`,
        product
    })
}

const productCreate = async(req,res) => {

    const {title, price, description, brand, company, stock} = req.body; //상수화 시킴 아래 주석 을 한번더 리팩토링

    const userInput = new productModel({
        title, price, description, brand, company, stock
    })

    const newProduct = await userInput.save();

    res.json({
        msg : "create & product",
        product : newProduct
    })
}

const productUpdate = async (req,res) => {

    const {title, price, description, brand, company, stock} = req.body;

    const {productId} = req.params
    const product = await productModel.findById(productId) // 상세조회하는 params확인하면됨

    if(product) {
        product.title = title ? title : product.title // product.title = >>>> 좌측은 db
        product.price = price ? price : product.price
        product.description = description ? description : product.description
        product.brand = brand ? brand : product.brand
        product.company = company ? company : product.company
        product.stock = stock ? stock : product.stock
    }

    const updateProduct = await product.save()
    res.json({
        msg : `update product at ${req.params.productId}`,
        product : updateProduct
    })
}

const productAllDelete = async (req,res) => {

    await productModel.deleteMany()

    res.json({
        msg : "delete all products"
    })
}

const productDelete = async (req,res) => {

    const product = await productModel.findById(productId)
    await productModel.findByIdAndDelete(productId)

    res.json({
        msg : `delete & product at ${productId}`
    })
}

export {
    getAllProducts,
    getProductById,
    productCreate,
    productUpdate,
    productAllDelete,
    productDelete
}