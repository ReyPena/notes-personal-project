angular.module("notes").config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "../views/routeViews/home/home.html"
    })
    .state("login", {
      url: "/login",
      templateUrl: "../views/routeViews/auth/login.html",
      controller: "loginCtrl"
    })
    .state("register", {
      url: "/register",
      templateUrl: "../views/routeViews/auth/register.html",
      controller: "registerCtrl"
    })
    .state("profile", {
      url: "/profile",
      templateUrl: "../views/routeViews/profile/profile.html",
      resolve: {
        token: function(tokenFactory, $state) {
          var token = tokenFactory.getToken();
          if (!token) {
            $state.go("/#/home");
          }
        }
      }
    })
    .state("books", {
      url: "/books",
      templateUrl: "../views/routeViews/books/books.html",
      controller: "booksCtrl",
      resolve: {
        token: function(tokenFactory, $state) {
          var token = tokenFactory.getToken();
          if (!token) {
            $state.go("/#/home");
          }
        }
      }
    })
    .state("book", {
      url: "/book/:id",
      templateUrl: "../views/routeViews/book/book.html",
      controller: "bookCtrl",
      resolve: {
        token: function(tokenFactory, $state) {
          var token = tokenFactory.getToken();
          if (!token) {
            $state.go("/#/home");
          }
        }
      }
    })
    .state("note", {
      url: "/note/:id",
      templateUrl: "../views/routeViews/note/note.html",
      controller: "noteCtrl",
      resolve: {
        token: function(tokenFactory, $state) {
          var token = tokenFactory.getToken();
          if (!token) {
            $state.go("/#/home");
          }
        }
      }
    })
    .state("editor", {
      url: "/editor",
      templateUrl: "../views/routeViews/editor/editor.html",
      controller: "editorCtrl",
      resolve: {
        token: function(tokenFactory, $state) {
          var token = tokenFactory.getToken();
          if (!token) {
            $state.go("/#/home");
          }
        }
      }
    });

  $urlRouterProvider
    .otherwise("/home");
});
