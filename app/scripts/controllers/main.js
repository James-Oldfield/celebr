'use strict';

/**
 * @ngdoc function
 * @name ryanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ryanApp
 */
angular.module('ryanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
