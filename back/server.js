const express = require('express');
const app = express();
const router = express.Router();
const connection = require('./config.js');
const port = 5000;
const bodyParser = require('body-parser');
var cors = require('cors')

// Support JSON-encoded bodies
app.use(bodyParser.json());
//app.use(express.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())

app.get('/', (req, res) => {
    res.send('it worksss YEES!')
  })




  app.get('/todo', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
      if(err) {
        res.status(500).send('error fetching posts')
      } else {
        res.json(results)
      }
    })
  })
  
  
  app.post('/todo', (req, res) => {
    const formData = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }
    connection.query(`INSERT INTO users SET ?`, formData, (err) => {
      if(err){
        res.status(500).send('Error saving your post')
      } else {
        res.sendStatus(200)
      }
    })
  });
  
/* app.post('/todo', (req, res) => {

    // Get the data sent
    const formData = req.body;

    // connection to the database, and insertion of the employee
    connection.query("INSERT INTO users (user_id, name, email, password) SET ?", formData, (err, results) => {

        if (err) {
            // If an error has occurred, then the user is informed of the error
            console.log(err);
            res.status(500).send("Error saving an playlist");
        } else {
            // If everything went well, we send a status "ok".
            //res.sendStatus(200);
            res.sendStatus(200);
        }
    });
}); */


app.listen(port, (err) => {
    if (err) {
        throw new Error('Something bad happened...');
    }
    console.log(`Server is listening on ${port}`);
});

