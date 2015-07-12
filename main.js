angular.module('app', [])
	.controller('ctrl-goods', function($scope){		
		$scope.goods = [{title: 'Apple', price: 34}, {title: 'Strawberry', price: 76}];
		$scope.showGoods = true;		
		$scope.addProduct = function(){
			$scope.goods.push({title: 'Anyproduct', price: Math.floor((Math.random() * 100) + 1)});
		};
		$scope.getTotalGoods = function () {
		    return $scope.goods.length;
		};
		$scope.toggleView = function(){
			$scope.showGoods = $scope.showGoods ? false : true;
		};
	})
	.controller('ctrl-customers', function($scope){
		$scope.customers = [{name: 'Jorge', city: 'New-York', age: 24, avatar: '205e460b479e2e5b48aec07710c08d50'},
							{name: 'Sam', city: 'Kyiv', age: 29, avatar: 'fbd4372942c7844add4b2372ada95ec0'}];
		$scope.showCustomers = true;					
		$scope.removeItem = function(index){
			$scope.customers.splice(index, 1);
		};
		$scope.getTotalCustomers = function () {
		    return $scope.customers.length;
		};
		$scope.addCustomer = function(){
			$scope.customers.push({name: 'Anyname', city: 'New-York', age: Math.floor((Math.random() * 40) + 21), avatar: '205e460b479e2e5b48aec07710c08d50'});
		};
		$scope.toggleView = function(){
			$scope.showCustomers = $scope.showCustomers ? false : true;
		};
	})
	.filter('filterToUpperCase', function(){
		return function(item) {
			return item.toUpperCase();
		}
	});