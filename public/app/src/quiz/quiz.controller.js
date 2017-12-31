(function () {

	angular.module('turtleApp')
		.controller('QuizController', function (matrics, $scope, quizMatrics) {
			let vm = this;
			let $log = $scope.log;
			vm.qid = 0;
			vm.answers = matrics.matrics.correctAnswers;
			vm.questions = matrics.matrics.quizQuestions;
			vm.questionSel = vm.questions[vm.qid];
			vm.questionAnswerNum = 0;
			vm.finalize = false;
			vm.nextQuestion= function (qid) {
				$log.i("qid:", qid, "length:", vm.answers.length, "selected:", vm.questionSel.selected);
				$log.i("num:", vm.questionAnswerNum);
				if(vm.questionAnswerNum >= vm.answers.length){
					vm.finalize = true;
					return 0;
				}
				vm.qid = qid;
				do{
					vm.qid = vm.qid+1 < vm.answers.length?vm.qid+1:0;
					vm.questionSel = vm.questions[vm.qid];
					$log.i("qid:",qid, "selected:", vm.questionSel.selected);

				}while(vm.questionSel.selected != null)
			};
			vm.selectAnswer = function (pid) {
				if(vm.questionSel.selected == null){
					vm.questionAnswerNum ++;
				}
				vm.questionSel.selected = pid;
				$log.i("selected:", vm.questionSel.selected, "num:", vm.questionAnswerNum);
			};
			vm.selectQuestion = function(qid){
				vm.qid = qid;
				vm.questionSel = vm.questions[vm.qid];
				$log.i("vm.qid:", vm.qid);
			};
			vm.submit = function () {
				let answers_to_submit = [];
				vm.questions.forEach(function (q) {
					answers_to_submit.push(q.selected - 1);
					$log.i("selected:", q.selected);
				});
				quizMatrics.submitAnswer(answers_to_submit);
			};
			$log.i("answers: ", vm.answers);
			$log.i("questions: ", vm.questions);
		});
})();
