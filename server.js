const express = require("express");
const bodyParser = require("body-parser");
const { ppid } = require("process");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var BMI = weight / (height * height);

    res.send("BMI : " + BMI);

});

app.get("/simple", function(req, res) {
    res.sendFile(__dirname + "/simple.html");
});
app.post("/simple", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("Sum of both numbers is " + result);

});

app.listen(3000, function() {
    console.log("Server started ");
});