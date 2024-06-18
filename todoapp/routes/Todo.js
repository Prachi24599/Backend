import express from 'express';
const router = express.Router();
//Import Controller
import createTodo from "../controllers/createTodo.js";
import {getTodo, getTodoById} from "../controllers/getTodo.js";
import updateTodo from "../controllers/updateTodo.js";

//define API routes
router.post("/createTodo", createTodo); 
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);

export default router;