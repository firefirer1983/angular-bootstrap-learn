(function () {

  angular
    .module('turtleApp')
    .config(routeConfig);
  function routeConfig($stateProvider, $urlRouterProvider) {
	  console.log("route config begin!");
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/app/src/main/main.html',
        controller: 'MainController',
        controllerAs: 'mainCtrl'
      })
      .state('list', {
        url: '/list',
        templateUrl: '/app/src/list/list.html',
        controller: 'ListController',
        controllerAs: 'listCtrl',
	      resolve: {
        	turtles: function (turtleRepository) {
		        return turtleRepository.getTurtles();
	        }
	      }
      })
	    .state('quiz', {
	    	url: '/quiz',
		    templateUrl: 'app/src/quiz/quiz.html',
		    controller: 'QuizController',
		    controllerAs: 'quizCtrl',
		    resolve: {
			    matrics: function (quizMatrics) {
				    return quizMatrics.getQuizMatrics();
			    }
		    }
	    })
	    .state('mark', {
		    url: '/mark',
		    templateUrl: 'app/src/mark/mark.html',
		    controller: 'MarkController',
		    controllerAs: 'markCtrl',
		    resolve: {
			    matrics: function (quizMatrics) {
				    return quizMatrics.getQuizMatrics();
			    },
			    answers: function (quizMatrics) {
				    return quizMatrics.getSubmitAnswer();
			    }
		    }
	    })
      .state('modal', {
        url: '/demo/modal',
	      templateUrl: '/app/src/components/modals/modal.html',
	      controller: 'ModalController',
	      controllerAs: 'ModalCtrl'
      })
    console.log("route config done!");
    $urlRouterProvider.otherwise('/');
  }
})();