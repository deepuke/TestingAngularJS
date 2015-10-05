'use strict';
describe('expensesDataService', function() {
	beforeEach(module('app'));

	it('should return three expense items', inject(function(expensesDataService) {
		expect(expensesDataService.getExpenses().length).toBe(3);
	}));

	it('should return a taxi expense', inject(function(expensesDataService) {
		var expenseItems = expensesDataService.getExpenses(),
		    testExpenseItem = new ExpenseItem('Taxi', 'Test', 89.5);

		expect(expenseItems).toContain(testExpenseItem);
	}));

	describe('resonable expense', function() {

		var taxi,
		    dinner;

		beforeEach(function() {
			jasmine.addMatchers(customMatchers);
			taxi = new ExpenseItem('Taxi', 'Test', 89.5);
			dinner = new ExpenseItem('Dinner', 'Test123', 152.34);
		});

		it('taxi should be a reasonable expense', function() {
			expect(taxi).toBeAResonableExpense();
		});

		it('dinner shouldn\'t be a reasonable expense', function() {
			expect(dinner).not.toBeAResonableExpense();
		});
	});

});
