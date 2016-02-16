angular.module("notes").controller("booksCtrl", function ($scope, booksService) {

  $scope.deleteBook = function($index) {

  };

  $scope.getAllBooks = function () {
    booksService.getBooks().then(function (response) {
      $scope.books = response;
    });
  };

  $scope.saveBook = function (book) {
    booksService.createBook(book);
    $scope.getAllBooks();
  };

  $scope.getAllBooks();

});
