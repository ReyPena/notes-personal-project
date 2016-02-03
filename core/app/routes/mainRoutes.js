angular.module("notes").config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "../views/routeViews/home/home.html"
    })
    .state("login", {
      url: "/login",
      templateUrl: "../views/routeViews/auth/login.html"
    })
    .state("register", {
      url: "/register",
      templateUrl: "../views/routeViews/auth/register.html"
    })
    .state("profile", {
      url: "/profile",
      templateUrl: "../views/routeViews/profile/profile.html"
    })
    .state("books", {
      url: "/books",
      templateUrl: "../views/routeViews/books/books.html"
    })
    .state("book", {
      url: "/book/:id",
      templateUrl: "../views/routeViews/book/book.html"
    })
    .state("notes", {
      url: "/notes",
      templateUrl: "../views/routeViews/notes/notes.html"
    })
    .state("note", {
      url: "/note/:id",
      templateUrl: "../views/routeViews/note/note.html"
    });

  $urlRouterProvider
    .otherwise("/home");
});
