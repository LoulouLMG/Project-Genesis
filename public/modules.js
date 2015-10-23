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
		'genesis.services.location',
		'genesis.services.session',
		'genesis.services.auth',
		'genesis.services.error'
	]);
	/* Module de la gestion des liens internes */
	angular.module('genesis.services.location', ['ngRoute']);
	/* Gestion de la session de l'utilisateur */
	angular.module('genesis.services.session', []);
	/* Module d'identification */
	angular.module('genesis.services.auth', []);
	/* Module d'erreur */
	angular.module('genesis.services.error', []);

	// constantes
	angular.module('genesis.constantes', []);
})();