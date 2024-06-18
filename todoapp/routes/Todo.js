import express from 'express';
const router = express.Router();
//Import Controller
import createTodo from "../controllers/createTodo.js";
import getTodo from "../controllers/getTodo.js";

//define API routes
router.post("/createTodo", createTodo); 
router.get("/getTodos", getTodo);

export default router;