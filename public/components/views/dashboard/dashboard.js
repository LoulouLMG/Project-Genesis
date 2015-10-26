/**
*  Module du dashboard
*
* Gestion du module du dashboard
*/
(function () {
	'use strict';
	angular.module('genesis.views.dashboard')
	.config(routage)
	.controller('dashboardCtrl', [
		'locationSvc',
		'userProxy',
		dashboardCtrl
	]);

	// Configuration de la route et attribution du controller à la vue
	function routage($routeProvider){
		var dashboard = {};
		dashboard.templateUrl = '/components/views/dashboard/dashboard.html';
		dashboard.controller = 'dashboardCtrl';
		dashboard.controllerAs = 'dashboard';
		dashboard.requiresLogin = true;
		$routeProvider.when('/dashboard', dashboard);
	}

	function dashboardCtrl(location, User){
		
		var dashboard = this;
		
		// Variables ============================================================
		// Fonctions publiques ==================================================
		dashboard.goHome = location.goHome;
		dashboard.getProfile = User.getProfile;

		// Fonctions internes ===================================================
		// Execution ============================================================
		console.info('Etat du User:');
		console.log(User.getProfile());
		console.info('dashboard chargé.');
	}
})();