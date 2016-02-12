angular.module("notes").controller("editorCtrl", function($scope) {
  var codeTheme = "seti";

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

  // this are the functions for the themes

  $scope.themeSeti = function() {
    var codeTheme = "seti";
  };
  $scope.themeMonokai = function() {
    var codeTheme = "monokai";
  };
  $scope.themeRubyblue = function() {
    var codeTheme = "rubyblue";
  };

  $scope.note = {
    noteName: "",
    noteTag: "",
    noteArea: [{
      index: 0,
      noteType: "",
      noteText: ""
    }]
  };

  $scope.editors = [];

  $scope.foo = "im foo";

  // this add/remove new text areas
  $scope.addNewHtml = function() {
    $scope.editors.push({
      language: "text/html"
    });
  };
  $scope.addNewJS = function() {
    $scope.editors.push({
      language: "text/javascript"
    });
  };
  $scope.addNewCss = function() {
    $scope.editors.push({
      language: "text/css"
    });
  };
  $scope.addNewText = function() {
    $scope.editors.push({
      language: "text"
    });
  };
  $scope.deleteArea = function($index) {
    $scope.editors.splice($index, 1);
  };

});
