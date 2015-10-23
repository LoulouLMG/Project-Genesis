/**
 * Point d'entrée du serveur 
 * @author Solofeed
 */
(function(){

    // Mise en place des variables d'exécution ======================================
    var express  = require('express');
    //var response = require('./app/response');
    /* Chargement de la configuration de la base de donnée*/
    var databaseConfig = require('./config/database');
    /* Récupération des variables de configuration du serveur */
    var config = require('./config/config');
    /* object relation mapping */
    var orm = require('orm');
    

    var app = express();

    // Middlewares ==================================================================
    require('./config/environnement')(app, express);

    /* Connexion à la base de donnée MySQL */
    app.use(orm.express(databaseConfig, {
        define: function (db, models, next) {
            db.load("./app/models/models", function(error){
                if(error){
                    throw error;
                    db.sync();
                }
            });
            next();
        }
    }));


    // Chargement des routes =========================================================
    require('./app/routes')(app);

    /* Configuration du port et lancement du serveur */
    app.listen(config.port || 8080);

    console.log("Serveur lancé sur le port " + config.port || 8080);
})();

    