/**
*  Module home
*
* Gestion de la page d'accueil des visiteur du site
*/
(function () {
	'use strict';
	angular.module('genesis.views.home')
	.config(routage)
	.controller('homeCtrl', ['location', homeCtrl]);

	function routage ($routeProvider) {
		var home = {};
		home.templateUrl = '/components/home/home.html';
       	home.controller = 'homeCtrl';
       	home.controllerAs = 'home';
		$routeProvider.when('/home', home);
	}

	function homeCtrl(location, $location){
		console.log('home');
		var home = this;

		home.goLogin = location.goLogin;

		home.goGame = function() {
			location.goGame($location);
		}
	}
})();