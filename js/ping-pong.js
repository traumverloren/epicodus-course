$(document).ready(function() {

  var yourNumber = parseInt(prompt("Enter a number."));
  for (var index = 1; index <= yourNumber; index +=1) {
    if (index % 5 === 0 && index % 3 === 0) {
      $("ul#result").append("<li>Ping Pong!</li>");

    } else if (index % 3 === 0) {
      $("ul#result").append("<li>Ping!</li>");

    } else if (index % 5 === 0) {
      $("ul#result").append("<li>Pong!</li>");

    } else {
      $("ul#result").append("<li>" + index + "</li>");
    }
    console.log(index);
  }

});
