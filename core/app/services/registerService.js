angular.module("notes").service("registerService", function ($http, $state, tokenFactory) {
  this.register = function (registerInfo){
    return $http({
      method: "POST",
      url: "/api/user",
      data: registerInfo
    }).then(function (result) {
      tokenFactory.setToken(result.data.token);
      $state.go("profile");
    });
  };
});
