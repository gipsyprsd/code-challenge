var sampleapp = angular.module('myListApp', ['ngRoute']);

sampleapp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'table.html',
        controller: 'myListCtrl'
    }).otherwise({
        redirectTo: '/'
    });
}]).factory('dataFactory', function($rootScope) {
    var listItems = [
      {
         "name":"Chocolate Chip",
         "price":"$2.49",
         "category":"Standard"
      },
      {
         "name":"Sugar",
         "price":"$1.79",
         "category":"Standard"
      },
      {
         "name":"Snickerdoodle",
         "price":"$2.49",
         "category":"Standard"
      },
      {
         "name":"Oatmeal Raisin",
         "price":"$2.99",
         "category":"Standard"
      },
      {
         "name":"Peanut Butter",
         "price":"$2.99",
         "category":"Standard"
      },
      {
         "name":"White Chocolate Macadamia",
         "price":"$3.99",
         "category":"Premium"
      },
      {
         "name":"Red Velvet",
         "price":"$3.49",
         "category":"Premium"
      },
      {
         "name":"Black and White",
         "price":"$3.49",
         "category":"Premium"
      },
      {
         "name":"Triple Chocolate",
         "price":"$3.99",
         "category":"Premium"
      },
      {
         "name":"White Chocolate Coconut Divine",
         "price":"$5.99",
         "category":"Signature"
      },
      {
         "name":"Dark Chocolate Pistachio Sea Salt",
         "price":"$5.49",
         "category":"Signature"
      },
      {
         "name":"Brown Butter Bourbon Spice",
         "price":"$5.49",
         "category":"Signature"
      },
      {
         "name":"Bacon Chocolate Chip",
         "price":"$5.99",
         "category":"Signature"
      }];
    var itemsService = {};
    
    itemsService.list = function() {
        return listItems;
    };
    return itemsService;
}).run(function($rootScope) {
    
  });;

  