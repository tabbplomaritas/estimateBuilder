"use strict";

const allClients = {

  templateUrl: '../../js/templates/all-clients.html',

  controller: ["EstimateService", function(EstimateService) {
    const vm = this;
    const clientDetails = document.querySelector(".clientDetails");
    const allClients = document.querySelector(".allClients");
    vm.clients = {};
    vm.selectedClient = {};



  vm.setSelectedClient = (selectedClient) => {
    vm.selectedClient = selectedClient;
    console.log(`Selected client is: ${client}`);
  }

  vm.setClients = () => {
    console.log("set clients in comp");
    
   EstimateService.setClients().then((response) => {
      vm.clients = response;
        console.log(vm.clients);
        }).then(()=> {
          // let products = vm.clients.products;
        console.log(vm.clients[0].products);
        for(let client of vm.clients) {
          client.products = client.products.split(",");
        } 
        })
    }

    vm.setSelectedClient = (clickedClient) => {
     
      vm.selectedClient = clickedClient;
      console.log(vm.selectedClient);
      EstimateService.setSelectedClient(clickedClient);

      angular.element(clientDetails).css("display", "block");
      angular.element(clientDetails).addClass("animated fadeIn");
      // angular.element(allClients).css("filter", "blur(2px)");
    }

    // vm.setProducts();
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



