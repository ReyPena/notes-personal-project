angular.module("notes").controller("noteCtrl", function($scope, $stateParams, noteService) {
  $scope.note=[];
  noteService.getNote($stateParams.id).then(function(response) {
    $scope.note = response;
  });

  // $scope.codeEdit = {
  //   theme: "seti",
  //   lineNumbers: true,
  //   readOnly: "nocursor",
  //   mode: response.content[0].language
  // };

  $scope.textEdit = {
    height: 300,
    toolbar: []
  };

});
