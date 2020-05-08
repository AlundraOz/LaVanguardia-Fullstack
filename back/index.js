
const express = require('express'),
//información que tu le mandas por un formulario
      bodyParser = require('body-parser'),
      //authoritzation giving a token
      jwt = require('jsonwebtoken'),
      app = express(),
      connection = require('./configs/config.js'),
      router = express.Router(),
      //package rarete
      session = require('express-session'),
      port = 5000,
      //package allow us post in browser
      cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use(session({
  //don't know
  secret: 'keyboard cat'
}))

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


//LOG IN
app.post('/authenticate', (req, res, next) => {
  //save form information
    var data={
      email:req.body.email,
      password: req.body.password
    };
    //save user id
    var idUser = req.body.id
    //match between email & password
    connection.query(`SELECT * FROM users WHERE email = ? AND password = ?`, [data.email, data.password], function(err, results) {
    //
      if(results){
        req.session.regenerate( ()=>{
          console.log(data.email)
          req.session.login = true;
          req.session.email = req.body.email;
          //return the loged user to the front, to use this url for context
          // res.redirect(`/users_profiles/${idUser}`);
          res.json(results)
        });

      }else{
        //if you don't post anything don't go anywere
        res.render('/');
      }
  })

  // app.get('/users_profiles/:email', (req, res) => {
  //     // Get the data sent
  //     const email = req.params.email;
  //   connection.query('SELECT * FROM users WHERE email = ? ', email, (err, results) => {
  //     console.log('hhhhhh')
  //     if(err) {
  //       res.status(500).send('error fetching posts')
  //     } else {
  //       res.json(results)
  //     }
  //   })
  // })


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

//RELATIONS


app.post('/game-score', (req, res) => {
  const score= req.body.score
  
  connection.query(`INSERT INTO games SET score = ?`, score, (err) => {
    if(err){
      res.status(500).send('Error saving your post')
    } else {
      res.sendStatus(200)
    }
  })
});


app.listen(port,(err)=>{
    if (err) {
    throw new Error('Something bad happened...');
    }
    console.log(`Server listening to port ${port}`)
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
