"use strict";
console.log("new client comp loading");

const newClient = {

  templateUrl: '../../js/templates/newClientForm.html',

  controller: ["EstimateService", function(EstimateService) {
    const vm = this;
    vm.client = {
      name: "",
      products: [],
      total: ""
    };

    vm.allClients;


  vm.setProducts = ($event) => {
    console.log($event.target.id);
    let product = $event.target.id;
    // let el = $event.target;
    vm.client.products.push(product);
    console.log(vm.client);
     angular.element($event.target).toggleClass("productselected");
  
  }

  // vm.addClient = (client) => {
  //   console.log(client);
  //  EstimateService.addClient(client).then((response) => {
  //       console.log(response);
  //       });
  // }

  vm.getClients = () => {
    console.log("get clients in comp");
    
   EstimateService.getClients().then((response) => {
      vm.allClients = response;
        console.log(vm.allClients);
        });
  }

  vm.getClients();

  }]
};

angular
  .module("App")
  .component("newClient", newClient);



