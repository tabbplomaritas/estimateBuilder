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

  vm.addClient = () => {
    // vm.client.name = client.name;
    console.log(vm.client.name);
   EstimateService.addClient(vm.client.name).then((response) => {
        console.log(response);
        });
  }


  }]
};

angular
  .module("App")
  .component("newClient", newClient);



