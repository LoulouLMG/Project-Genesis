(function() {
	'use strict';
	/**
	*  Module de localisation
	*
	* Gère les liens internes de l'application
	*/
	angular.module('genesis.services.location')
	.service('location', location);

	function location($location){
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
	}
})();