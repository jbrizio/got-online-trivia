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
  .controller('QuestionsCtrl', QuestionsCtrl);

QuestionsCtrl.$inject = [
  '$scope',
  'Questions',
  '$state',
  '$stateParams'
];

/**
 * @name QuestionsCtrl
 * @class Controllers
 * @param {String} $scope
 * @param {Object} Questions
 * @param {Object} $state
 * @param {Object} $stateParams
 * @author Jonathan Brizio
 * @desc This controller is used to handle all the logic of the questions
 */
function QuestionsCtrl($scope, Questions, $state, $stateParams) {
  // Get all the questions from the SVC by ID
  $scope.data = Questions.getQuestionsBy($stateParams.id);

  // Get the next question ID
  var questionsList = Questions.getAll();
  questionsList.$loaded().then(function() {
    $scope.totalQuestions = questionsList.length;
    $scope.nextQuestionId = questionsList.$keyAt($scope.counter + 1);
    $scope.contentReady = true;
  }).catch(function(error) {
    console.error('Error getting the information:', error);
  });

  // Initialize models
  $scope.lives = $stateParams.lives;
  $scope.scoreboard = $stateParams.scoreboard;
  $scope.counter = $stateParams.counter;
  $scope.answer = {
    value: null
  };

  // Function used to know if the answer selected is correct
  function correctAnswer() {
    return $scope.answer.value === $scope.data.solution;
  }

  // This function is executed each time that the user select one answer
  $scope.validateAnswer = function() {
    // Disable all the inputs after of choice an option
    $scope.onAnswerSelected = true;
    $scope.showNextButton = true;
    // Validate if the answer selected is correct
    if (correctAnswer()) {
      $scope.scoreboard = $scope.scoreboard + 1;
      $scope.showSuccessAlert = true;
    } else {
      // Show alert
      $scope.lives = $scope.lives - 1;
      // Show alert
      $scope.showDangerAlert = true;
    }
  };

  // Fired when the button to go to the next question is pressed
  $scope.nextQuestion = function() {
    // Update the counter of questions answered
    $scope.counter = $scope.counter + 1;
    if ($scope.counter == $scope.totalQuestions || $scope.lives <= 0) {
      $state.go('summary', {scoreboard: $scope.scoreboard});
    } else {
      // Move to the next state and get the next questions
      $state.go('questions', {
        id: $scope.nextQuestionId,
        scoreboard: $scope.scoreboard,
        lives: $scope.lives,
        counter: $scope.counter
      });
    }
  }
}
})();