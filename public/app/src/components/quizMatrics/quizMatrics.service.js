(function () {
  angular
    .module('turtleApp')
    .factory('quizMatrics', quizMatrics);

  function quizMatrics($http, $rootScope) {
    var $log = $rootScope.log;
    var answers_submit = null;
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

    function submitAnswer(answers){
	    answers_submit = answers;
    }

    function getSubmitAnswer() {
      return answers_submit;
    }
    return {
	    getQuizMatrics: getQuizMatrics,
	    submitAnswer: submitAnswer,
      getSubmitAnswer: getSubmitAnswer
    };
  }
})();
