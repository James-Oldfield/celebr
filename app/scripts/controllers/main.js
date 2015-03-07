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
  	$scope.celebs = 
  	[
  		{ 'name' : 'kim kardashian', 'uri': 'kim-kardashian'},
  		{ 'name' : 'james oldfield', 'uri': 'james-oldfield'},
  		{ 'name' : 'david beckham' , 'uri': 'david-beckham'},
  		{ 'name' : 'katie price'   , 'uri': 'katie-price'},
  		{ 'name' : 'taylor swift'  , 'uri': 'taylor-swift'}
  	];
  });
