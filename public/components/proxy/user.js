/**
* Proxy du client
*/
(function () {
	'use strict';

	angular.module('genesis.proxy')
	.factory('userProxy', [
		'store',
		userProxy
	]);

	function userProxy(store){
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
			if(socket == null){
				socket = io();
				socket.emit('register', profile.user_id);
			} 
		}

		// Fonctions internes ===================================================
		return contenu;
	}

})();