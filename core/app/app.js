angular.module("notes", ["ui.router"], function config($httpProvider) {
  $httpProvider.interceptors.push('tokenFatory');
});
