'use strict';

/**
 * @ngdoc function
 * @name ryanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ryanApp
 */
angular.module('ryanApp')
  .controller('MainCtrl', ['$scope', 'celebrities', function ($scope, celebrities) {
  	$scope.celebs = celebrities;
  }]);
