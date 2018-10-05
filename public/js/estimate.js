// function saveForm(){
//   let info ={
//       name: $("#clientname").val(),
//       total: $("#total").val(),
//       packagesRaw: $(".packageSelected"),
//       packages: []
//   }

//   for(let package of info.packagesRaw){
//     console.log(package.id); 
//     info.packages.push(`${package.id} `);
//   }

//   console.log(info);

//   $(".output").append(`
//     <h2>Output</h2>
//     <p>Client Name: ${info.name}</p>
//     <p>Total Cost: ${info.total}</p>
//     <p>Packages: ${info.packages}</p>
//   `)

// }

// class NewClient {
//   constructor(name, total, packages)
//   {
//     this.name = name;
//     this.total = total;
//     this.packages = packages;
//   }
// }


// $(".packages p").on("click", function($event){

//   console.log($event.target);
//   let clicked = $event.target;
//   $($event.target).toggleClass("packageSelected");
// })

// $( "form" ).submit(function( event ) {
//   console.log("form is submitted!");
//   event.preventDefault();
//   saveForm();

// });