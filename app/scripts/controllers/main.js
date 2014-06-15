'use strict';

angular.module('webdesignApp')
  .controller('MainCtrlFr', function ($scope, $http, $location, $anchorScroll) {
    $scope.vars = {
      'searchText': null,
      'currentPage': '',
      'otherLang': 'en'
    };
    $scope.styles = {
      'homeActive': 'active',
      'aboutActive': '',
      'goToTopVisible': '',
      'searchVisible': ''
    };
    $scope.backToTop = function () {
      $location.hash('the-top');
      $anchorScroll();
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
    $scope.vars = {
      'searchText': null,
      'currentPage': '',
      'otherLang': 'fr'
    };
    $scope.styles = {
      'homeActive': 'active',
      'aboutActive': '',
      'goToTopVisible': '',
      'searchVisible': ''
    };
    $scope.backToTop = function () {
      $location.hash('the-top');
      $anchorScroll();
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
