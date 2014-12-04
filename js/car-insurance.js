$(document).ready(function() {

  $("#insurance").submit(function(event) {
    var age = parseInt($("#age").val());
    var gender = $("#gender").val();

  if (age) {
    var quote = (100 - age) * 3;
    if (gender === "male" && age < 26) {
    quote += 50;
  }

    $("#rate").empty().append(quote);
    $("#quote").show();
  } else {
    alert("Please enter your age.");
  }


  event.preventDefault();

  });
});
