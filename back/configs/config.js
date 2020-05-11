const  mysql = require('mysql');
const  connection = mysql.createConnection({
  host :  'localhost', // address of the server
  user :  'root', // username
  password :  'BRDONJU12',
  database :  'games_database',
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = connection;
