'use strict';

/**
 * @ngdoc function
 * @name ryanApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the ryanApp
 */
angular.module('ryanApp')
  .controller('AccountCtrl', ['$scope', 'account', function ($scope, account) {
  	$scope.account = account;
  }]);
