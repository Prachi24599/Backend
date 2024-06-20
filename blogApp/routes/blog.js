import express from "express";
const router = express.Router();
import createPost from "../controllers/postController.js"
import commentController from "../controllers/commentController.js"

router.post("/posts/create", createPost)
router.post("/comment/create", commentController);

export default router;