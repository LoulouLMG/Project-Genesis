/**
 * Point d'entrée du serveur 
 * @author Solofeed
 */
(function(){
    // Mise en place des variables d'exécution ======================================
    var
        express  = require('express'),
        app = express(),
        server = require('http').createServer(app),
        /* object relation mapping */
        orm = require('orm'),
        /* Récupération des variables de configuration du serveur */
        config = require('./app/configs/config'),
        /* Temps réel */
        io = require('socket.io')(server);

    // Middlewares ==================================================================
    /* Connexion à la base de donnée MySQL */
    app.use(orm.express(config.database, {
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


    require('./app/configs/environnement')(app, express);

    //app.use(require('./middlewares'));
    /* routes */
    app.use(require('./app/controllers/index'));

    // Sockets ======================================================================
    require('./app/routes/sockets')(io);
    

    

    // Chargement des routes =========================================================
    //require('./app/routes/index')(app);
    

    /* Configuration du port et lancement du serveur */
    server.listen(config.port || 8080);

    console.log("Serveur lancé sur le port " + config.port || 8080);
})();

    