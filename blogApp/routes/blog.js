import express from "express";
const router = express.Router();
import {createPost, getAllPosts} from "../controllers/postController.js"
import {commentController, getAllComments} from "../controllers/commentController.js"
import { likePost, unlikePost } from "../controllers/likeController.js";

router.post("/posts/create", createPost)
router.post("/comment/create", commentController);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);
router.get("/comments", getAllComments);

export default router;