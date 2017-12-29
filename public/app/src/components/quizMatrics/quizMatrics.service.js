(function () {
  angular
    .module('turtleApp')
    .factory('quizMatrics', quizMatrics);

  function quizMatrics($http, $rootScope) {
    var $log = $rootScope.log;

    function getQuizMatrics() {

      return $http.get('/app/assets/data/matrics.json')
        .then(function (rsp) {
          return rsp.data;
        })
        .catch(function (err) {
          $log.e(err);
          return "matrics get failed!";
        });
    }
    return {
	    getQuizMatrics: getQuizMatrics
    };
  }
})();
