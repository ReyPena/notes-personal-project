angular.module("notes").service("bookService", function ($http) {

  this.getBook = function(id) {
    return $http({
      method: "GET",
      url: "/api/book?_id=" + id,
    }).then(function(book) {
      return book.data[0];
    });
  };

  this.getNotes = function() {
    return $http({
      method: "GET",
      url: "/api/note",
    }).then(function(notes) {
      return notes.data;
    });
  };

  this.getNote = function(id) {
    return $http({
      method: "GET",
      url: "/api/note?_id=" + id,
    }).then(function(note) {
      return note.data[0];
    });
  };
});
