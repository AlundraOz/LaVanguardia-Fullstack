const  mysql = require('mysql');
const  connection = mysql.createConnection({
  host :  'localhost', // address of the server
  user :  'root', // username
  password :  'BRDONJU12',
  database :  'test_users',
  secret_key: 'kjanskcsajnvdckjsnkv'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  
module.exports = connection;

// module.exports = {
//      secret_key: "akljsdlknao"
// }