'use strict';

angular.module('webdesignApp')
  .controller('AboutCtrlFr', function ($scope, $http) {
    $scope.nav = {
      'homeActive': '',
      'aboutActive': 'active'
    };

    $http.get(
        'data/lang.fr.json'
      ).success(function(data) {
        $scope.lang = data;
      });
  });

angular.module('webdesignApp')
  .controller('AboutCtrlEn', function ($scope, $http) {
    $scope.nav = {
      'homeActive': '',
      'aboutActive': 'active'
    };

    $http.get(
        'data/lang.en.json'
      ).success(function(data) {
        $scope.lang = data;
      });
  });
