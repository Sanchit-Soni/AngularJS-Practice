var app = angular.module("myMod", ["ngRoute"]);
console.log("hello ");

app.config(function ($routeProvider) {
  $routeProvider
    .when("/page1", {
      templateUrl: "views/page1.html",
    })
    .when("/page2", {
      templateUrl: "views/page2.html",
    })
    .when("/page3", {
      templateUrl: "views/page3.html",
    })
    .otherwise({
      redirectTo: "testing.html",
    });
});
