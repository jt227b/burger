// Dependencies // // Import MySQL connection // // Dependencies // // Import MySQL connection // 
var connection = require("./connection");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax //
function objToSql(ob) {
    var arr = [];

 
    for (var key in ob) {
        var value = ob[key];
       
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

// Object for all our SQL statement functions //
var orm = {
    selectAll: function(tableInput, cb) {
    
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) +  ");"
     
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    
    updateOne: function(table, colValObj, id, cb) {
      var queryString = "UPDATE " + table + " SET " + objToSql(colValObj) + " WHERE " + id
  
     
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    delete: function(table, id, cb) {
      var queryString = "DELETE FROM " + table + " WHERE " + id
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
};
  
 
  module.exports = orm;
  