// Set up MySQL connection.
var mysql = require("mysql");
var connection;

//link to JAWSdb
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else { //else go local
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "megatron81",
  database: "burgers_db"
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as threadID " + connection.threadId);
});

// Export connection 
module.exports = connection;
