/**
*  Module du dashboard
*
* Gestion du module du dashboard
*/
(function () {
	'use strict';
	angular.module('genesis.views.dashboard')
	.controller('dashboardCtrl', [
		'locationSvc',
		'userProxy',
		dashboardCtrl
	]);

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