/**
*  Module du jeux
*
* Gestion du module ddu jeux
*/
(function () {
	'use strict';
	angular.module('genesis.views.game')
	.config(routage)
	.controller('gameCtrl', ['location', gameCtrl]);

	function routage($routeProvider){
		var game = {};
		game.templateUrl = '/components/game/game.html';
		game.controller = 'gameCtrl';
		game.controllerAs = 'game';
		$routeProvider.when('/game', game);
	}

	function gameCtrl(location, $location){
		console.log('game');
		var game = this;

		game.goHome = location.goHome;
	}
})();