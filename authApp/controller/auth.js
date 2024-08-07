import bcrypt from "bcrypt";
import User from "../model/user.js"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const signUp = async (req, res) => {
    try{
        //get data
        const {name, email, password, role} = req.body;
        //check if user already exists
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success : false,
                message : "User already exists"
            })
        }

        //Secure Password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch(err) {
            return res.status(500).json({
                success : false,
                message : "Error in hashing password"
            });
        }

        //Create entry for user
        const user = await User.create({
            name, email, password : hashedPassword, role
        })

        return res.status(200).json({
            success : true,
            data : user,
            message : "User created successfully!"
        })
    }catch(error){
        console.error(error);
        return res.status(500).json({
            success : false,
            message : "User cannot be registered, Please try again later"
        })
    }
}

const login = async (req, res) => {
    try{
        //data fetch
        const {email, password} = req.body;
        //validation on email and password
        if(!email || !password) {
            return res.status(400).json({
                success : false,
                message : "Please fill all the details carefully"
            })
        }
        //check for registered user
        let user = await User.findOne({email});
        //If not registered user
        if(!user){
            return res.status(401).json({
                success : false,
                password : "User is not registered"
            })
        }
        const payload = {
            email : user.email,
            id : user._id,
            role : user.role
        }
        //verify password and generate a JWT token
        if(await bcrypt.compare(password, user?.password)){
            //password match
            //create jwt token
            let token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn : '2h'}); 
            user = user.toObject();
            user.token = token;
            //we dont need to send password to user so making it undefined in object
            user.password = undefined;

            //send the jwt token through cookie to client
            const options = {
                expires : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly : true
            }
            //sending cookie to client
            res.cookie("token", token, options).status(200).json({
                success : true,
                token,
                user,
                message : "User logged in successfully"
            })
        }else {
            //passwords do not match
            return res.status(403).json({
                success : false,
                password : "Passwords Incorrect"
            })
        }


    }catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "login failure"
        })
    }
}
export {signUp, login};