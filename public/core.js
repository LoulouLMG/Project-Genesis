/**
 * Point d'entrée de l'application cliente
 * @author Solofeed
 */
(function() {
	'use strict';
  	angular.module('genesis', [
  		'ngRoute',
      'genesis.views'
  	])
  	.config(['$routeProvider', routage])
  	.run(['$location', main])

  	function routage ($routeProvider) {
  		$routeProvider.otherwise({redirectTo: '/home'});
  	}
  	function main (location) {
  		console.log('Client lancé');
  	}
})();