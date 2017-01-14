// var todoApp = angular.module('todoApp', ['ui.router','ui.bootstrap']);
//
// todoApp.config(function($stateProvider, $urlRouterProvider){
//     $urlRouterProvider.otherwise('/create');
//     $stateProvider
//       .state('home', {
//          url: '/home',
//          //template: 'Create view'
//          templateURL: 'partial-home.html',
//       })
//       .state('about', {
//          url: '/about',
//          //template: 'List view'
//          templateURL: 'partial-about.html',
//       });
// });

  // .controller('tabCtrl', function($scope, $location, $log) {
  //      $scope.selectedIndex = 0;
  //
  //      $scope.$watch('selectedIndex', function(current, old) {
  //          switch (current) {
  //              case 0:
  //                  $location.url("/templates/create.html");
  //                  break;
  //              case 1:
  //                  $location.url("/templates/list.html");
  //                  break;
  //          }
  //       });
  // })

// todoApp.controller('TodoListController', function() {
//   var todoList = this;
//   todoList.todos = [];
//
//   todoList.todoPriority='normal';
//   todoList.addTodo = function() {
//     todoList.todos.push({text: todoList.todoText, priority: todoList.todoPriority, deadline: todoList.todoDeadline, done:false});
//     todoList.todoText = '';
//     todoList.todoPriority='normal';
//     todoList.todoDeadline='';
//   };
//
//   todoList.remaining = function() {
//     var count = 0;
//     angular.forEach(todoList.todos, function(todo) {
//        count += todo.done ? 0 : 1;
//        });
//     return count;
//   };
//
//   todoList.archive = function() {
//     var oldTodos = todoList.todos;
//     todoList.todos = [];
//     angular.forEach(oldTodos, function(todo) { if (!todo.done) todoList.todos.push(todo); });
//   };
// }); // closes todoApp.Controller

  var todoApp = angular.module('todoApp', ['ui.router']);
  todoApp.config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/create');

      $stateProvider

          // HOME STATES AND NESTED VIEWS ========================================
          .state('create', {
              url: '/create',
              templateUrl: 'templates/create.html',
              controller: 'TodoListController'
          })
      //     // nested list with custom controller
      // .state('home.list', {
      //     url: '/list',
      //     templateUrl: 'partial-home-list.html',
      //     controller: function($scope) {
      //         $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
      //     }


      // nested list with just some random string data
      // .state('home.paragraph', {
      //     url: '/paragraph',
      //     template: 'I could sure use a drink right now.'
      // })

      // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
      .state('list', {

          url: '/list',
          templateURL: 'templates/list.html'
          // views: {
          //
          // // the main template will be placed here (relatively named)
          // '': { templateUrl: 'templates/list.html' },
          //
          // // the child views will be defined here (absolutely named)
          // 'columnOne@about': { template: 'Look I am a column!' },
          //
          // // for column two, we'll define a separate controller
          // 'columnTwo@about': { template: 'I am column two',  }
        })
     //});
  }); // closes $routerApp.config()
