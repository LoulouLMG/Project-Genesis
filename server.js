/**
 * Point d'entrée du serveur 
 * @author Solofeed
 */
(function(){
    // Mise en place des variables d'exécution ======================================
    var express  = require('express');                          
    var mysql = require('mysql');
    /* Chargement de la configuration de la base de donnée*/
    var databaseConfig = require('./config/database');
    /* Récupération des variables de configuration du serveur */
    var config = require('./config/config');

    /* Création de l'application w/ express */
    var app = express();

    // Configuration =================================================================
    /* Connexion à la base de donnée MySQL */
    var database = mysql.createConnection(databaseConfig);
    /* Localisation du dossier public pour les utilisateurs */
    app.use(express.static(__dirname + '/public'));    

    // Chargement des routes =========================================================
    require('./app/routes')(app);

    // Configuration du port et lancement du serveur =================================
    app.listen(config.port);
    

    /// error handlers ===============================================================
    // development error handler
    // will print stacktrace
    /*
    if (app.get('env') === 'DEV') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });

    /// catch 404 and forwarding to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });*/

    console.log("Serveur lancé sur le port " + config.port); 
})();

    