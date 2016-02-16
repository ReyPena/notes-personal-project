angular.module("notes").config(function ($stateProvider, $urlRouterProvider) {
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
      // resolve: {
      //   token: function (tokenFactory, $state) {
      //     var token = tokenFactory.getToken();
      //     console.log(token);
      //     if (!token) {
      //       $state.go("home");
      //     }
      //   }
      // }
    })
    .state("books", {
      url: "/books",
      templateUrl: "../views/routeViews/books/books.html",
      controller: "booksCtrl"
    })
    .state("book", {
      url: "/book/:id",
      templateUrl: "../views/routeViews/book/book.html",
      controller: "bookCtrl"
    })
    .state("note", {
      url: "/note/:id",
      templateUrl: "../views/routeViews/note/note.html",
      controller: "noteCtrl"
    })
    .state("editor", {
      url: "/editor",
      templateUrl: "../views/routeViews/editor/editor.html",
      controller: "editorCtrl"
    });

  $urlRouterProvider
    .otherwise("/home");
});
