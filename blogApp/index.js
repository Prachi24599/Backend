import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})

//middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send('<h1>This is the Homepage!</h1>');
})