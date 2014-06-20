$(document).ready(function() {
  // Timings
  
  // For setInterval, the animation interval will be double this.
  var eye1 = 9000;
  var eye2 = 15700;
  var eye3 = 17000;
  var eye4 = 16800;
  var eye5 = 12000;
  var eye6 = 6000;
  
  // Option #1 - Fade in at different intervals.
  $("#eye1").hide().delay(3200).fadeIn("slow");
  $("#eye2").hide().delay(3600).fadeIn("slow");
  $("#eye3").hide().delay(4800).fadeIn("slow");
  $("#eye4").hide().delay(3800).fadeIn("slow");
  $("#eye5").hide().delay(5000).fadeIn("slow");
  $("#eye6").hide().delay(3000).fadeIn("slow");
  
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
