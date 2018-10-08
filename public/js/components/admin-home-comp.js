"use strict";


const adminHome = {

  templateUrl: '../../js/templates/admin-home.html',

  controller: ["EstimateService", function(EstimateService) {
    const vm = this;
   


 

  vm.setClients = () => {
   EstimateService.setClients().then((response) => {
      vm.allClients = response;
        console.log(vm.allClients);
        });
  }



  vm.setClients();

  }]
};

angular
  .module("App")
  .component("adminHome", adminHome);



