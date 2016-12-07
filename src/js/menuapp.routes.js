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
        })
        .state('categories', {
          url: '/categories',
          templateUrl: 'states/categories.html',
          controller: 'CategoriesController',
          controllerAs: 'categoriesCtrl'
        })
        .state('categories.items', {
          url: '/categories/{item}',
          templateUrl: 'states/items-list.html',
          controller: 'ItemsController',
          controllerAs: 'itemsCtrl',
        });

    }
})();