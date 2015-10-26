(function(){
	'use strict';

	module.exports = function(app, express){

		/* Logger */
		var morgan = require('morgan');
		/* Parseur de requetes */
    	var bodyParser = require('body-parser');
    	/* Mise en cahche du favicon */
    	var favicon = require('serve-favicon');
    	var methodOverride = require('method-override');

    	/* Autorisation CORS */
    	app.all('*', function(req, res, next) {
		  	res.header("Access-Control-Allow-Origin", "*");
		  	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
		  	res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
		  	if (req.method == 'OPTIONS') {
		    	res.status(200).end();
		  	} else {
		    	next();
		    }
		});

		/* Localisation du dossier public pour les utilisateurs */
    	app.use(express.static(__dirname + '../../../public'));
    	app.use(favicon(__dirname + '../../../public/favicon.ico'));

    	/* Middlewares utilitaires */
    	app.use(morgan('dev'));
	    app.use(bodyParser.urlencoded({'extended':'true'}));
	    app.use(bodyParser.json());
	    app.use(bodyParser.json({type:'application/vnd.api+json'}));
	    app.use(methodOverride());
	}
})();