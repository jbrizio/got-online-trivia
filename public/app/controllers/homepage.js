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
  .controller('HomePageCtrl', HomePageCtrl);

HomePageCtrl.$inject = [
  '$scope',
  'Matchs',
  'Questions'
];

/**
 * @name HomePageCtrl
 * @class Controllers
 * @param {String} $scope
 * @param {Object} Matchs
 * @param {Object} Questions
 * @author Jonathan Brizio
 * @desc This controller is used to show initial information on the homepage
 */
function HomePageCtrl($scope, Matchs, Questions) {
  // Get the total of matchs created
  $scope.matchs = Matchs.getTotal();

  // Get all the questions
  var questionList = Questions.getAll();

  // Get the first element key of the array
  questionList.$loaded().then(function() {
    $scope.firstQuestionId = questionList.$keyAt(0);
  }).catch(function(error) {
    console.error('Error getting the information:', error);
  });

  // Function used to increment the counter when the button is pressed
  $scope.startMatch = function() {
  	Matchs.incrementMatchs();
  }
}
})();