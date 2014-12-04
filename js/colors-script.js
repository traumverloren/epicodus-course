$(document).ready(function() {

  $("#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

});
