"use strict";
console.log("service is a go");

function EstimateService($http){


const addClient = (client) => {
  // for(let product of store) {
  //   if(product.id === item.id){
  //     product.added = true;

  //   }
  // }

  return $http({
    method: "POST",
    url: "/portal/clients",
    data: client
  })
}

  return {
    addClient
  };
}


angular
  .module("App")
  .factory("EstimateService", EstimateService);