'use strict';

angular.module('webdesignApp')
  .directive('resumeItem', function() {
    return {
      restrict: 'AEC',
      templateUrl: 'views/resume-item.html'
    };
  });
