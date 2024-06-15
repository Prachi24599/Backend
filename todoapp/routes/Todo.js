import express from 'express';
const router = express.Router();
//Import Controller
import createTodo from "../controllers/createTodo.js";

//define API routes
router.post("/createTodo", createTodo); 

export default router;