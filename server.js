var express = require("express");
var path = require("path");
var app = express();

var PORT = 9001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(PORT, function() {
    console.log("This is running on PORT: " + PORT);
});