import express from 'express';
//const express = require("express");
const app = express();

//load config from env
import dotenv from 'dotenv';
dotenv.config();
// require("dotenv").config(); - old approach

const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for todo API
import Todo from "./routes/Todo";
//mount the todo API routes
app.use("/api/v1", Todo);

app.listen(PORT, () => {
    console.log(`Server strated successfully at ${PORT}`);
})

//connect to the database
import dbConnect from './config/database';
dbConnect();

//default route
app.get("/", (req, res) => {
    res.send("<h1>This is Homepage!</h1>")
})