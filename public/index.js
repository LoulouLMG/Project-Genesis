/**
 * Point d'entrée de l'application cliente
 * @author Solofeed
 */
(function() {
	'use strict';
  	angular.module('genesis', [
  		'ngRoute',
      'ngCookies',
      'auth0',
      'angular-storage',
      'angular-jwt',
      'genesis.constantes',
      'genesis.views',
      'genesis.services'
  	])

  	.config([
      '$routeProvider',
      '$httpProvider',
      'authProvider',
      'jwtInterceptorProvider',
      routage])

  	.run([
      '$rootScope',
      'auth',
      'store',
      'jwtHelper',
      '$location',
      main]);

  	function routage ($routeProvider, $httpProvider, authProvider, jwtInterceptorProvider) {
  		$routeProvider.otherwise({redirectTo: '/home'});
      /**
       * Initialisation du systême d'authentification avec auth0
       */
      authProvider.init({
        domain: 'genesis-rebirth.eu.auth0.com',
        clientID: 'cK5egFEs4jgbW1dzSejyLPe94UL8ot8H',
        loginUrl: '/login'
      });

      jwtInterceptorProvider.tokenGetter = ['store', function(store) {
        return store.get('token');
      }];

      $httpProvider.interceptors.push('jwtInterceptor');
  	}

  	function main ($rootScope, auth, store, jwtHelper, $location) {

      $rootScope.$on('$locationChangeStart', function() {

        if (!auth.isAuthenticated) {
          var token = store.get('token');
          if (token) {
            if (!jwtHelper.isTokenExpired(token)) {
              auth.authenticate(store.get('profile'), token);
            } else {
              $location.path('/login');
            }
          }
        }
      });

      auth.hookEvents();
  		console.log('Client lancé');
  	}
})();