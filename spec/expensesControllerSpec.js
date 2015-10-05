describe('expensesController', function() {
	var $controllerConstructor,
	    scope;
	    
	beforeEach(module('app'));
	beforeEach(inject(function($controller, $rootScope){
		$controllerConstructor = $controller;
		scope = $rootScope.$new();
	}));
	
	it('should have three expense items', function(){
		var ctrl = $controllerConstructor('expensesController', {$scope : scope});
		expect(ctrl.expenseItem.length).toBe(3);
	});
});