'use strict';

var height, clickedNav = false, clickedLink = false;

/**
 * @ngdoc function
 * @name ryanApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the ryanApp
 */
angular.module('ryanApp')
  .controller('NavbarCtrl', ['$scope', function ($scope) {
  	$scope.navbarClick = function () {
  		clickedNav = !clickedNav;

  		if(clickedNav) {
  			height = '292px';
  		} else {
  			height = '71px';
  		}

  		document.body.style.marginTop = height;
  	};
  	$scope.closeNavbar = function () {
  		clickedLink = !clickedLink;
  		if(screen.width < 768) {
				if(clickedNav) {
	  			document.getElementById('js-navbar-collapse').className = 'navbar-collapse collapse';
	  			document.getElementById('js-navbar-collapse').attributes[2].nodeValue = false;
	  			height = '71px';
	  			clickedNav = !clickedNav;
	  		} else {
	  			document.getElementById('js-navbar-collapse').className = 'navbar-collapse collapse in';
	  			document.getElementById('js-navbar-collapse').attributes[2].nodeValue = true;
	  			height = '292px';
	  		}
  		document.body.style.marginTop = height;
  		}
  	};
  }]);
