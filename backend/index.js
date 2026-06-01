import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js"

const app = express()
let PORT = process.env.PORT || 5000

app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);


app.listen(PORT,()=>{
  connectDB()
  console.log(`server started at port ${PORT}`) 
})