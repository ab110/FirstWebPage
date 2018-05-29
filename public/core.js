var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.pug"
    })
    .when("/aboutMe", {
        templateUrl : "aboutMe.pug"
    });
});
