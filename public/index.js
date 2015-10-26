/**
 * Point d'entrée de l'application cliente
 * @author Solofeed
 */
(function() {
	'use strict';
  	angular.module('genesis', [
  		'ngRoute',
      'auth0',
      'angular-storage',
      'angular-jwt',
      'btford.socket-io',
      'genesis.constantes',
      'genesis.proxy',
      'genesis.services',
      'genesis.views'
  	])

  	.config([
      '$routeProvider',
      '$httpProvider',
      'authProvider',
      'jwtInterceptorProvider',
      '$locationProvider',
      routage])

  	.run([
      '$rootScope',
      'auth',
      'store',
      'jwtHelper',
      '$location',
      '$route',
      main]);

  	function routage ($routeProvider, $httpProvider, authProvider, jwtInterceptorProvider,
      $locationProvider) {
  		$routeProvider.otherwise({redirectTo: '/home'});
      /**
       * Initialisation du systême d'authentification avec auth0
       */
      authProvider.init({
        domain: 'genesis-rebirth.eu.auth0.com',
        clientID: 'cK5egFEs4jgbW1dzSejyLPe94UL8ot8H',
        callbackURL: location.href,
        loginUrl: '/login'
      });


      jwtInterceptorProvider.tokenGetter = ['store', function(store) {
        return store.get('token');
      }];

      $httpProvider.interceptors.push('jwtInterceptor');
      $locationProvider.hashPrefix('!');
      $locationProvider.html5Mode(true);

  	}

  	function main ($rootScope, auth, store, jwtHelper, $location, $route) {
      auth.hookEvents();

      $rootScope.$on('$routeChangeStart', function(evt, next, from) {
        /* Determine if the user can access the next route */ 
        if (!auth.isAuthenticated) {
          var token = store.get('token');
          if (token) {
            if (!jwtHelper.isTokenExpired(token)) {
              auth.authenticate(store.get('profile'), token);
              //$location.path(next.originalPath);
            } else {
              $location.path('/login');
            }
          }
        /* Check if the user can access login view *//*
        } else if(auth.isAuthenticated && next.originalPath == '/login'){
          evt.preventDefault();
        }
        */
        }
      });
  	}
})();