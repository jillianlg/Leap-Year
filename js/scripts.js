// Business Interface
const leapYear = function(yearInput){
  if ((yearInput % 4 === 0) && (yearInput % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

// User Interface
$(document).ready(function(){
$("form#leap-year").submit(function(event){
  event.preventDefault();

  const yearInput = parseInt($("input#year").val());
  const answer = leapYear(yearInput);
  $(".input").text(yearInput);
  if (answer !== true) {
    $(".not").text("not");
    } else {
      $("not").text("");
    }
    $("#output").show();
  })
});