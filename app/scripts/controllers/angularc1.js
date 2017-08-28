'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AngularCtrl
 * @description
 * # AngularCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('AngularCtrl1w', function ($scope, $resource, DTOptionsBuilder, DTColumnDefBuilder) {

    var vm = this;
    
    vm.dtOptions = DTOptionsBuilder.newOptions()
        .withPaginationType('simple_numbers')
        .withDisplayLength(50)
        .withOption('lengthMenu', [[10, 25, 50, 2000, -1],[10, 25, 50, 2000, "All"]])
    
    $resource('data/objects_lite.json').query().$promise.then(function(lines) {
        vm.resultLine = lines;
    });
    
  });
