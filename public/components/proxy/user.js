/**
* Proxy du client
*/
(function () {
	'use strict';

	angular.module('genesis.proxy')
	.factory('userProxy', [
		'store',
		'configEnv',
		'auth',
		userProxy
	]);

	function userProxy(store, env, auth){
		var contenu = {};
		
		// Variables ============================================================
		var profile = {};
		var socket = null;

		// Fonctions publiques ==================================================
		/* Getters et Setters */
		contenu.setUser = function( userParam){user = userParam; }
		contenu.getUser = function(){ return user; }
		contenu.setProfile = function( profileParam){profile = profileParam; }
		contenu.getProfile = function(){ return profile; }

		/* */
		contenu.update = function(){
			profile = angular.copy(store.get('profile'));
			if(socket == null && profile && profile.user_id && auth.isAuthenticated){
				socket = io("http:" + env.BACKEND_URL + '/', { 
					query: "token=" + profile.user_id
				});
				//socket.emit('register', profile.user_id);
			} 
		}

		// Fonctions internes ===================================================
		return contenu;
	}

})();