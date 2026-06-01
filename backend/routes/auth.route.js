import express from "express"
import { getMe, login, register } from "../controllers/auth.controller.js"
import { isAuthenticated } from "../middlewares/isAuthenticated.js"

const authRouter = express.Router()

authRouter.post("/register", register)
authRouter.post("/login", login)
authRouter.get("/me", isAuthenticated, getMe)


export default authRouter;