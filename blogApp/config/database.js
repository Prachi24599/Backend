import mongoose from "mongoose";
import dotenv from dotenv;

dotenv.config();

const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database Connected Successfully!");
    }catch{
        console.log("Database connection failed", error);
        process.exit(1);
    }
}

export default dbConnect;