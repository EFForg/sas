$(document).ready(function() {
  // Add tablesorter and properties.
  $('#scorecard-body').html(sasDisplayAllReps());
  $('#scorecard-table').tablesorter({
    sortList: [[1,0]],
    headers: {
      4: {
         sorter: false,
      }
    }
  });
  addTwitterWindowEvent();
});
