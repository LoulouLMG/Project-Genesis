/**
 * Point d'entrée de l'application cliente
 * @author Solofeed
 */
(function() {
	'use strict';
  	angular.module('mainApp', [
  		'ngRoute',
  	])
  	.config(['$routeProvider', routage])
  	.run(['$location', main])

  	function routage (route) {
  		route.otherwise({redirectTo: '/'});
  	}
  	function main (location) {
  		console.log('Client lancé');
  	}
})();