var scorecardTextExtraction = function(node) {
  if (node.childNodes.length > 1) {
    return node.childNodes[1].innerHTML;
  }
  if (node.innerHTML == '?') {
    return 'G';
  }
  return node.innerHTML;
}

$(document).ready(function() {
  // Add tablesorter and properties.
  $('#scorecard-body').html(sasDisplayAllReps());
  $('#scorecard-table').tablesorter({
    widgets: ['zebra'],
    textExtraction: scorecardTextExtraction,
    sortList: [[1,0]],
    headers: {
      4: {
         sorter: false,
      }
    }
  });
  addTwitterWindowEvent();
});
