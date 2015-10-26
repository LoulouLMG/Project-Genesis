(function () {
	'use strict';
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

	//Proxy
	angular.module('genesis.proxy', []);

	// Vues
	console.log('Chargement des modules ...');
	angular.module('genesis.views', [
		'genesis.views.home',
		'genesis.views.game',
		'genesis.views.login',
		'genesis.views.dashboard'
	]);
	/* Module de la page d'acceuil */
	angular.module('genesis.views.home', ['ngRoute']);
	/* Module du jeux */
	angular.module('genesis.views.game', ['ngRoute']);
	/* Module de login */
	angular.module('genesis.views.login', ['ngRoute']);
	/* Module du dashboard */
	angular.module('genesis.views.dashboard', ['ngRoute']);
	

	// constantes
	angular.module('genesis.constantes', []);
	console.log('Modules chargés.');
})();