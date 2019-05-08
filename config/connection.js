// Dependencies // // Dependencies // // Dependencies //
var mysql = require("mysql");
var connection;


if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else{

// Remeber to Erase Password before commiting // // Remeber to Erase Password before commiting //
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    });
}
// Remeber to Erase Password before commiting // // Remeber to Erase Password before commiting //

connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return
    }
    console.log("connected as id: " + connection.threadId);
});


module.exports = connection;