angular.module("notes").service("loginService", function ($http, $state, tokenFatory) {
  this.login = function (loginInfo){
    return $http({
      method: "POST",
      url: "/auth/local",
      data: loginInfo
    }).then(function (result) {
      tokenFatory.setToken(result.data.token);
      $state.go("profile");
    });
  };
});
