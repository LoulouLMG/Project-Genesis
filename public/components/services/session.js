/**
 * Service de communication avec le localStorage pour interagir
 * avec les variables de l'utilisateur courant
 * @author Solofeed
 */
(function() {
  angular.module('genesis.services.session')
    .service('sessionSvc', sessionSvc);

  function sessionSvc() {

    var session = this;

    session.set = function(key, value) {
        localStorage.setItem(key, value);
    };
    session.get = function(key) {
        return localStorage.getItem(key);
    };
    session.destroy = function(key) {
        localStorage.removeItem(key);
    };
    session.clear = function() {
        localStorage.clear();
    }
  };
})();