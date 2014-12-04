$(document).ready(function() {

  var age = parseInt(prompt("Please enter your age."));

  if (age > 21) {
    $('#drinks').show();
  } else if (age === 21) {
    alert("don't go crazy now!");
    $('#drinks').show();
  } else {
    $('#under-21').show();
  }

});
