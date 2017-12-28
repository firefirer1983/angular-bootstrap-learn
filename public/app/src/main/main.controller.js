(function () {
  angular
    .module('turtleApp')
    .controller('MainController', mainCtrl);

  function mainCtrl($scope) {
    let vm = this;
    let $log = $scope.log;
    $log.i("main Ctrl");
  }
})();