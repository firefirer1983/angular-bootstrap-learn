(function () {

	angular.module('turtleApp')
		.controller('QuizController', function (matrics, turtles, $scope) {
			let vm = this;
			let $log = $scope.log;
			vm.qid = 0;
			vm.turtles = turtles.turtles;
			vm.answers = matrics.matrics.correctAnswers;
			vm.questions = matrics.matrics.quizQuestions;
			vm.questionSel = vm.questions[vm.qid];
			vm.questionAnswer = function (qid) {
				$log.i("qid:", qid, "length:", vm.answers.length);
				vm.qid = qid+1 < vm.answers.length?qid+1:0;
				vm.questionSel = vm.questions[vm.qid];
			};
			$log.i("answers: ", vm.answers);
			$log.i("questions: ", vm.questions);

		});
})();
