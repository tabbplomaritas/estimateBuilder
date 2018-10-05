"use strict";
console.log("service is a go");

function EstimateService($http){

let clients;

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

const getClients = () => {
    return $http({
    method: "GET",
    url: "/portal/clients"
  }).then((response) => {
    clients = response.data;
    console.log(clients);
    return store;
  }).catch((error) => {
    console.log(error);
  })
}

  return {
    addClient,
    getClients
  };
}


angular
  .module("App")
  .factory("EstimateService", EstimateService);