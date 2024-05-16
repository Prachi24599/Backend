// 1. create a folder
// 2. move into that folder
// 3. npm init -y
// 4. open folder using VSCode
// 5. npm i express
// 6. create server.js
// 7. RUN - node server.js

//Server Instantiate
const express = require('express');
const app = express();

//activate server on 3000 port
app.listen(5000, () => {
    console.log("Server started at port no. 5000")
})
