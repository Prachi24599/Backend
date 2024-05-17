import mongoose from "mongoose";
//To access enviornment variables from .env file
require('dotenv').config()

const dbConnect = () => (mongoose.connect(process.env.DATABASE_URL))
.then(()=> {console.log("DB connection successful!")})
.catch((error) => {
    console.log("Issue in DB connection!");
    console.error(err);
    process.exit(1);
})

export default dbConnect;