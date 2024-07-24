import express from "express";
import dotenv from "dotenv";
import connect from "./config/database.js";
import router from "./routes/user.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})

//connect to database
connect();

app.use("/api/v1", router);