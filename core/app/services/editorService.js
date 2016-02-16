angular.module("notes").service("editorService", function ($http, $state) {
  this.createNote = function (note){
    return $http({
      method: "POST",
      url: "/api/note",
      data: note
    }).then(function (result) {
      console.log("note created");

    });
  };
});
