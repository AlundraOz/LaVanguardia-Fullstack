const  mysql = require('mysql');
const  connection = mysql.createConnection({
  host :  'localhost', // address of the server
  user :  'root', // username
<<<<<<< HEAD
  password :  '327d361f!',
=======
  password :  'BRDONJU12',
>>>>>>> 3e652e7bdcea1ab4658bdf6adaffff5d640cc0bd
  database :  'games_database',
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = connection;
