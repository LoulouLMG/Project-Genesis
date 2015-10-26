/**
*  Module du gestion de l'interaction avec la librairie de socket
*/
(function () {
	'use strict';
	angular.module('genesis.services')
		.service('socketService', [
			'socketFactory',
			'configEnv',
			socketService]); 

	function socketService(socketFactory, constantes){
	   	var service = this;
	   	var socket;

	   	service.connect = function(){
	   		if(!socket){
	   			socket = io.connect(constantes.BACKEND_URL)
	   		} else {
	   			socket.socket.connect();
	   		}
	   		console.log(socket);
	   		socket.emit('join', 'Je suis dans la place');
	   	}

	   	service.getSocket = function(){
	   		return socket;
	   	}

	   	service.disconnect = function(){
	   		if(socket){
	   			socket.emit('leave', 'Bye bye.');
	   			socket.disconnect();
	   		}
	   	}

	   	return service;
	}
})();