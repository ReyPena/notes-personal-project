angular.module("notes").controller("menuCtrl", function ($scope, menuService) {
  $scope.notlog = true;
  $scope.logout = function () {
    menuService.logout();
    // $window.localStorage.removeItem('jwtToken');
  };
});
