import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
import connectdb from "./db/connectdb.js";
import userrouter from "./routes/user.js";
import authrouter from "./routes/auth.js";
import productrouter from "./routes/product.js"
import cartrouter from "./routes/cart.js"
import orderrouter from "./routes/order.js"
import cors from 'cors'
const app = express()

const port = process.env.PORT 

connectdb(process.env.MONGO_URL)
app.use(cors());
app.use(express.json())
app.use("/api/auth",authrouter)
app.use("/api/users",userrouter)
app.use("/api/products",productrouter)
app.use("/api/cart",cartrouter)
app.use("/api/order",orderrouter)
app.listen(port,()=>{
    console.log("request send")
})