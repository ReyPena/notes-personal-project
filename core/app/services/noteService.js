angular.module("notes").service("noteService", function ($http) {
  this.showNote = function (note){
    return $http({
      method: "GET",
      url: "/api/note",
    }).then(function (result) {
      console.log("note created");
    });
  };
  this.getNote = function (id){
    return $http({
      method: "GET",
      url: "/api/note?_id=" + id,
    }).then(function (result) {
      return result.data[0];
    });
  };

});
