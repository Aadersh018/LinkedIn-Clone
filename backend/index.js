import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js"
import authRouter from "./routes/auth.route.js"

const app = express()
let PORT = process.env.PORT || 5000

app.use(express.json())
app.use("/api/auth", authRouter)

app.listen(PORT,()=>{
  connectDB()
  console.log(`server started at port ${PORT}`) 
})