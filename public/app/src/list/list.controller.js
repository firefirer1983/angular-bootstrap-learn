(function () {

	angular.module('turtleApp')
		.controller('ListController', function (turtles, $uibModal, $scope) {
			let vm = this;
			let $log = $scope.log;
			let turtleSel = null;
			vm.turtles = turtles.turtles;

			vm.name = "ListControlller";
			vm.open = function (select) {
        vm.turtleSel = select;
				// $log.i("turtle selected:", vm.turtleSel);
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

				modalInstance.result.then(function (selectedItem) {
				  console.log("modal instance then:", selectedItem);
					vm.selected = selectedItem;
				}, function () {
					$log.i('Modal dismissed at: ' + new Date());
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
			$uibModalInstance.close();
		};

		vm.cancel = function () {
			console.log("instanceCtrl ==> cancel!");
			$uibModalInstance.dismiss('cancel');
		};
	}
})();
