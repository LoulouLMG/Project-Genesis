(function() {
	'use strict';
	/**
	*  Module de localisation
	*
	* Gère les liens internes de l'application
	*/
	angular.module('genesis.services.location')
	.service('locationSvc', locationSvc);

	function locationSvc($location){
		var location = this;

		location.goHome = function() {
			$location.path('/home');
		}

		location.goLogin = function() {
			$location.path('/login');
		}

		location.goGame = function() {
			$location.path('/game');
		}

		location.goDashboard = function() {
			$location.path('/dashboard');
		}
	}
})();