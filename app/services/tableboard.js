/**
 *
 * GotApp
 * @author Jonathan Brizio
 * @file tableboard.js
 *
 */

(function() {
angular
  .module('GotApp')
  .factory('Tableboard', Tableboard);

  Tableboard.$inject = ['$firebaseArray'];

  function Tableboard($firebaseArray) {
    var database = firebase.database().ref('tableboard');

    var functions = {
      getAll: getAll
    };

    function getAll() {
      return $firebaseArray(database);
    };

    return functions;
  }
})();
