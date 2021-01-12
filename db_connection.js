const mysql = require('mysql');

var con = mysql.createConnection({
  host: "https://gaming.infozium.in/adminer.php",
  user: "infozium.in",
  password: "pbqtST9nx7isrjD",
  database : "gaming_infozium"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;