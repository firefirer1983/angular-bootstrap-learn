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
			    turtles: function (turtleRepository) {
				    return turtleRepository.getTurtles();
			    },
			    matrics: function (quizMatrics) {
				    return quizMatrics.getQuizMatrics();
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