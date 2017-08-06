/**
 *
 * GotApp
 * @author Jonathan Brizio
 * @file questions.js
 *
 */

(function() {
angular
  .module('GotApp')
  .factory('Questions', Questions);

  Questions.$inject = ['$firebaseObject', '$firebaseArray'];

  function Questions($firebaseObject, $firebaseArray) {
    var database = firebase.database().ref('questions');

    var functions = {
      getQuestionsBy: getQuestionsBy,
      getAll: getAll
    };

    function getQuestionsBy(id) {
      return $firebaseObject(database.child(id));
    };

    function getAll() {
      return $firebaseArray(database);
    };

    return functions;
  }
})();
