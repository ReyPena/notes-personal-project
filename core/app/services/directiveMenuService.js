angular.module("notes").service("menuService", function ($http) {
  this.logout =  function () {
    return $http({
      method: "GET",
      url: "/auth/logout"
    }).then(function (result) {
      console.log("logout");
    });
  };
});
