"use strict";
console.log("service is a go");

function EstimateService($http){

let clients;

const addClient = (client) => {

  return $http({
    method: "POST",
    url: "/clients",
    data: client
  })
}

const setClients = () => {
  console.log("set clients in service");
  
    return $http({
    method: "GET",
    url: "/clients"
  }).then((response) => {
    clients = response.data;

    return clients
  }).catch((error) => {
    console.log(error);
  })
}

const getClients = () => {
  return clients;
}

  return {
    addClient,
    setClients,
    getClients
  };
}


angular
  .module("App")
  .factory("EstimateService", EstimateService);