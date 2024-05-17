import mongoose from "mongoose";

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL);
}