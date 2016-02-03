angular.module("notes").controller("menuCtrl", function ($scope, menuService, tokenFactory) {
  $scope.notlog = true;
  $scope.logout = function () {
    tokenFactory.clearToken();
    menuService.logout();
  };
});
