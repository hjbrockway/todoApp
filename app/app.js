var todoApp = angular.module('todoApp', ['ui.router']);

todoApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/create');

    $stateProvider
      .state('create', {
            url: '/create',
            templateUrl: 'templates/create.html',
      })

      .state('viewList', {
            url: '/list',
            templateUrl: 'templates/list.html',
      });
});


todoApp.controller('TodoListController', function() {
  var todoList = this;
  todoList.todos = [];

  todoList.todoPriority='normal';
  todoList.addTodo = function() {
    todoList.todos.push({text: todoList.todoText, priority: todoList.todoPriority, deadline: todoList.todoDeadline, done:false});
    todoList.todoText = '';
    todoList.todoPriority='normal';
    todoList.todoDeadline='';
  };

  todoList.remaining = function() {
    var count = 0;
    angular.forEach(todoList.todos, function(todo) {
       count += todo.done ? 0 : 1;
       });
    return count;
  };

  todoList.archive = function() {
    var oldTodos = todoList.todos;
    todoList.todos = [];
    angular.forEach(oldTodos, function(todo) { if (!todo.done) todoList.todos.push(todo); });
  };
}); // closes todoApp.Controller
