angular.module("notes", ["ui.router", "summernote", "ui.codemirror", "ngSanitize"], function config($httpProvider) {
  $httpProvider.interceptors.push("tokenInterceptor");
});
