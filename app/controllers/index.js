// Ici sont définies toutes les routes que l'appli va servir
var path = require('path');
var express = require('express');
var router = express.Router();


router.use('/route1', require('./route1'));
/*
router.use('/route2', require('./route2'));
*/

router.get('*', function(req, res, next) {
	/* CORS */
	res.header("Access-Control-Allow-Origin", "*");
  	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  	res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');

  	if (req.method == 'OPTIONS') {
    	res.status(200).end();
  	} else {
  		// load the single view file (angular will handle the page changes on the
	    // front-end)
	    res.sendFile(path.join(__dirname, '../../public', 'index.html'));
    }
});

module.exports = router

