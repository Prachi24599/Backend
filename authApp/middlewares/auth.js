// auth, isStudent, isAdmin
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

//middleware invokes by stopping the request in between
const auth = (req, res, next) => {
    try{
        //Extract JWT tokem
        //3 ways to access token - request body, cookies, and headers
        
        const token = req.body.token;
        if(!token){
            return res.status(401).json({
                success : false,
                message : "Token Missing"
            })
        }

        //Verify the token
        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
        }catch(error){
            return res.status(401).json({
                success : false,
                message : "Token is invalid"
            })
        }
        next();
    }catch(error) {
        return res.status(401).json({
            success : false,
            message : "Something went wrong while verifying the token"
        })
    }
}

const isStudent = (req, res, next) => {
    try{
        if(req.body.token !== "Student"){
            return res.status(401).json({
                success : false,
                message : "This is a protected route for students"
            })
        } 
        next();  
    }catch(error){
        return res.status(500).json({
            success : false,
            message : "User role is not matching"
        })
    }   
}

const isAdmin = (req, res, next) => {
    try{
        if(req.body.token !== "Admin"){
            return res.status(401).json({
                success : false,
                message : "This is a protected route for admin"
            })
        } 
        next();  
    }catch(error){
        return res.status(500).json({
            success : false,
            message : "User role is not matching"
        })
    }   
}

export {auth, isStudent, isAdmin};