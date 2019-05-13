var express = require("express");

var PORT = process.env.PORT || 8080;

var burgerApp = express();


burgerApp.use(express.static("public"));

burgerApp.use(express.urlencoded({ extended: true }));
burgerApp.use(express.json());

var exphbs = require("express-handlebars");

burgerApp.engine("handlebars", exphbs({ defaultLayout: "main" }));
burgerApp.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

burgerApp.use(routes);

burgerApp.listen(PORT, function () {

  console.log("App server listening on: http://localhost:" + PORT);
});