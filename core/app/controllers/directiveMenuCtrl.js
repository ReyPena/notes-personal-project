angular.module("notes").controller("menuCtrl", function ($scope, $rootScope, menuService, tokenFactory) {

  $rootScope.$on('$stateChangeStart',function (event, toState, toParams) {
    if(toState.name != 'login' && toState.name != 'register'){
      menuService.isLogged().then(function (result) {
        if (result === true) {
          $scope.loggin = true;
        } else {
          $scope.loggin = false;
        }
      });
    }
  });

  $scope.loggin = false;



  $scope.logout = function () {
    tokenFactory.clearToken();
    menuService.logout();
  };
});
