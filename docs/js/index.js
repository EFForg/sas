$(document).ready(function() {  
  
  function repLookup() {
    var street = $('#lookup-street').val();
    var zip = $('#lookup-zip').val();
    if ((street.trim() != '') && (zip.trim() != '')) {
      $('#lookup-error').html('');
      smartyGetGeo(street, zip);
    }
    else {
      $('#lookup-error').html('Please enter a street address and zip code.')
    }
  }
  
  // On Click, lookup address.
  $('#lookup-submit').click(function() {
    repLookup();
  });
  
  // Pressing enter inside the form = lookup
  $("#lookup-street, #lookup-zip, #lookup-submit-anchor").keyup(function (e) {
    if (e.keyCode == 13) {
      repLookup();
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
  $('.privacy-notice-popover').popover();

});
