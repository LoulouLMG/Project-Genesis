/**
*  Module home
*
* Gestion de la page d'accueil des visiteur du site
*/
(function () {
	'use strict';
	angular.module('genesis.views.home')
	.controller('homeCtrl', [
		'locationSvc',
		'auth',
		'store',
		homeCtrl
	]);

	function homeCtrl(location, auth, store){
		console.log('home');
		var home = this;

		home.goLogin = location.goLogin;

		home.goGame = location.goGame;

		home.goDashboard = location.goDashboard;

		home.isAuthenticated = function(){
			return auth.isAuthenticated;
		}

		home.logout = function(){
			auth.signout();
			store.remove('profile');
			store.remove('token');
			console.info('Deconnecté.');
		}
	}
})();