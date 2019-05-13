var mysql = require("mysql");


var cl = console.log;

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

  connection = mysql.createConnection({
    host: "localhost",
    user: "root",

    password: "CraftBeer@210",

    database: "burgers_db"
  });
};


connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  cl("Connected as id " + connection.threadId);
});


module.exports = connection;