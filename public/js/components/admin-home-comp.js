"use strict";
console.log("admin-home comp loading");

const adminHome = {

  templateUrl: '../../js/templates/admin-home.html',

  controller: ["EstimateService", function(EstimateService) {
    const vm = this;
   


 

  vm.setClients = () => {
    console.log("set clients in comp");
    
   EstimateService.setClients().then((response) => {
      vm.allClients = response;
        console.log(vm.allClients);
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
  .component("adminHome", adminHome);



