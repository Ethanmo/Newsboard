var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 3000;
var app = express();
var router = express.Router();
require("./config/routes")(router);
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(router);
app.listen(PORT,function(){
    console.log("Listening on port:" + PORT);
});

var exphbs = require("express-handlebars")
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");



var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true }, function(error){
    if (error) {
        console.log(error);
    } else {
        console.log("mongoose connection is successful");
    }
});

