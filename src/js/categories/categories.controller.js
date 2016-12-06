(function(){
  'use strict';
  angular
    .module('restaurantApp')
    .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['MenuDataService'];

    function CategoriesController(MenuDataService) {
      var categoriesCtrl = this;
      categoriesCtrl.items = MenuDataService.getAllCategories().then(function(response) {
        return response.data;
      });
    }
})();