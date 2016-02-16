angular.module("notes").controller("menuCtrl", function ($scope, menuService, tokenFactory) {
  $scope.loggin = false;

  menuService.isLogged().then(function (result) {
    if (result === true) {
      $scope.loggin = true;
    } else {
      $scope.loggin = false;
    }
  });

  $scope.logout = function () {
    tokenFactory.clearToken();
    menuService.logout();
  };
});
