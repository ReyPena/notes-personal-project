angular.module("notes", ["ui.router", "summernote", "ui.codemirror"], function config($httpProvider) {
  $httpProvider.interceptors.push("tokenInterceptor");
});
