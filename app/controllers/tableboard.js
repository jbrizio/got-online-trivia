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
  .controller('TableboardCtrl', TableboardCtrl);

TableboardCtrl.$inject = [
  '$scope',
  'Tableboard'
];

/**
 * @name TableboardCtrl
 * @class Controllers
 * @param {String} $scope
 * @param {Object} Tableboard
 * @author Jonathan Brizio
 * @desc This controller is used to handle all the logic of the tableboard
 */
function TableboardCtrl($scope, Tableboard) {
  // Get the tableboard list
  $scope.tableboard = Tableboard.getAll();

  // Here we set to 5 the max of items to see on the view
  $scope.maxMatches = 5;

  // Hide Loader after of content loaded
  $scope.tableboard.$loaded().then(function(data) {
    $scope.contentReady = true;
  }).catch(function(error) {
    console.error('Error getting the information:', error);
  });
}
})();