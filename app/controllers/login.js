var express = require('express');
var loginRouter = express.Router();

// middleware specific to this router
loginRouter.use(function timeLog(req, res, next) {
  console.log('Middleware du login');
  next();
});

// define the home page route
loginRouter.get('/', function(req, res) {
  res.json( { message:'Bienvenue sur l\'api du login !'} );
});



module.exports = loginRouter;