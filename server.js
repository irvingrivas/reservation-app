var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

var PORT = 9001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tables = [{
    id: "fish",
    person: "David",
    email: "foo@foo.com",
    phone: "1234567891"
},
{
    id: "fish2",
    person: "David",
    email: "foo@foo.com",
    phone: "1234567891"
}];

var waitlist = [{
    id: "fish3",
    person: "David",
    email: "foo@foo.com",
    phone: "1234567891"
}];


// Table API
app.get("/api/tables", function(req, res){
    return res.json(tables);
})

// Waitlist API
app.get("/api/waitlist", function(req, res){
    return res.json(waitlist);
})

// Home Route
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/home.html"));
})

// Make Route
app.get("/make", function(req,res){
    res.sendFile(path.join(__dirname, "/make.html"));
})

// View Route
app.get("/view", function(req,res){
    res.sendFile(path.join(__dirname, "/view.html"));
})


app.listen(PORT, function() {
    console.log("This is running on PORT: " + PORT);
});