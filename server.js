var express = require("express");


// more code in here //


var PORT = process.env.PORT || 3000;


app.listen(PORT, function() {
    
    console.log("App server listening on: http://localhost/:" + PORT);
  });