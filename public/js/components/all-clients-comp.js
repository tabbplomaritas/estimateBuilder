"use strict";
console.log("allclients comp loading");

const allClients = {

  templateUrl: '../../js/templates/all-clients.html',

  controller: ["EstimateService", function(EstimateService) {
    const vm = this;
    vm.clients;

  vm.setClients = () => {
    console.log("set clients in comp");
    
   EstimateService.setClients().then((response) => {
      vm.clients = response.data;
        console.log(vm.clients);
        });
  }


  // EstimateService.setClients().then(() => {
  //   EstimateService.getClients().then((response) => {
  //     console.log(response);
      
  //   })
  // })

  vm.setClients();

  }]
};

angular
  .module("App")
  .component("allClients", allClients);



