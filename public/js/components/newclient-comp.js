"use strict";


const newClient = {

  templateUrl: '../../js/templates/newClientForm.html',

  controller: ["EstimateService", function(EstimateService) {
    const vm = this;
    vm.client = {
      "name": "",
      "total":0,
      "products": ""
    };

    vm.allClients;


  vm.setProducts = ($event) => {
    console.log($event.target.id);
    let product = $event.target.id;
    // let el = $event.target;
    vm.client.products += `${product},`
    console.log(vm.client);
     angular.element($event.target).toggleClass("green");
  
  }

  vm.addClient = () => {
    // vm.client.name = client.name;
    console.log(vm.client.name);
   EstimateService.addClient(vm.client).then((response) => {
        console.log(response);
        });
  }


  }]
};

angular
  .module("App")
  .component("newClient", newClient);



