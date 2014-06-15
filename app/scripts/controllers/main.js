'use strict';

angular.module('webdesignApp')
  .controller('MainCtrlFr', function ($scope, $http, $location, $anchorScroll) {
    $scope.search = {
      'text': null
    };
    $scope.styles = {
      'homeActive': 'active',
      'aboutActive': '',
      'goToTopVisible': ''
    };
    $scope.backToTop = function () {
      //var old = $location.hash();
      $location.hash('the-top');
      $anchorScroll();
      //$location.hash(old);
    };

    // Load language data
    $http.get(
        'data/lang.fr.json'
      ).success(function(data) {
        $scope.lang = data;
      });

    // Load résumé data
    $http.get(
        'data/resume.fr.json'
      ).success(function(data) {
        $scope.resume = data;
      });
  });

angular.module('webdesignApp')
  .controller('MainCtrlEn', function ($scope, $http, $location, $anchorScroll) {
    $scope.search = {
      'text': null
    };
    $scope.styles = {
      'homeActive': 'active',
      'aboutActive': '',
      'goToTopVisible': ''
    };
    $scope.backToTop = function () {
      //var old = $location.hash();
      $location.hash('the-top');
      $anchorScroll();
      //$location.hash(old);
    };

    // Load language data
    $http.get(
        'data/lang.en.json'
      ).success(function(data) {
        $scope.lang = data;
      });

    // Load résumé data
    $http.get(
        'data/resume.en.json'
      ).success(function(data) {
        $scope.resume = data;
      });
  });
