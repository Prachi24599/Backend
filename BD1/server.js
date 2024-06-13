// 1. create a folder
// 2. move into that folder
// 3. npm init -y
// 4. open folder using VSCode
// 5. npm i express - downloads the node packages required for express
// 6. create server.js
// 7. RUN - node server.js

//Server Instantiate
const express = require('express');
const app = express();

//Used to parse req.body in express
const bodyParser = require("body-parser");
//Specifically parse json data and add it to request.body object -> mainly used in case of PUT or POST
app.use(bodyParser.json())

//activate server on 3000 port
app.listen(5000, () => {
    console.log("Server started at port no. 5000")
})

//Routes
app.get('/', (request, response) => {
    response.send("Hello Beckend Dev!")
})

app.post('/api/cars', (request, response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted successfully!");
})

const mongoose = require('mongoose');

//Configuration required for old version
// mongoose.connect('mongodb://localhost:27017/myDatabase', {
//     useNewUrlParser : true,
//     useUnifiedTopology : true
// })

mongoose.connect('mongodb://localhost:27017/Cars')
.then(() => {console.log("Connection Successful!")})
.catch((err) => {console.log("Received an Error!")})