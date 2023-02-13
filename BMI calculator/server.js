// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.get("/", (req, res) => {   
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {  
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The Result of The Calculation is " + result);
});

app.get("/bmiCalculator", (req, res) => { 
    res.sendFile(__dirname + "/bmiCalculator.html");  
});

app.post("/bmiCalculator", (req, res) => { 
    var Weight = parseFloat(req.body.Weight);
    var Height = parseFloat(req.body.Height);
    var bmi = Math.round(Weight / (Height * Height));  
    res.send("Your BMI Calculation is " + bmi);
});

app.listen(7000, () => {
    console.log("Server Is Started On Port 7000 ");
});