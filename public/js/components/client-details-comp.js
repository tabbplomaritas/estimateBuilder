"use strict";

const clientDetails = {
  bindings: {
    selectedClient: '<',
  },

  templateUrl: '../../js/templates/client-details.html',

  controller: ["EstimateService", function(EstimateService) {
    const vm = this;
    // vm.selectedClient = {};
  
  //  vm.selectedClient = EstimateService.getSelectedClient().then;

  //  vm.getSelectedClient = () => {
    
  //  EstimateService.getSelectedClient().then((response) => {
  //     vm.selectedClient = response;
  //       console.log(`clicked client in details = ${vm.selectedClient}`);
  //       });
  //   }

  //   vm.getSelectedClient();



  }]
};

angular
  .module("App")
  .component("clientDetails", clientDetails);



