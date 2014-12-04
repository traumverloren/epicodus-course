$(document).ready(function() {

  $("form").submit(function(event) {
    var yourTextInput = $("input#yourText").val().toUpperCase();
    $(".yourText").text(yourTextInput);
    $("#yourAnswer").show();

    event.preventDefault();

  });

});
