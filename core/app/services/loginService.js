angular.module("notes").service("loginService", function ($http, $state, tokenFactory) {
  this.login = function (loginInfo){
    return $http({
      method: "POST",
      url: "/auth/local",
      data: loginInfo
    }).then(function (result) {
      tokenFactory.setToken(result.data.token);
      $state.go("profile");
    });
  };
});
