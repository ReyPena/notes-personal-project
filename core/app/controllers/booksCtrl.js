angular.module("notes").controller("booksCtrl", function ($scope) {
  
  $scope.deleteBook = function($index) {
    $scope.editors.splice($index, 1);
  };
});
