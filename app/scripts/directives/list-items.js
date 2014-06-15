'use strict';

angular.module('webdesignApp')
  .directive('resumeItem', function() {
    return {
      restrict: 'AEC',
      templateUrl: 'views/resume-item.html'
    };
  });

angular.module('webdesignApp')
  .directive('experienceItem', function() {
    return {
      restrict: 'AEC',
      templateUrl: 'views/experience-item.html'
    };
  });

angular.module('webdesignApp')
  .directive('educationItem', function() {
    return {
      restrict: 'AEC',
      templateUrl: 'views/education-item.html'
    };
  });
