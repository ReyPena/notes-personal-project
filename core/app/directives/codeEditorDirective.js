angular.module("notes").directive("codeEditDirective", function() {
  return {
    restrict: "AE",
    template: '<textarea ng-model="ngModel" ui-codemirror="codeEdit"></textarea><br>',
    scope: {
      language: "=",
      ngModel: "="
    },
    controller: function($scope) {

      $scope.codeEdit = {
        theme: "seti",
        lineNumbers: true,
        mode: $scope.language
      };

      // $scope.themeSeti = function() {
      //   var codeTheme = "seti";
      // };
      // $scope.themeMonokai = function() {
      //   var codeTheme = "monokai";
      // };
      // $scope.themeRubyblue = function() {
      //   var codeTheme = "rubyblue";
      // };

    }
  };
});
