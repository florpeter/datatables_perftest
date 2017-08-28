'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'datatables', 
    'datatables.fixedheader',
    'ngResource'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/angular', {
        templateUrl: 'views/angular.html',
        controller: 'AngularCtrl',
        controllerAs: 'angularc'
      })
      .when('/angular1', {
        templateUrl: 'views/angular1.html',
        controller: 'AngularCtrl1w',
        controllerAs: 'angularc1w'
      })
    .when('/angular2', {
        templateUrl: 'views/angular2.html',
        controller: 'AngularCtrlHTTP',
        controllerAs: 'angularhttp'
      })
      .otherwise({
        redirectTo: '/'
      });
    
    // use the HTML5 History API
        $locationProvider.html5Mode(true);
  });

