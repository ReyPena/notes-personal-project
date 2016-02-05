angular.module("notes").controller("registerCtrl", function ($scope, registerService) {
  $scope.wrongPass = true;
  $scope.register = function (user) {
    if ($scope.passConfirmation === $scope.User.password) {
      registerService.register(user);
    } else {
      $scope.wrongPass = false;
    }
  };
});
