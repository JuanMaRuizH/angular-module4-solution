(function(){
  'use strict';
  angular
    .module('restaurantApp')
    .config(RoutesConfiguration);

    RoutesConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfiguration($stateProvider, $urlRouterProvider) {
      // Here goes your code
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'states/home.html'
        });

    }
})();