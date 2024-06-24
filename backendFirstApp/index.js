const express = require("express");
const app = express();
port = 3000;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})

//middleware - It is used to log incoming request, authenticate, parse data, error handing
// express.json() - parse json data
app.use(express.json())

app.get("/", (req, res) => {
    res.send("This is Homepage.");
})

//post request are testing using postman
app.post("/cars", (req, res) => {
    res.send("This is post req")
})