console.log("-------------COMPOSER-CHAR-COUNTER TEST");

$(document).ready(function() {
  $('textarea').on("input", function() {
    let currentLength = $(this).val().length;
    //if statement for red text removing
    $('#counterIcon').toggleClass("red-text", (140 - currentLength) < 0);
    //setting new value for counter below.
    $('#counterIcon').val(140 - currentLength);
  });
});