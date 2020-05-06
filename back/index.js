const express = require('express'),
      bodyParser = require('body-parser'),
      jwt = require('jsonwebtoken'),
      config = require('./configs/config'),
      app = express();
      
// 1
app.set('secret_key', config.secret_key);
// 2
app.use(bodyParser.urlencoded({ extended: true }));
// 3
app.use(bodyParser.json());
// 4
app.listen(3000,()=>{
    console.log('Server listening to port 3000') 
});
// 5
app.get('/', function(req, res) {
    res.send('Start');
});

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

 app.get('/data', protectedRoutes, (req, res) => {
    const data = [
     { id: 1, name: "Asfo" },
     { id: 2, name: "Denisse" },
     { id: 3, name: "Carlos" }
    ];
    
    res.json(data);
   });