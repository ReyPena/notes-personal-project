angular.module("notes").service("menuService", function ($http) {

  this.isLogged =  function () {
    return $http({
      method: "GET",
      url: "/api/logged"
    }).then(function (result) {
      return result.data;
    });
  };

  this.logout =  function () {
    return $http({
      method: "GET",
      url: "/auth/logout"
    }).then(function (result) {
      console.log("logout");
    });
  };
});
