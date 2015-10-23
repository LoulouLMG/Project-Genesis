/**
 * Service du login
 * @author Solofeed
 */
(function(){
    angular.module('genesis.services.auth')
    .service('loginSvc', [
        '$http',
        'configEnv',
        'errorSvc',
        loginSvc]);


    function loginSvc($http, constantes, error){

        var service = this;

        /**
         * Envoie une requete POST au serveur nodeJS qui contient les indentifiants de l'utilisateur
         * @param {Object} certificat 
         */
        service.connexion = function(certificat, success, error){
            return $http.post(constantes.BACKEND_URL + '/api/authenticate', certificat)
                .then(success, error);
        }
    }
})();