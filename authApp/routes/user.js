import express from "express";
const router = express.Router();

import {login, signUp} from "../controller/auth.js";
import {auth, isStudent, isAdmin} from "../middlewares/auth.js"

router.post("/login", login);
router.post("/signUp", signUp);

//Protected Routes
router.get("/test", auth, (req, res) => {
    res.json({
        success : true,
        message : "Welcome to the Protected routes for TEST "
    })
})

//When request comes to /Student API routes, first auth middleware will check if user is authenticated, then 
//isStudent middleware will check if the user has role student or not
router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success : true,
        message : "Welcome to protected route for Students"
    })
})

router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success : true,
        message : "Welcome to protected route for Admin"
    })
})

export default router;