describe('Model', function() {
	var model = null

	beforeEach(function () {
		model = new Model();
	});

	it('Should have methods getLights and switchColor', function () {
		expect(model.getLights).toBeDefined();
		expect(model.switchColor).toBeDefined();
	});

	it('Items should be an array', function () {
		expect(model.lights instanceof Array).toBe(true);
	});

	it('Should be switched to green', function () {
		var color = 'green',
			lastElement = model.lights.length - 1;

		model.switchColor(color);

		expect(model.lights[lastElement].light).toBe(true);
	});
});