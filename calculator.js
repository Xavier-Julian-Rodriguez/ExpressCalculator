const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res, next) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;

    res.send(`The result is: ${result}`);
})

app.listen(3000, () => {
    console.log("The server is running on port 3000.")
})