'use strict';

/**
 * @ngdoc overview
 * @name ryanApp
 * @description
 * # ryanApp
 *
 * Main module of the application.
 */
angular
  .module('ryanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      // route for main page
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          celebrities: ['$http', function ($http) {
            return $http.get('/api/celebrities.json').then(function (response) {
              return response.data;
            });
          }]
        }
      })
      // route for saved items
      .when('/saved', {
        templateUrl: 'views/saved.html',
        controller: 'SavedCtrl',
        resolve: {
          saved: ['$http', function ($http) {
            return $http.get('/api/saved.json').then(function (response){
                return response.data;
            });
          }]
        }
      })
      // views for accounts
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl',
        resolve: {
          account: ['$http', function ($http) {
            return $http.get('/api/account.json').then(function (response){
                return response.data;
            });
          }]
        }
      })
      // contact route
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      // about route
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/celebrity/:celebrity', {
          templateUrl: 'views/celebrity.html',
          controller: 'CelebrityCtrl',
          resolve: {
          celebrities: ['$http', function ($http) {
            return $http.get('/api/celebrities.json').then(function (response) {
              return response.data;
            });
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
