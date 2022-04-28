console.log("-------------COMPOSER-CHAR-COUNTER TEST");

$(document).ready(function() {
  $('textarea').on("input", function() {
    var maxlength = $(this).attr("maxlength");
    var currentLength = $(this).val().length;

    //if state for red text adding
    if (currentLength >= maxlength) {
      return console.log("You have exceeded 140 characters.");
    }
    

    //if statement for red text removing
    //setting new value for counter below.
    $('#counterIcon').val(maxlength - currentLength);
    console.log(maxlength - currentLength + " chars left");
  });
});