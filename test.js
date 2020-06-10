 var express    = require("express");
 var mysql      = require('mysql');
 var connection = mysql.createConnection({
  // host     : "172.31.1.129",
   host	    : "localhost",
 port     : "3306",
   user     : "root",
   password : "",
   database : "nodelogin"
 });
 var app = express();
 
 connection.connect(function(err){
 if(!err) {
     console.log("Database is connected ... \n\n");  
 } else {
	 console.log(err)
     console.log("Error connecting database ... \n\n");  
 }
 });
app.listen(3002);
