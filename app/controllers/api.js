var express = require('express');
var apiRouter = express.Router();

// middleware specific to this router
apiRouter.use(function timeLog(req, res, next) {
  console.log('Demande sur l\'api: ', req.body);
  next();
});

// define the home page route
apiRouter.get('/', function(req, res) {
   res.json( { message:'Bienvenue sur l\'API !'} );
});

// routes de l'api
apiRouter.get('/login', require('./login'));

module.exports = apiRouter;