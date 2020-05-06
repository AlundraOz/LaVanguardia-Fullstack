const  mysql = require('mysql');
const  connection = mysql.createConnection({
  host :  'localhost', // address of the server
  user :  'root', // username
  password :  'root',
  database :  'test_users',
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
module.exports = connection;
// module.exports = {
//     secret_key: "akljsdlknao"
// }