(function() {
	'use strict';

	angular.module('app').controller('expensesController', expensesController);

	expensesController.$inject = ['expensesDataService'];

	function expensesController(expensesDataService) {
		var vm = this;

		vm.activate = activate;
		vm.expenseItem = [];

		activate();

		function activate() {
			return vm.expenseItem = expensesDataService.getExpenses();
		}

	}

})();
