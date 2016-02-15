var View = (function () {
	function View () {
		this.output = $('table');

		console.log('init View');
	}

	View.prototype.createOne = function (item) {
		var defaultTemplate = '<tr data-id="{{id}}"><td>'
				+'<div>{{name}}</div>'
				+'<div>{{age}}</div>'
				+'<div>{{evaluation}}</div>'
				+'</td></tr>',
			template = defaultTemplate.replace('{{id}}', item.id);

			template = template.replace('{{name}}', item.name);
			template = template.replace('{{age}}', item.age);
			template = template.replace('{{evaluation}}', item.evaluation);

			this.view = this.view + template;
	}

	View.prototype.createAll = function (list) {
		var self = this;

		this.view = '';

		list.forEach(function (item) {
			self.createOne(item);
		});

		this.output.append(this.view);
	}

	return View;
})();