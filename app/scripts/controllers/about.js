'use strict';

/**
 * @ngdoc function
 * @name ryanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ryanApp
 */
angular.module('ryanApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
