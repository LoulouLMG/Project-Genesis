(function(){
	'use strict';

	module.exports = function(io){
		var allClients = [];
		io.on('connection', function(socket) {
			var user = null;

			allClients.push(socket);

		  	console.info('User connected');
		  	console.log('Nb users : ' + allClients.length);

		  	socket.on('register', function (userId) {
		        if (userId !== null) {
		            if (/* checker que le user existe*/ true ) {
		                user = {
		                	user_id : userId,
		                	disconnected : false
		                };
		            } else {
		                //timed out, creer nouveau joueur ?
		            }
		        } else {
		            //localStorage pas mis , creer nouveau joueur ?
		        }
		    });

		  	socket.on('disconnect', function(data) {
		  		user.disconnected = true;
		        setTimeout(function () {
		            if (user.disconnected) {
		            	user = null;
		            	console.info('User disconnected');
		      			allClients.splice(allClients.indexOf(socket), 1);
		      			console.log('Nb users : ' + allClients.length);
		            }
		        }, 5000);
		  	});
		});
	}
})();