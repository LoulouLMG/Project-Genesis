(function(){
	'use strict';

	module.exports = function(io){
		var users = [];

		io.on('connection', function(socket) {
			var user = null;



		  	socket.on('register', function (userId) {
		        if (userId !== null) {
		        	user = getUserAlreadyIn(userId);
		      		if(user){
		      			user.disconnected = false;
		      		} else {
		                user = {
		                	user_id : userId,
		                	disconnected : false
		                };
		                users.push(user);
		                console.log("A client joined");
		                console.log(users.length + " client(s) in total.");
		            }
		        } else {
		        	socket.disconnect();
		        	console.log("A client tried to join but failed.");
		        }
		    });

		  	socket.on('disconnect', function(data) {
		  		user.disconnected = true;
		        setTimeout(function () {
		            if (user.disconnected) {
		            	var userToRemove = removeUser(user.user_id);
		            	console.log("A client left");
		                console.log(users.length + " client(s) in total.");
		                userToRemove = undefined;
		            }
		        }, 5000);
		  	});
		});

		function getUserAlreadyIn(id){
			for(var i = 0; i < users.length; i++ ){
				if(id == users[i].user_id){
					return users[i];
				}
			}
			return false;
		}

		function removeUser(id){
			for(var i = 0; i < users.length; i++ ){
				if(id == users[i].user_id){
					return users.splice(i, 1);
				}
			}
		}
	}
})();