(function() {
  'use strict';

  angular
    .module('levelUpAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $filter) {
    var vm = this;

    vm.header = "ToDoList";
    vm.newTodo = null;
    vm.btnText = 'ADD';
    vm.activeFilter = {};
    vm.status = '';
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

    $scope.$watch(function () {
      return vm.items;
    }, function () {
      // vm.leftTask = $filter('filter')(vm.items, {completed: false}).length;
      vm.leftTask = vm.items.filter(function (item) {
        return !item.completed;
      }).length;
      vm.completedCount = vm.items.length - vm.leftTask;
    }, true);

    vm.addItem = function (e) {
      var model = null;

      if (e.type === 'click' && vm.newTodo !== '') {
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
        return Math.floor((1 + Math.random()) * 0x10000);
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

    // vm.typeOfFilter = function () {

    // };
  }
})();
