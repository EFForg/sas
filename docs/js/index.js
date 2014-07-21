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
    $('.share-images').hide();

  });

  $('#letter-signup-outside-us').click(function() {
    $('#country-code').toggle();
  });

  // Check for "Thank You" response from action center;
  var thanks = getParameterByName('thankyou');
  if (thanks == 1) {
    location.href = 'thanks/';
  }
  
  // Get recent signers initially and then every 10 seconds.
  effRecentSigners();
  
  // Determine if there's a signup partner and mess with dom.
  effSignupParter();
  
  $('.privacy-notice-popover').popover();
  $('.pop-over').popover();
  /* ==========================================================================
     Social counts
     ==========================================================================*/
  var shareUrl = 'https://standagainstspying.org' || window.location.href;
  $.ajax('https://act.eff.org/tools/social_buttons_count/?networks=facebook,twitter,googleplus&url=' + shareUrl, {
      success: function(res, err) {
          $.each(res, function(network, value) {
              var count = value;
              if (count / 10000 > 1) {
                  count = Math.ceil(count / 1000) + 'k'
              }
              $('[data-network="' + network + '"]').attr('count', count);
          })
      }
  });

  /* ==========================================================================
     Sharing buttons
     ==========================================================================*/
  $('body').on('click', '.fblinkthis', function(ev) {
    var link = $(ev.currentTarget);
    var url = $(link).attr("href");
    window.open(url, "Share on Facebook", "width=650,height=500");
    return false;
  });
  $( ".fblinkthis" ).click(function() {
      var url = $(this).attr("href");
      window.open(url, "Share on Facebook", "width=650,height=500");
      return false;
  })
  $( ".twlinkthis" ).click(function() {
      var url = $(this).attr("href");
      url += '&related=' + encodeURIComponent(recommendations);
      window.open(url,"Twitter","width=550,height=420");
      return false;
  })
  $( ".gpluslinkthis" ).click(function() {
      var url = $(this).attr("href");
      window.open(url,"Share on Google Plus","width=500,height=436");
      return false;
  })

  addTwitterWindowEvent();
  setInterval(function() {
    effRecentSigners();
  }, 10000);

});
