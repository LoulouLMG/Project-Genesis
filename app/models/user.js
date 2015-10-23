module.exports = function(db, callback){
	var properties = {        
	    // properties
	    user_id : { type: "serial", key: true },
	    password: { type:"text", size: 64 },
	    pseudo  : { type: "text", size: 20},
	    email   : { type: "text", size: 45 },
	    permission  : { type: "text", size: 15 },
	    is_connected  : Boolean,                  
	    last_connection : Date
	}

	var options = {
		cache: false
	}

	db.define('user', properties, options);

	return callback();
}

