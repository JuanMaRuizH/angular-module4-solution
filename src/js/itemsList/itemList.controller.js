(function(){
  'use strict';
  angular
    .module('restaurantApp')
    .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['$stateParams', 'MenuDataService'];

    function ItemsController($stateParams, MenuDataService){
      var itemsCtrl = this;
      itemsCtrl.category = $stateParams.category;
      MenuDataService.getItemsForCategory($stateParams.item).then(function(response) {
        itemsCtrl.item = response.data.menu_items;
        console.log('itemsCtrl.item: ', itemsCtrl.item);
        return itemsCtrl.item;
      });
      
      console.log('$stateParams: ', $stateParams + itemsCtrl);  
    }
})();