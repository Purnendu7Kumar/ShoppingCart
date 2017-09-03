'use strict';

angular.module('cart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'public/cart/cart.html',
    controller: 'CartCtrl'
  });
}])

.controller('CartCtrl', ['$rootScope',function($rootScope) {
$rootScope.products = [
{name :"Samsung GALAXY C7 PRO (Gold, 64 GB) ₹20,000", value : 20000 , checked: false},
{name :"Samsung Galaxy J7 Pro (Black, 64 GB) ₹25,000", value : 25000 ,checked: false},
{name :"Samsung Galaxy J7 Pro (Gold, 64 GB)  (3 GB RAM) ₹30,000", value : 30000,checked: false },
{name :"Apple iPhone 6 (Gold, 32 GB) ₹30,000", value : 30000 ,checked: false},
{name :"Apple iPhone 6 (Space Grey, 32 GB) ₹35,000", value : 35000 ,checked: false},
{name :" Apple iPhone 6s Plus (Rose Gold, 32 GB) ₹10,000", value : 10000 ,checked: false}];
 $rootScope.totalValue = 0;
   $rootScope.myClick = function (product){
   if(product.checked)
  		$rootScope.totalValue = $rootScope.totalValue + product.value;
  	else 
  		$rootScope.totalValue = $rootScope.totalValue - product.value;
  }; 
}]);
