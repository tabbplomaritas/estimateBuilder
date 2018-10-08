"use strict";

function EstimateService($http){

let clients;
let selectedClient;

const addClient = (client) => {

  return $http({
    method: "POST",
    url: "/clients",
    data: client
  })
}

const setClients = () => {
  
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

const setSelectedClient = (clickedClient) => {
  selectedClient = clickedClient;
  console.log(selectedClient);
  return selectedClient;
}

const getSelectedClient = () => {
  return selectedClient;
}

  return {
    addClient,
    setClients,
    getClients, 
    setSelectedClient,
    getSelectedClient
  };
}


angular
  .module("App")
  .factory("EstimateService", EstimateService);