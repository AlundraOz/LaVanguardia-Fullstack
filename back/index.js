const express = require('express'),
      bodyParser = require('body-parser'),
      jwt = require('jsonwebtoken'),
      app = express();
const connection = require('./configs/config');
const myconnection = require('express-myconnection')
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



//REGISTER ROUTE
// send information from the form to the back
app.post('/users_profiles', (req, res) => {
  // le's call name, email and password the information sent by name, email and password inputs of the form
  const formData = {
    user_id: 10,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }
  console.log('USER PROFILE REGISTERING BEFORE QUERY')
  //put these information in the DB users table to create the new user
  connection.query(`INSERT INTO users VALUES ('11','yo', 'yo', 'yo');`, (err) => {   // change test values with the ones coming from the formData (ex ${formData.name})
    if(err){
      res.status(500).send('Error saving your profile')
    } else {
      res.sendStatus(200)
    }
  })
});


//LOG IN
app.post('/authenticate', (req, res, next) => {

  console.log("ENTER LOGIN")
    //let's call email and password what is sent through the form inputs of email and password
  var data={
    email:req.body.email,
    password: req.body.password
  };
  console.log('LOGIN BEFORE CONNEXION.QUERY')
  connection.query(`SELECT email, password FROM users WHERE email = ? AND password = ?`, [data.email, data.password], (err, results) => {
  // Check if email and password have been filled
    if(results){
      console.log('ENTER QUERY CONDITION TOKEN')
      const payload = {
        check:  true
       };
        // gives a token when signed in. Says the token to be valid during 24 hours (1440 minutes)
      const token = jwt.sign(payload, app.get('secret_key'), {
        // MODIFY CONFIG.JS
        expiresIn: 5  // !!! changing it to 1440 
      });
       //sends a json object that displays the token and a message that confirms that the login has been successfull (for the tests)
      res.json({
        message: 'Authentication successfull',
        token: token
      });

      // !!! SESSION : pass the login of the session to true, keeping the user email
      req.session.regenerate( ()=>{
        console.log(data.email)
        req.session.login = true;
        req.session.email = req.body.email;

      //Redirect to the user_profile page of the user that is logging in
        res.redirect(`/users_profiles/${data.email}`);
      });
    }else{
      res.render('/');
      console.log('TOKEN NOT ALLOWED')
    }
  })
});


const protectedRoutes = express.Router(); 
protectedRoutes.use((req, res, next) => {
  console.log('in protected Routes function')
  const data = {
    password: req.body.password
  }
    const token = req.headers['access-token'];
    if (token) {
      jwt.verify(token, app.get('data.password'), (err, decoded) => {      
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


//ACCESS TO PERSONAL USER PROFILE PAGE
app.get('/users_profiles/:email', protectedRoutes, (req, res) => {
  
    // Get the data sent
    const email = req.params.email;
  
  connection.query('SELECT * FROM users WHERE email = ? ', email, (err, results) => {
    console.log('in the SELECT of user page')
    if(err) {
      res.status(500).send('error fetching posts')
    } else {
      res.json(results)
    }
  })
})

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






  // GET EMAIL RECEIVED FROM FRONT
  // GET PASSWORD RECEIVED FROM FRONT
  // CHECK IF EMAIL EXISTS
  // IF EMAIL EXISTS GET ID FROM THE USERS IT COMES FROM
  // IF PASSWORD RECEIVED == USERS_ID.PASSWORD  >> AUTHENTICATION OK





//  app.get('/data', protectedRoutes, (req, res) => {
//     const data = [
//      { id: 1, name: "Asfo" },
//      { id: 2, name: "Denisse" },
//      { id: 3, name: "Carlos" }
//     ];
    
//     res.json(data);
//    }); 