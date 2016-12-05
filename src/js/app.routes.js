(function(){
  'use strict';
  angular
    .module('restaurantApp')
    .config(RoutesConfiguration);

    RoutesConfiguration.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

    function RoutesConfiguration($stateProvider, $urlRouterProvider, $locationProvider) {
      // Here goes your code
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'states/home.html'
        });

    }
})();