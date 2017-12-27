(function () {
  angular.module('turtleApp')
    .run(runBlock);
  function runBlock($log, $rootScope) {

    $log.debug('runBlock end');
    $rootScope.log = {
      i: $log.info,
      d: $log.debug,
      e: $log.error,
      w: $log.warn
    };
  }
})();