(function () {
  angular
    .module('turtleApp')
    .factory('turtleRepository', turtleRepository);

  function turtleRepository($http, $rootScope) {
    var $log = $rootScope.log;

    function getTurtles() {

      return $http.get('/app/assets/data/turtles.json')
        .then(function (rsp) {
          return rsp.data;
        })
        .catch(function (err) {
          $log.e(err);
          return "turtle repo get failed!";
        });
    }
    return {
      getTurtles: getTurtles
    };
  }
})();
