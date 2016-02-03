angular.module("notes").controller("registerCtrl", function ($scope, registerService) {
  $scope.wrongPass = true;
  $scope.register = function (user) {
    console.log("click click click");
    // if ($scope.passConfirmation === $scope.User.password) {
      registerService.register(user);
    // } else {
      // $scope.wrongPass = false;
    // }
  };
});
