describe('View', function() {
	var view = null;

	beforeEach(function () {
			view = new View();
		});

	it('Should have methods createLight, render, switchColor',
	 function () {
		expect(view.createLight).toBeDefined();
		expect(view.render).toBeDefined();
		expect(view.switchColor).toBeDefined();
	});
});