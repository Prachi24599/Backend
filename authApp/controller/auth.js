import bcrypt from "bcrypt";
import User from "../model/user.js"

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
export default signUp;