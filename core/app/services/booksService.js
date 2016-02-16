angular.module("notes").service("booksService", function($http) {
  this.createBook = function(book) {
    console.log(book);
    return $http({
      method: "POST",
      url: "/api/book",
      data: book
    }).then(function(result) {
      console.log("book created");
    });
  };

  this.getBooks = function() {
    return $http({
      method: "GET",
      url: "/api/book",
    }).then(function(books) {
      return books.data;
    });
  };

  this.getBook = function(id) {
    console.log(book);
    return $http({
      method: "GET",
      url: "/api/book?_id=" + id,
    }).then(function(book) {
      return book.data[0];
    });
  };

});
