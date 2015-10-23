(function() {
        // load the todo model
        var path = require('path');
        var express  = require('express');
        var api = express.Router();
        var jwt = require('express-jwt');
        
        module.exports = function(app) {

        var jwtCheck = jwt({ /* secret :D */});

        // api ===========================================================================

        // jwt middleware to verify a token
        api.use(jwtCheck);

        api.get('/', function(req, res) {
                res.json( { message:'Bienvenue sur l\'API !'} );  
        });

        api.get('/users', function(req, res) {
            req.db.models.user.find(function(error, users){
                if(error){
                    res.send(error);
                } else {
                   res.json(users);  
                }
            });
        });

        app.use('/api', api);
        
        // application =================================================================
        app.get('*', function(req, res) {
            // load the single view file (angular will handle the page changes on the
            // front-end)
            res.sendFile(path.join(__dirname, '../public', 'index.html'));
        });
    };
})();
