'use strict';

angular.module('webdesignApp')
  .controller('MainCtrlFr', function ($scope, $http) {
    $http.get(
        'data/lang.fr.json'
      ).success(function(data) {
        $scope.lang = data;
      });
    $http.get(
        'data/resume.fr.json'
      ).success(function(data) {
        $scope.resume = data;
      });
  });

angular.module('webdesignApp')
  .controller('MainCtrlEn', function ($scope, $http) {
    $http.get(
        'data/lang.en.json'
      ).success(function(data) {
        $scope.lang = data;
      });
    $http.get(
        'data/resume.en.json'
      ).success(function(data) {
        $scope.resume = data;
      });
  });
