(function(){
	'use strict';

	module.exports = function(io){
		var allClients = [];

		io.use(function(socket, next){
	        console.log("Query: ", socket.handshake.query);
	        // return the result of next() to accept the connection.
	        var token = socket.handshake.query.token;
	        if (token) {
	            return next();
	        }
	        // call next() with an Error if you need to reject the connection.
	        next(new Error('Authentication error'));
	    });

		io.on('connection', function(socket) {
			var user = null;

			
    		console.info('User connected');
	  		console.log('Nb users : ' + allClients.length);

		  	socket.on('register', function (userId) {
		        if (userId !== null) {

		            if (!checkUser(userId, allClients)) {
		                user = {
		                	user_id : userId,
		                	disconnected : false
		                };

		                allClients.push(user);
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
		      			allClients.splice(allClients.indexOf(user), 1);
		      			console.log('Nb users : ' + allClients.length);
		            }
		        }, 5000);
		  	});
		});
	}

	function checkUser = function(userId, users){
		var result = false;
		for(var i = 0; i < users.length; i++ ){
			if(userId == users[i].user_id){
				return true;
			}
		}
		return result;
	}
})();