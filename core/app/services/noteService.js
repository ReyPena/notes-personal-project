angular.module("notes").service("noteService", function ($http) {
  this.showNote = function (note){
    return $http({
      method: "GET",
      url: "/api/note",
      data: note
    }).then(function (result) {
      console.log("note created");
    });
  };
  this.Note = function (note){
    return $http({
      method: "DELETE",
      url: "/api/note",
      data: note
    }).then(function (result) {
      console.log("note created");
    });
  };

});
