/**
 *
 * GotApp
 * @author Jonathan Brizio
 * @version 0.0.1
 *
 */

(function() {
'use strict';

angular
  .module('GotApp')
  .controller('CollaborateCtrl', CollaborateCtrl);

CollaborateCtrl.$inject = [
  '$scope',
  'Questions'
];

/**
 * @name CollaborateCtrl
 * @class Controllers
 * @param {String} $scope
 * @param {Object} Questions
 * @author Jonathan Brizio
 * @desc This controller is used to save on the backend the questions shared
 */
function CollaborateCtrl($scope, Questions) {
  // This function is fired when the user desire save all the information
  $scope.saveAnswer = function() {
    // Disable all the inputs after of save the changes
    $scope.disableAll = true;

    // Remove from the dom the content
    var fieldset = document.getElementById('collaborate');
    fieldset.remove();

    // Show an alert
    $scope.showSuccessAlert = true;

    // Show the homepage button
    $scope.showHomeButton = true;

    // Save on the SVC the new question added
    var questions = Questions.getAll();
    questions.$add({
      solution: $scope.colaboration.solution,
      title: $scope.colaboration.q,
      list: {
        0: $scope.colaboration.a,
        1: $scope.colaboration.b,
        2: $scope.colaboration.c
      }
    });
  }
}
})();