angular.module("notes").directive("menuDirective", function () {
  return {
    restrict: "E",
    templateUrl:"../views/directivesViews/menu.html",
    controller: "menuCtrl"
  };
});
