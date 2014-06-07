'use strict';

angular.module('webdesignApp')
  .controller('AboutCtrlFr', function ($scope, $http) {
    $http.get(
        'data/lang.fr.json'
      ).success(function(data) {
        $scope.lang = data;
      });
  });

angular.module('webdesignApp')
  .controller('AboutCtrlEn', function ($scope, $http) {
    $http.get(
        'data/lang.en.json'
      ).success(function(data) {
        $scope.lang = data;
      });
  });
