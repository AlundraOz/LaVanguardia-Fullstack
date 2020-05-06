const express = require('express'),
      bodyParser = require('body-parser'),
      jwt = require('jsonwebtoken'),
      config = require('./configs/config'),
      app = express();
      const router = express.Router();
      const connection = require('./config.js');
      const port = 5000;
      var cors = require('cors')
      
// 1
app.set('secret_key', config.secret_key);
// 2
app.use(bodyParser.urlencoded({ extended: true }));
// 3
app.use(bodyParser.json());
app.use(cors())

// 4
app.listen(port,(err)=>{
    if (err) {
    throw new Error('Something bad happened...');
}
    console.log('Server listening to port 5000') 
});
// 5
app.get('/', function(req, res) {
    res.send('Start');
});


/*poner este en el de arriba*/ */

app.post('/authenticate', (req, res) => {
  if(req.body.user === "asfo" && req.body.password === "holamundo") {
const payload = {
 check:  true
};
const token = jwt.sign(payload, app.get('secret_key'), {
 expiresIn: 1440
});
res.json({
 message: 'Authentication correct',
 token: token
});
  } else {
      res.json({ message: "user or password incorrect"})
  }
})


const protectedRoutes = express.Router(); 

protectedRoutes.use((req, res, next) => {
    const token = req.headers['access-token'];
 
    if (token) {
      jwt.verify(token, app.get('secret_key'), (err, decoded) => {      
        if (err) {
          return res.json({ message: 'Token not valid' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          message: 'Token not proved.' 
      });
    }
 });

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



 app.get('/data', protectedRoutes, (req, res) => {
    const data = [
     { id: 1, name: "Asfo" },
     { id: 2, name: "Denisse" },
     { id: 3, name: "Carlos" }
    ];
    
    res.json(data);
   });

  //  app.get('/todo', (req, res) => {
  //   connection.query('SELECT * FROM users', (err, results) => {
  //     if(err) {
  //       res.status(500).send('error fetching posts')
  //     } else {
  //       res.json(results)
  //     }
  //   })
  // })