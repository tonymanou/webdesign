'use strict';

angular
  .module('webdesignApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/fr/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrlFr'
      })
      .when('/en/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrlEn'
      })
      .when('/fr/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrlFr'
      })
      .when('/en/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrlEn'
      })
      .otherwise({
        redirectTo: '/fr/'
      });
  });
