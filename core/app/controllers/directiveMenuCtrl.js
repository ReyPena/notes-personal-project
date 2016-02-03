angular.module("notes").controller("menuCtrl", function ($scope, menuService, tokenFatory) {
  $scope.notlog = true;
  $scope.logout = function () {
    tokenFatory.setToken();
    menuService.logout();
  };
});
