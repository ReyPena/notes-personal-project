angular.module("notes").service("loginService", function ($http, $state) {
  this.login = function (loginInfo){
    return $http({
      method: "POST",
      url: "/auth/local",
      data: loginInfo
    }).then(function (result) {
      console.log("login return" , result);
      $state.go("profile");
    });
  };
});
