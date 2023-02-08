const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000, () => {
    console.log("The server is running on port 3000.")
})