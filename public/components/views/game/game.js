/**
*  Module du jeux
*
* Gestion du module ddu jeux
*/
(function () {
	'use strict';
	angular.module('genesis.views.game')
	.controller('gameCtrl', ['locationSvc', gameCtrl]);

	function gameCtrl(location){
		console.log('game');
		var game = this;

		game.goHome = location.goHome;
	}
})();