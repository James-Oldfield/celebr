'use strict';

/**
 * @ngdoc function
 * @name ryanApp.controller:SavedCtrl
 * @description Controlling the saved items page
 * # SavedCtrl
 * Controller of the ryanApp
 */
angular.module('ryanApp')
  .controller('SavedCtrl', ['$scope', 'saved', function ($scope, saved) {
  	$scope.products = saved;
  }]);
