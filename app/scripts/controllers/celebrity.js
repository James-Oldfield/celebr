'use strict';

/**
 * @ngdoc function
 * @name ryanApp.controller:CelebrityCtrl
 * @description
 * # CelebrityCtrl
 * Controller of the ryanApp
 */
angular.module('ryanApp')
  .controller('CelebrityCtrl', ['$scope', '$http', 'celebrities', 'saved', '$routeParams', '$filter', function ($scope, $http, celebrities, saved, $routeParams, $filter) {

		$scope.celebs = celebrities; // whole JSON
		$scope.param  = $routeParams.celebrity; // entered parameter

		$scope.c      = $filter('filter') ($scope.celebs, function (d) {return d.uri === $scope.param;});

		// save item ng-click
		$scope.saveItem = function () {
	    $http.post('../../api/saved.json', { 'index': 3, 'name': 'test', 'price': 5.00 }).then(function () {
	    	console.log(saved);
	    });
		};

  }]);
