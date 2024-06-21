const express = require("express");
const app = express();
port = 3000;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})

//middleware - It is used to log incoming request, authenticate, parse data, error handing
// express.json() - parse json data
app.use(express.json())