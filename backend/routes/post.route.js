import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import {createPost} from "../controllers/post.controller.js"

const postRouter = express.Router();

postRouter.post("/create-post", isAuthenticated, createPost);
postRouter.get("/feed", isAuthenticated, getFeedPosts);


export default postRouter;