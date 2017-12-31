(function () {

	angular.module('turtleApp')
		.controller('MarkController', function (matrics, answers, $scope) {
			let vm = this;
			let $log = $scope.log;

			vm.qid = 0;
			vm.answers = answers;
			vm.correctAnswers = matrics.matrics.correctAnswers;
			vm.questions = matrics.matrics.quizQuestions;
			vm.questionSel = vm.questions[vm.qid];
			vm.selectQuestion = function(qid){
				vm.qid = qid;
				vm.questionSel = vm.questions[vm.qid];
				$log.i("vm.qid:", vm.qid);
			};
			vm.isWrong = function (aid) {
				$log.i("aid:"+aid +"answer:"+vm.answers[vm.qid]+"correct answer:"+vm.correctAnswers[vm.qid]);
				if(aid == vm.answers[vm.qid] && aid != vm.correctAnswers[vm.qid])
					return true;
				else
					return false;
			}
			vm.isCorrect = function (aid) {
				if(aid == vm.correctAnswers[vm.qid]){
					return true;
				}else{
					return false
				}
			};
			let correctNum = 0;
			vm.answers.forEach(function (a, idx) {
				$log.i("a:",a,"correct:",vm.correctAnswers[idx],"idx:",idx);
				if(a == vm.correctAnswers[idx]){
					correctNum ++;
				}
			});
			vm.score = correctNum/vm.answers.length;

			$log.i("answers: ", vm.answers);
			$log.i("questions: ", vm.questions);
			$log.i("correctNum:",correctNum);
			$log.i("length:",vm.answers.length);
			$log.i("score:",vm.score);
		});
})();
