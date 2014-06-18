$(document).ready(function() {
  // Add tablesorter and properties.
  $('#reps-all-table').tablesorter({
    sortList: [[1,1]],
    headers: {
      4: {
         sorter: false,
      }
    }
  });
});
