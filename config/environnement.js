(function(){
	'use strict';

	module.exports = function(app, express){
		/* Logger */
		var morgan = require('morgan');
		/* Parseur de requetes */
    	var bodyParser = require('body-parser');
		/* Localisation du dossier public pour les utilisateurs */
    	app.use(express.static(__dirname + '../../public'));
    	/* Middlewares utilitaires */
    	app.use(morgan('dev'));
	    app.use(bodyParser.urlencoded({'extended':'true'}));
	    app.use(bodyParser.json());
	    app.use(bodyParser.json({type:'application/vnd.api+json'}));
	    app.use(bodyParser.urlencoded({'extended':'true'}));
	}
})();