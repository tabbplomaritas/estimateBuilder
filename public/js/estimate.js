function saveForm(){
  let info ={
      name: $("#clientname").val(),
      total: $("#total").val(),
      packages: $(".packageSelected")
  }

  const addRes = new NewRes
  (info.name, info.phone, info.partySize, info.bookedTable);

  myResTracker.reservations.push(addRes);
  console.log(`***${myResTracker.reservations[0]}`)



  $(`#${tableNumber}`).addClass("reserved").removeClass("available");
  
  console.log(`
  Your new reservation details are:
      name: ${info.name},
      phone: ${info.phone},
      partySize: ${info.partySize},
      bookedTable: ${tableNumber}
  `);

  hideForm();
  resetFormValues();

}

function resetFormValues(){
  $("input[type=text], textarea").val("");
}