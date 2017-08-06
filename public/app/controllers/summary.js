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
  .controller('SummaryCtrl', SummaryCtrl);

SummaryCtrl.$inject = [
  '$scope',
  '$stateParams',
  'Tableboard',
  'Questions'
];

/**
 * @name SummaryCtrl
 * @class Controllers
 * @param {String} $scope
 * @param {Object} $stateParams
 * @param {Object} Tableboard
 * @param {Object} Questions
 * @author Jonathan Brizio
 * @desc This controller is used to show at the end of the quiz the results
 */
function SummaryCtrl($scope, $stateParams, Tableboard, Questions) {
  // Get the total of correct questions
  $scope.scoreboard = $stateParams.scoreboard;
  $scope.required = true;

  // Get the total of questions
  var questionsList = Questions.getAll();
  questionsList.$loaded().then(function() {
    $scope.totalQuestions = questionsList.length;
    $scope.contentReady = true;
  }).catch(function(error) {
    console.error('Error getting the information:', error);
  });

  // Save the match on the DB
  $scope.saveMatch = function() {
  	var tableboard = Tableboard.getAll();
  	tableboard.$add({score: $scope.scoreboard, username: username.value});
  };
}
})();