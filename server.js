var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require("./controllers/burgers_controller");
app.use(router);

app.listen(PORT, function(){
    console.log("Server is listening on: http://localhost:" + PORT);
});