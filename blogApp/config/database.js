import mongoose from "mongoose";
import dotenv from dotenv;

dotenv.config();

const dbConnect = async () => {
    await mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("Database Connected Successfully!"))
    .catch((err) => {
        console.log("Database connection failed", err);
        process.exit(1);
    })
}

export default dbConnect;