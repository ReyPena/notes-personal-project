angular.module("notes").controller("noteCtrl", function ($scope, $stateParams, noteService) {
  noteService.getNote($stateParams.id).then(function (response) {
      $scope.note = response;
    }
  );
});
