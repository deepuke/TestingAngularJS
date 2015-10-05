( function() {
		'use strict';

		var app = angular.module('app', ['ngRoute']);

		app.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl : 'src/app/Expense/expense.html',
				controller : 'expensesController',
				controllerAs : 'vm'
			}).when('/admin', {
				templateUrl : 'src/app/Admin/admin.html'
			}).otherwise({
				redirectTo : '/'
			});
		}]);

	}());
