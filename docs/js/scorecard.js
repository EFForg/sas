var scorecardTextExtraction = function(node) {
  if (node.childNodes.length > 1) {
    return node.childNodes[1].innerHTML;
  }
  if (node.innerHTML == '?') {
    return 'G';
  }
  if (node.innerHTML == '') {
    return 'H';
  }
  return node.innerHTML;
}

$(document).ready(function() {
  // Add tablesorter and properties.
  $('#scorecard-body').html(sasDisplayAllReps());
  $('#scorecard-table').tablesorter({
    widgets: ['zebra'],
    textExtraction: scorecardTextExtraction,
    sortList: [[3,0]],
    headers: {
      4: {
         sorter: false,
      }
    }
  });
  addTwitterWindowEvent();
  $('#scorecard td.name').css('cursor', 'pointer').click(function() { $('.details', this).slideToggle(); });
  $('#scorecard td.grade').css('cursor', 'pointer').click(function() { $('.details', $(this).parent()).slideToggle(); });
});
