import express from "express";
import { updateProfile } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const userRouter = express.Router();

userRouter.put("/update-profile", isAuthenticated, updateProfile);

export default userRouter;