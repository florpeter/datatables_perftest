'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AngularCtrl
 * @description
 * # AngularCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('AngularCtrlHTTP', function ($scope, $resource, DTOptionsBuilder, DTColumnDefBuilder, $http) {

    var vm = this;
    
    vm.dtOptions = DTOptionsBuilder.newOptions()
        .withPaginationType('simple_numbers')
        .withDisplayLength(50)
        .withOption('lengthMenu', [[10, 25, 50, 2000, -1],[10, 25, 50, 2000, "All"]])
    
//    $resource('data/objects_lite.json').query().$promise.then(function(lines) {
//        vm.resultLine = lines;
//    });
    
//    var resultLine = jsonTools.validateResponse('data/objects_lite.json');
//    $log.debug(resultLine);
    
    $http.get("data/objects_lite.json")
    .then(function(response) {
        vm.resultLine = response.data;
    });
    
  });
