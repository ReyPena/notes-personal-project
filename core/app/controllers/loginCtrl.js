angular.module("notes").controller("loginCtrl", function ($scope, loginService) {
  $scope.login = function (user) {
    // console.log(user);
    loginService.login(user);
  };
});
