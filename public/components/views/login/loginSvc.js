/**
 * Service du login
 * @author Solofeed
 */
(function(){
    angular.module('genesis.services.auth')
    .service('loginSvc', [
        '$http',
        'configEnv',
        'auth',
        'errorSvc',
        loginSvc]);


    function loginSvc($http, constantes, auth, error){

        var service = this;
        
        service.signin = function(credentials, success, error){
            auth.signin({
                connection: 'Username-Password-Authentication',
                username: credentials.username,
                password: credentials.password,
                authParams: {
                    scope: 'openid name email'
                }
            }, success, error);
        }

        service.signout = function(){
            
        }
    }
})();