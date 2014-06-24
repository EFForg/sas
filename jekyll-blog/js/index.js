$(document).ready(function() {  
  // On Click, lookup address.
  $('#lookup-submit').click(function() {
    var street = $('#lookup-street').val();
    var zip = $('#lookup-zip').val();
    if ((street.trim() != '') && (zip.trim() != '')) {
      $('#lookup-error').html('');
      smartyGetGeo(street, zip);
    }
    else {
      $('#lookup-error').html('Please enter a street address and zip code.')
    }
  });
  
  $('#new-search-link').click(function() {
    $('#reps-list-mine').toggle();
    $('#reps-list-mine-scorecards').html('');
    $('#reps-lookup').toggle();
  });
  
  $('#letter-signup-outside-us').click(function() {
    $('#country-code').toggle();
  });
  
  // Check for "Thank You" response from action center;
  var thanks = getParameterByName('thankyou');
  if (thanks == 1) {
    location.href = 'thanks/';
  }
  effRecentSigners();
  effSignupParter();
});
