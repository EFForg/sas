$(document).ready(function() {
  // Timings
  
  // For setInterval, the animation interval will be double this.
  var eye1 = 2000;
  var eye2 = 4700;
  var eye3 = 1400;
  var eye4 = 2800;
  var eye5 = 3000;
  var eye6 = 2000;
  
  // Option #1 - Fade in at different intervals.
  $("#eye1").hide().delay(eye1).fadeIn("slow").addClass("eye-blink");
  $("#eye2").hide().delay(eye2).fadeIn("slow").addClass("eye-blink");
  $("#eye3").hide().delay(eye3).fadeIn("slow").addClass("eye-blink");
  $("#eye4").hide().delay(eye4).fadeIn("slow").addClass("eye-blink");
  $("#eye5").hide().delay(eye5).fadeIn("slow").addClass("eye-blink");
  $("#eye6").hide().delay(eye6).fadeIn("slow").addClass("eye-blink");
  
  // Option #2 - Fade in all at once.
  /*
  $("#eye1").hide().fadeIn("slow");
  $("#eye2").hide().fadeIn("slow");
  $("#eye3").hide().fadeIn("slow");
  $("#eye4").hide().fadeIn("slow");
  $("#eye5").hide().fadeIn("slow");
  $("#eye6").hide().fadeIn("slow");
  */
  
  setInterval(function() {
    blink('#eye1');
  }, eye1);
  setInterval(function() {
    blink('#eye2');
  }, eye2);
  setInterval(function() {
    blink('#eye3');
  }, eye3);
  setInterval(function() {
    blink('#eye4');
  }, eye4);
  setInterval(function() {
    blink('#eye5');
  }, eye5);
  setInterval(function() {
    blink('#eye6');
  }, eye6);
  
  
  function blink(selector) {
    $(selector).toggleClass("eye-blink");;
  }
});
