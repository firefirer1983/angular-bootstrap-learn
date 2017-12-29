(function () {

	angular.module('turtleApp')
		.controller('ListController', function (turtles, $uibModal, $scope) {
			let vm = this;
			let $log = $scope.log;
			vm.turtles = turtles.turtles;
			vm.searchFilter = "";
			vm.open = function (select) {
        vm.turtleSel = select;
				let modalInstance = $uibModal.open({
					animation: false,
					ariaLabelledBy: 'modal-title',
					ariaDescribedBy: 'modal-body',
					templateUrl: 'modal.html',
					controller: ModalInstanceController,
					controllerAs: 'modalCtrl',
					size: 'lg',
					resolve: {
						turtleSel: function () {
							return vm.turtleSel;
						}
					}
				});

				modalInstance.result.then(function (msg) {
					$log.i('Modal cloase at: ' + new Date() + 'msg: ' + msg);
				}, function (msg) {
					$log.i('Modal dismiss at: ' + new Date() + 'msg: ' + msg);
				});
			};

		});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

	function ModalInstanceController($uibModalInstance, turtleSel) {
		let vm = this;
		vm.turtleSel = turtleSel;
    console.log("ModalInstanceController turtleSel:", turtleSel);
		vm.ok = function () {
		  console.log("instanceCtrl ==> ok!");
			$uibModalInstance.close("OK");
		};

		vm.cancel = function () {
			console.log("instanceCtrl ==> cancel!");
			$uibModalInstance.dismiss('Cancel');
		};
	}
})();
