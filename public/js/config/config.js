"use strict";

angular
  .module("App")
  .config(($routeProvider) => {
    $routeProvider
      .when("/newclient", {
        template: `<new-client></new-client>`
      })
      .when("/adminhome", {
        template: `<admin-home></admin-home>`
      })
      .when("/allclients", {
        template: `<all-clients></all-clients>`
      })
      .otherwise({
        redirectTo: "/adminhome"
      });
  });