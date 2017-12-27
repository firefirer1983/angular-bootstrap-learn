(function () {
  angular
    .module('turtleApp')
    .config(routeConfig);
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .stat('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'mainCtrl'
      })
      .state('list', {
        url: '/list',
        templateUrl: 'app/list/list.html',
        controller: 'ListController',
        controllerAs: 'listCtrl'
      })
    $urlRouterProvider.otherwise('/');
  }
})();