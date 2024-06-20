import express from "express";
const router = express.Router();
import {createPost, getAllPosts} from "../controllers/postController.js"
import commentController from "../controllers/commentController.js"

router.post("/posts/create", createPost)
router.post("/comment/create", commentController);
router.get("/posts", getAllPosts);

export default router;