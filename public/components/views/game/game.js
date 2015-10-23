/**
*  Module du jeux
*
* Gestion du module ddu jeux
*/
(function () {
	'use strict';
	angular.module('genesis.views.game')
	.config(routage)
	.controller('gameCtrl', ['locationSvc', gameCtrl]);

	function routage($routeProvider){
		var game = {};
		game.templateUrl = '/components/views/game/game.html';
		game.controller = 'gameCtrl';
		game.controllerAs = 'game';
		game.requiresLogin = true;
		$routeProvider.when('/game', game);
	}

	function gameCtrl(location){
		console.log('game');
		var game = this;

		game.goHome = location.goHome;
	}
})();