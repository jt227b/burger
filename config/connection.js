// Dependencies //
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",

// Remeber to Erase Password before commiting // // Remeber to Erase Password before commiting //
    password: "",

    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("Connection error: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;