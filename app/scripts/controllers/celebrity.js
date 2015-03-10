'use strict';

/**
 * @ngdoc function
 * @name ryanApp.controller:CelebrityCtrl
 * @description
 * # CelebrityCtrl
 * Controller of the ryanApp
 */
angular.module('ryanApp')
  .controller('CelebrityCtrl', ['$scope', 'celebrities', '$routeParams', '$filter', function ($scope, celebrities, $routeParams, $filter) {

		$scope.celebs = celebrities; // whole JSON
		$scope.param  = $routeParams.celebrity; // entered parameter

		$scope.c      = $filter('filter') ($scope.celebs, function (d) {return d.uri === $scope.param;});

  }]);
