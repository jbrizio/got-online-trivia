/**
 *
 * GotApp
 * @author Jonathan Brizio
 * @file route-config.js
 *
 */

(function() {
'use strict';

angular
  .module('GotApp')
  .config(routeConfig);

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function routeConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('index', {
    url: '/',
    controller: 'HomePageCtrl',
    templateUrl: '../app/views/homepage.html'
  })
  .state('questions', {
    url: '/questions/',
    controller: 'QuestionsCtrl',
    templateUrl: '../app/views/questions.html',
    params: {
      id: 0,
      counter: 0,
      scoreboard: 0,
      lives: 3
    }
  })
  .state('summary', {
    url: '/summary/',
    controller: 'SummaryCtrl',
    templateUrl: '../app/views/summary.html',
    params: {
      scoreboard: 0
    }
  })
  .state('tableboard', {
    url: '/tableboard/',
    controller: 'TableboardCtrl',
    templateUrl: '../app/views/tableboard.html',
    params: {
      scoreboard: 0
    }
  })
  .state('collaborate', {
    url: '/collaborate/',
    controller: 'CollaborateCtrl',
    templateUrl: '../app/views/collaborate.html'
  });

  $urlRouterProvider.otherwise('/');
}
})();