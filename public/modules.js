(function () {
	'use strict';
	// Vues
	console.log('Chargement des modules ...');
	angular.module('genesis.views', [
		'genesis.views.home',
		'genesis.views.game',
		'genesis.views.login'
	]);
	/* Module de la page d'acceuil */
	angular.module('genesis.views.home', ['ngRoute']);
	/* Module du jeux */
	angular.module('genesis.views.game', ['ngRoute']);
	/* Module de login */
	angular.module('genesis.views.login', ['ngRoute']);

	// Services
	angular.module('genesis.services', [
		'genesis.services.location'
	]);
	/* Module de la gestion des liens internes */
	angular.module('genesis.services.location', ['ngRoute']);


})();