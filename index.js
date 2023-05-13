import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.get("/test", (req, res) => {
    res.json({
        msg :"test api"
    })
})

const port = 8080;

app.listen(port, console.log("서버시작"));