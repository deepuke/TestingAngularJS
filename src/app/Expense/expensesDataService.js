( function() {
		'use strict';

		angular.module('app').factory('expensesDataService', expensesDataService);

		expensesDataService.$inject = ['$http'];

		function expensesDataService($http) {
			var service = {
				getExpenses : getExpenses
			};

			function getExpenses() {
				return [
					new ExpenseItem('Taxi', 'Test', 89.5), 
					new ExpenseItem('Lunch', 'Test1', 15.00), 
					new ExpenseItem('Coffee', 'Test2', 1.5)
				];
			}

			return service;

		}

	}());
