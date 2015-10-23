(function(){
	'use strict';

	function checkError(error, callback){
		if(error){
			return callback(error);
		}
		return callback();
	}

	module.exports = function(db, callback){
		db.load("./user.js", function(error){
			checkError(error, callback);
		});
	}
})();