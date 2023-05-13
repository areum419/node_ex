import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

import connectDB from "./config/database.js"; // 자동완성안됨

import productRoute from "./routes/product.js";
import orderRouter from "./routes/order.js";

const app = express();

connectDB();

app.use(cors());
app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use("/product", productRoute);
app.use("/order", orderRouter);

app.get("/test", (req, res) => {
    res.json({
        msg :"test api"
    })
})

//const port = 8080;
//app.listen(port, console.log("서버시작"));

const port = process.env.PORT || 9090;
app.listen(port, console.log(`server started at ${port}`));