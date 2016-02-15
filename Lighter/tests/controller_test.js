describe('Controller', function() {
	var controller = null,
		view = null,
		model = null;

	beforeEach(function () {
		view = new View();
		model = new Model();
		controller = new Controller (model, view);
	});

	it('Should have methods show and switchColor', function () {
		expect(controller.show).toBeDefined();
		expect(controller.switchColor).toBeDefined();
	});

	it('Should be switched to yellow', function () {
		var i = null,
			color = 'yellow',
			yellowIndex = function () {
				for (i = 0; i < model.lights.length; i++) {
					if (model.lights[i].color === color) {
						return i;
					}
				}
			};

		controller.switchColor(color);

		expect(model.lights[yellowIndex()].light).toBe(true);
	});
});