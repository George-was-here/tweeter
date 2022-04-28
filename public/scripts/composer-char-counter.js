console.log("-------------COMPOSER-CHAR-COUNTER TEST");

$(document).ready(function() {
  $('textarea').on("input", function() {
    var maxlength = $(this).attr("maxlength");
    var currentLength = $(this).val().length;
  
    if (currentLength >= maxlength) {
      return console.log("You have exceeded 140 characters.");
    }
  
    console.log(maxlength - currentLength + " chars left");
  });
});