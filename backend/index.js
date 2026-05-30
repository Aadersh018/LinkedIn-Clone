import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js"

const app = express()
let PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
  connectDB()
  console.log(`server started at port ${PORT}`) 
})