angular.module("notes").service("registerService", function ($http, $state) {
  this.register = function (registerInfo){
    return $http({
      method: "POST",
      url: "/api/user",
      data: registerInfo
    }).then(function (result) {
      console.log("register return", result);
      $state.go("profile");
    });
  };
});
