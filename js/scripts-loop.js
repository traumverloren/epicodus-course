$(document).ready(function() {

  var elements = ["header", "paragraph", "image"];
  elements.forEach(function(element) {
    $("." + element).click(function() {
      alert("This is a " + element + ".");
    });
  });
});
