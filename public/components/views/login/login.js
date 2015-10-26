/**
*  Module de login
*
* Gestion du module de login
*/
(function () {
	'use strict';
	angular.module('genesis.views.login')
	.config(routage)
	.controller('loginCtrl', [
		'locationSvc',
		'loginSvc',
		'store',
		'userProxy',
		loginCtrl
	]);

	// Configuration de la route et attribution du controller à la vue
	function routage($routeProvider){
		var login = {};
		login.templateUrl = '/components/views/login/login.html';
		login.controller = 'loginCtrl';
		login.controllerAs = 'login';
		$routeProvider.when('/login', login);
	}

	function loginCtrl(location, loginSvc, store, User){
		console.log('login');
		var login = this;
		login.loading = false;
		// Variables ===============================================================
		login.credentials = {};
		login.credentials.rememberme = true;

		// Fonctions publiques =====================================================
		login.goHome = location.goHome;

		login.connexion = function(form){
			if(form.$valid){
				login.loading = true;
				loginSvc.signin(login.credentials, onLoginSuccess, onLoginFailed);
			}
		}

		// Fonctions internes ======================================================
		function onLoginSuccess(profile, token) {
			login.loading = false;
		    store.set('profile', profile);
		    store.set('token', token);
		    User.update();
		    location.goDashboard();
		}

		function onLoginFailed() {
			login.loading = false;
		}
	}
})();