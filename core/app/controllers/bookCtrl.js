angular.module("notes").controller("bookCtrl", function ($scope, $stateParams, bookService) {
  $scope.deleteBook = function() {

  };

  bookService.getBook($stateParams.id).then(function (response) {
      $scope.book = response;
    }
  );

  $scope.getAllNotes = function () {
    bookService.getNotes().then(function (response) {
      $scope.notes = response;
    });
  };

  $scope.getAllNotes();
});
