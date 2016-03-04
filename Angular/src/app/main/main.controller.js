(function() {
  'use strict';

  angular
    .module('levelUpAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.header = "ToDo List";
    vm.newTodo = null;
    vm.btnText = 'ADD';
    vm.items = [{
        name: 'First',
        completed: true,
        id:0
      },
      {
        name: 'Second',
        completed: false,
        id:1
      }];

    vm.addItem = function (e) {
      var model = null;

      if (e.keyCode === 13 || e.type === 'click') {
        model = {
            name: vm.newTodo,
            completed: false,
            id: vm.generateId()
        };
        vm.items.push(model);
        vm.newTodo = null;
      }
    };

    vm.generateId = function () {
        return Math.floor((1+Math.random())*0x10000);
    };

    vm.delete = function (e, id) {
        var currentIndex = vm.items.indexOf(vm.items.filter(function (item){
            return item.id === parseInt(id);
        })[0]);

        vm.items.splice(currentIndex, 1);
    };

    vm.completeItem = function (e, id) {
      var currentIndex = vm.items.indexOf(vm.items.filter(function (item){
        return item.id === parseInt(id);
      })[0]);

      vm.items[currentIndex].completed = !vm.items[currentIndex].completed;
    };
  }
})();
