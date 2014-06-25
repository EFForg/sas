var scorecardTextExtraction = function(node) {
  return (node.childNodes.length > 1) ? node.childNodes[1].innerHTML : node.innerHTML;
}

$(document).ready(function() {
  // Add tablesorter and properties.
  $('#scorecard-body').html(sasDisplayAllReps());
  $('#scorecard-table').tablesorter({
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
