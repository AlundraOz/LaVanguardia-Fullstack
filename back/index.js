const express = require('express'),
      bodyParser = require('body-parser'),
      jwt = require('jsonwebtoken'),
      app = express();
const connection = require('./configs/config.js');
const router = express.Router();
const session = require('express-session')

const port = 5000;
var cors = require('cors')
      
// 1
//app.set('secret_key', config.secret_key);
// 2
app.use(bodyParser.urlencoded({ extended: true }));
// 3
app.use(bodyParser.json());
app.use(cors())
app.use(session({
  /* genid: function(req) {
    return genuuid() // use UUIDs for session IDs
  }, */
  secret: 'keyboard cat'
}))
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

//ALL THE USERS
  app.get('/users_profiles', (req, res) => {
   connection.query('SELECT * FROM users', (err, results) => {
     if(err) {
       res.status(500).send('error fetching posts')
     } else {
       res.json(results)
     }
   })
})

//user selected
app.get('/users_profiles/:email', (req, res) => {
  
    // Get the data sent
    const email = req.params.email;
  

  connection.query('SELECT * FROM users WHERE email = ? ', email, (err, results) => {
    console.log('hhhhhh')
    if(err) {
      res.status(500).send('error fetching posts')
    } else {
      res.json(results)
    }
  })
})

//LOG IN
app.post('/authenticate', (req, res, next) => {
    
    var data={
      email:req.body.email,
      password: req.body.password
    };
    connection.query(`SELECT email, password FROM users WHERE email = ? AND password = ?`, [data.email, data.password], function(err, results) {
    
      if(results){
        req.session.regenerate( ()=>{
          console.log(data.email)
          req.session.login = true;
          req.session.email = req.body.email;
          //return the loged user to the front, to use this url for context
          res.redirect(`/users_profiles/${data.email}`);
          
        });

      }else{
        res.render('/');
      }
  })


  /* const formData = {
    email: req.body.email,
    password: req.body.password,
  } */
   /* if(formData.email === "asfo" && formData.password === "holamundo") {
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
  } */
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

//REGISTER ROUTE, Sign up 
app.post('/users_profiles', (req, res) => {

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


/* 
 app.get('/data', protectedRoutes, (req, res) => {
    const data = [
     { id: 1, name: "Asfo" },
     { id: 2, name: "Denisse" },
     { id: 3, name: "Carlos" }
    ];
    
    res.json(data);
   }); */

