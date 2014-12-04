$(document).ready(function() {

  $("button#dog").click(function() {
    $("ul#user").prepend("<li>Woof!</li>");
    $("ul#webpage").prepend("<li>Dogs drool!</li");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });

  });

    $("button#cat").click(function() {
      $("ul#user").prepend("<li>Meow!</li>");
      $("ul#webpage").prepend("<li>Cats Stink!</li");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });

  });


})
