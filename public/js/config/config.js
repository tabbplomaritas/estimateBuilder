"use strict";

angular
  .module("App")
  .config(($routeProvider) => {
    $routeProvider
      .when("/newclient", {
        template: `<new-client></new-client>`
      })
      .otherwise({
        redirectTo: "/newclient"
      });
  });