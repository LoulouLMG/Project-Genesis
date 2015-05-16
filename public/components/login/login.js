/**
*  Module de login
*
* Gestion du module de login
*/
(function () {
	'use strict';
	angular.module('genesis.views.login')
	.config(routage)
	.controller('loginCtrl', ['locationSvc', 'loginSvc', loginCtrl]);

	function routage($routeProvider){
		var login = {};
		login.templateUrl = '/components/login/login.html';
		login.controller = 'loginCtrl';
		login.controllerAs = 'login';
		$routeProvider.when('/login', login);
	}

	function loginCtrl(location, service){
		console.log('login');
		var login = this;

		login.goHome = location.goHome;
	}
})();