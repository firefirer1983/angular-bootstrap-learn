angular.module('turtleApp')
	.controller('ModalController', function ($uibModal, $log) {
	let vm = this;
	vm.open = function () {

		let modalInstance = $uibModal.open({
			animation: false,
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			templateUrl: 'modal.html',
			controller: 'ModalInstanceController',
			controllerAs: 'instanceCtrl',
			size: 'sm',
			resolve: {
				items: function () {
					return vm.items;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			vm.selected = selectedItem;
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('turtleApp').controller('ModalInstanceController', function ($uibModalInstance) {
	let instanceCtrl = this;

	instanceCtrl.ok = function () {
		$uibModalInstance.close();
	};

	instanceCtrl.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
});
