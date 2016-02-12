var View = (function () {
    function View () {
        console.log('init view');

        this.wrapper = $('.wrapper');
    }

    View.prototype.createLight = function (item) {
        var defaultTemplate = '<div id="{{id}}" class="{{class}}"></div>',
            template = defaultTemplate.replace('{{id}}', item.color);

        template = template.replace('{{class}}', item.light);
        this.view = this.view + template;
    };

    View.prototype.render = function (items) {
        var self = this;

        this.view = '';

        items.forEach(function (item) {
            self.createLight(item);
        });

        this.wrapper.html(this.view);
    };

    View.prototype.switchColor = function (handler) {
        var self = this;

        this.wrapper.on('click', function (e) {
            if ($(e.target).hasClass('wrapper')) {
                return;
            }

            handler($(e.target).attr('id'));
        });
    };

    return View;
})();
