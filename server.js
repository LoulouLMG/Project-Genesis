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

    // Configuration ================================================================
    /* Connexion à la base de donnée MySQL */
    var database = mysql.createConnection(databaseConfig);
    /* Localisation du dossier public pour les utilisateurs */
    app.use(express.static(__dirname + '/public'));        
    /* Configuration du port */
    app.listen(config.port);
    console.log("Serveur lancé sur le port " + config.port);
})();

    