// auth, isStudent, isAdmin
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

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
            const decode = jwt.verify(process.env.JWT_SECRET);
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

export default auth;