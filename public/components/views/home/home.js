/**
*  Module home
*
* Gestion de la page d'accueil des visiteur du site
*/
(function () {
	'use strict';
	angular.module('genesis.views.home')
	.config(routage)
	.controller('homeCtrl', [
		'locationSvc',
		'auth',
		'store',
		homeCtrl
	]);

	function routage ($routeProvider) {
		var home = {};
		home.templateUrl = '/components/views/home/home.html';
       	home.controller = 'homeCtrl';
       	home.controllerAs = 'home';
		$routeProvider.when('/home', home);
	}

	function homeCtrl(location, auth, store){
		console.log('home');
		var home = this;

		home.goLogin = location.goLogin;

		home.goGame = location.goGame;

		home.logout = function(){
			auth.signout();
			store.remove('profile');
			store.remove('token');
			console.info('Deconnecté.');
		}
	}
})();