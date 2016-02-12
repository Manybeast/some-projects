var View = (function () {
	function View () {
		this.name = $('#name');
		this.age = $('#age');
		this.evaluation = $('#evaluation');
		this.wrapper = $('wrapper');

		console.log('init View');
	}

	View.prototype.createOne = function (item) {
		var defaultTemplate = '<li data-id="{{id}}"><div>{{name}}</div>'
				+'<div>{{age}}</div>'
				+'<div>{{evaluation}}</div>'
				+'</li><hr/>',
				template = defaultTemplate.replace('{{id}}', item.id);

		template = template.replace('{{name}}', item.name);
		template = template.replace('{{age}}', item.age);
		template = template.replace('{{evaluation}}', item.evaluation);

		this.view = this.view + template;
	};

	View.prototype.createAll = function (list) {
		var self = this;

		this.view = '';

		list.forEach(function (item) {
			self.createOne(item);
		});

		this.wrapper.html(this.view);
	};

	return View;
})();
