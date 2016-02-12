angular.module("notes").directive("textEditDirective", function() {
  return {
    restrict: "E",
    template: '<summernote config="textEdit" ng-model="ngModel"></summernote>',
    scope: {
      ngModel: "="
    },
    controller: function($scope) {
      $scope.textEdit = {
        height: 300,
        toolbar: [
          ['edit', ['undo', 'redo']],
          ['headline', ['style']],
          ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
          ['fontface', ['fontname']],
          ['textsize', ['fontsize']],
          ['fontclr', ['color']],
          ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
          ['height', ['height']],
          ['table', ['table']],
          ['insert', ['link', 'hr']]
        ]
      };
    }
  };
});
