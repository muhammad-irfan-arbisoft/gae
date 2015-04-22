'use strict';

/**
 * @ngdoc function
 * @name gaeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gaeApp
 */
angular.module('gaeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
