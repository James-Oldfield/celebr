'use strict';

/**
 * @ngdoc directive
 * @name ryanApp.directive:product
 * @description
 * # product
 */
angular.module('ryanApp')
  .directive('product', function () {
    return {
    // 	controller: function ($http) {
    // 		$http.jsonp('http://www.asos.com/ASOS/ASOS-Oversized-Sweatshirt-With-Colour-Block/Prod/pgeproduct.aspx?iid=4849344&cid=15246&sh=0&pge=0&pgesize=36&sort=-1&clr=Green&totalstyles=180&gridsize=3')
	   //  		.success(function (data) {
	   //  			console.log(data.responseText);
	   //  		});
				// },
      template: '<div></div>',
      restrict: 'A',
      link: function postLink(scope, element) {
        element.text('this is the product directive');
      }
    };
  });
