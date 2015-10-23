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
		'auth',
		'store',
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

	function loginCtrl(location, loginSvc, auth, store){
		console.log('login');
		var login = this;

		login.loading = false;
		// Variables =======================================================
		login.credentials = {};
		login.credentials.rememberme = true;

		// Fonctions publiques =============================================
		login.goHome = location.goHome;

		login.connexion = function(form){
			console.info("Connexion ...");
			console.log(login.credentials);
			login.loading = true;
			console.log(auth);
			auth.signin({
		      	connection: 'Username-Password-Authentication',
		      	username: login.credentials.username,
		      	password: login.credentials.password,
		      	authParams: {
		        	scope: 'openid name email'
		      	}
		    }, onLoginSuccess, onLoginFailed);
		}

		// Fonctions internes ==============================================
		function onLoginSuccess(profile, token) {
			 login.loading = false;
			console.info('LOGGED !');
		    store.set('profile', profile);
		    store.set('token', token);
		    location.goGame();
		   
		}

		function onLoginFailed(test) {
			login.loading = false;
			console.info('NOT LOGGED !');
			console.log(test);
		}
	}
})();