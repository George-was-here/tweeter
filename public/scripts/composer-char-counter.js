console.log("-------------COMPOSER-CHAR-COUNTER TEST");

$(document).ready(function() {
  $('textarea').on("input", function() {
    let maxlength = $(this).attr("maxlength");
    let currentLength = $(this).val().length;

    //if state for red text adding
    // if (currentLength >= maxlength) {
    //   console.log("You have exceeded 140 characters.");
    // }

    // if ($('#counterIcon').val(currentLength > 0)) {
    //   console.log("HEY GUYS!!!!")
    //   $('#counterIcon').removeClass("red-text");
    // }
  // } else if ($('#counterIcon').val(currentLength < 0)) {
  //     $('#counterIcon').addClass("red-text");
  // }
  
    // $('#counterIcon').toggleClass("red-text", $('#counterIcon').val(currentLength > 0)); 
    //if statement for red text removing
    //setting new value for counter below.
    $('#counterIcon').val(140 - currentLength);
    console.log(maxlength - currentLength + " chars left");



  });
});