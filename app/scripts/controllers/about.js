'use strict';

/**
 * @ngdoc function
 * @name gaeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gaeApp
 */
angular.module('gaeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
