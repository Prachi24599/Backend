import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URL)
    .then((res) => {console.log("Database connection successful!")})
    .catch((err) => {
        console.log("Error while connecting database!", err);
        process.exit(1);
    })
}

export default connect;