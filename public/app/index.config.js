(function () {
  angular
    .module('turtleApp')
    .config(config);

  function config($logProvider) {
    $logProvider.debugEnabled(true);
  }
})();

