import express from express;
import router from express.router;
//Import Controller
import createTodo from "../controllers/createTodo";

//define API routes
router.post("/createTodo", createTodo); 