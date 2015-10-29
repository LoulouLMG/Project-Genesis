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
      '$location',
      'jwtHelper',
      'store',
      'userProxy',
      main]);

  	function routage ($routeProvider, $httpProvider, authProvider, jwtInterceptorProvider,
      $locationProvider) {
      /**
       * Initialisation du systême d'authentification avec auth0
       */
      authProvider.init({
        domain: 'genesis-rebirth.eu.auth0.com',
        clientID: 'cK5egFEs4jgbW1dzSejyLPe94UL8ot8H',
        callbackURL: location.href,
        loginUrl: '/login'
      });

      configureAuthVerification($routeProvider);
      configureRoutes($routeProvider);

      jwtInterceptorProvider.tokenGetter = ['store', function(store) {
        return store.get('token');
      }];

      $httpProvider.interceptors.push('jwtInterceptor');
      $locationProvider.hashPrefix('!');
      $locationProvider.html5Mode(true);
  	}

  	function main ($rootScope, auth, $location, jwtHelper, store, userProxy) {
      userProxy.update();
      auth.hookEvents();
      
      $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
        if (rejection && rejection.needsAuthentication === true) {
          console.log('Error : needsAuthentication');
          var returnUrl = $location.url();
          $location.path('/login');
        }
      });

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
  	}  

    function configureAuthVerification($routeProvider){
      var isLoggedIn = ['$q', 'auth', 'store', 'jwtHelper', function($q, auth, store, jwtHelper) {
          var deferred = $q.defer();
          var reject = function(){
            deferred.reject({ 
              needsAuthentication: true 
            });
          }

          if (!auth.isAuthenticated) {
            var token = store.get('token');
            if (token) {
              if (!jwtHelper.isTokenExpired(token)) {
                auth.authenticate(store.get('profile'), token);
                if(auth.isAuthenticated){
                  deferred.resolve();
                } else {
                  reject();
                }
              } else {
                reject();
              }
            } else {
              reject();
            }
          } else {
            deferred.resolve();
          }

          return deferred.promise;
        }
      ];

      $routeProvider.whenAuthenticated = function(path, route){
        route.resolve = route.resolve || {};
        angular.extend(route.resolve, { 
          isLoggedIn: isLoggedIn 
        });
        $routeProvider.when(path, route);
      }
    }

    function configureRoutes($routeProvider){
      var login = {
        templateUrl : '/components/views/login/login.html',
        controller : 'loginCtrl',
        controllerAs : 'login'
      };

      var home = {
        templateUrl : '/components/views/home/home.html',
        controller : 'homeCtrl',
        controllerAs : 'home'
      };

      var game = {
        templateUrl : '/components/views/game/game.html',
        controller : 'gameCtrl',
        controllerAs : 'game',
        requiresLogin : true
      };
      
      var dashboard = {
        templateUrl : '/components/views/dashboard/dashboard.html',
        controller : 'dashboardCtrl',
        controllerAs : 'dashboard',
      };

      $routeProvider.when('/home', home);
      $routeProvider.when('/login', login);
      $routeProvider.when('/game', game);
      $routeProvider.whenAuthenticated('/dashboard', dashboard);
      $routeProvider.otherwise({redirectTo: '/home'});
    }
})();