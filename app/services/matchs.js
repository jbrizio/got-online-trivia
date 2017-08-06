/**
 *
 * GotApp
 * @author Jonathan Brizio
 * @file matchs.js
 *
 */

(function() {
angular
  .module('GotApp')
  .factory('Matchs', Matchs);

  Matchs.$inject = ['$firebaseObject'];

  function Matchs($firebaseObject) {
    var database = firebase.database().ref();

    var functions = {
      getTotal: getTotal,
      incrementMatchs: incrementMatchs
    };

    function getTotal() {
      return $firebaseObject(database.child('matches'));
    };

    function incrementMatchs() {
      database.child('matches').transaction(function(currentValue) {
        return currentValue + 1;
      });
    };

    return functions;
  }
})();
