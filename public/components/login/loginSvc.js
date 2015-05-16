/**
 * Service du login
 * @author Solofeed
 */
(function(){
    angular.module('genesis.services.auth')
    .service('loginSvc', ['$http', 'errorSvc', loginSvc]);


    function loginSvc($http, error){

        var service = this;

        /**
         * Envoie une requete POST au serveur nodeJS qui contient les indentifiants de l'utilisateur
         * @param {Object} certificat 
         */
        service.login = function(certificat, callback){
            $http.post(config.API_URL + '/connexion', certificat).success(callback).error(error);
        }
    }
})();