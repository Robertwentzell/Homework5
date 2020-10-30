/* homework 5, dynamic multiplication table
Robert Wentzell, UMass Lowell Computer Science, rwentzel@cs.uml.edu
Copyright(c) 2020 by Robert Wentzell.All rights reserved.May be
freely
copied or excerpted for educational purposes with credit to the
author.
updated by Robert Wentzell 10/ 29 / 2020
*/

// calculating the table
function table_calc() {

  var hor_start = Number(document.getElementById('horiz_start').value);
  var hor_end = Number(document.getElementById('horiz_end').value);
  var vert_start = Number(document.getElementById('vert_start').value);
  var vert_end = Number(document.getElementById('vert_end').value);

  console.log("Horizontal start: ", hor_start, "Horizontal end: ", hor_end,
              "---Vertical start: ", vert_start, "Vertical end: ", vert_end);

  // Swap beginning / ending numbers if the start is larger than the beginning.
  if (hor_start > hor_end) {
    var tmp_num = hor_start;
    hor_start = hor_end;
    hor_end = tmp_num;
  }
  if (vert_start > vert_end) {
    var tmp_num = vert_start;
    vert_start = vert_end;
    vert_end = tmp_num;
  }
  // load warning message, initialize as empty instead of doing a popup alert
  $("#warning_msg").empty();
    // load error message 
  if (hor_start < -50 || hor_end > 50 || vert_start < -50 || vert_end > 50) {
      $("#warning_msg").append("Invalid input, must be within -50 and 50");
    return;
  }

  var matrix = {};


  // Flip the inputs around if the start is greater than the end using absolute value
  var rows = Math.abs(hor_end - hor_start);
  var columns = Math.abs(vert_end - vert_start);

  // Indexes for the 2D array.
  var horz = hor_start;
  var vert = vert_start;

  for (var x = 0; x <= columns; x++) {
    var tmp_arr = [];

    for (var y = 0; y <= rows; y++) {
      // Calculate the given spot in the multiplication table.
      var calc = horz * vert;
      tmp_arr[y] = calc;
      horz++;
    }

    // Save the current row in the object.
    matrix["row" + x] = tmp_arr;

    horz = hor_start; // Reset 
    vert++;
  }

  table_fill(matrix);
  return false;
}


// filling the table
function table_fill(matrix) {
  console.log("The array looks like:\n", matrix);
  var hor_start = Number(document.getElementById('horiz_start').value);
  var hor_end = Number(document.getElementById('horiz_end').value);
  var vert_start = Number(document.getElementById('vert_start').value);
  var vert_end = Number(document.getElementById('vert_end').value);

  console.log("Horizontal start: ", hor_start, "Horizontal end: ", hor_end,
              "---Vertical start: ", vert_start, "Vertical end: ", vert_end);

  // Swap if need be (if ending number is lower than beginning )
  if (hor_start > hor_end) {
    var tmp_num = hor_start;
    hor_start = hor_end;
    hor_end = tmp_num;
  }
  // same thing here
  if (vert_start > vert_end) {
    var tmp_num = vert_start;
    vert_start = vert_end;
    vert_end = tmp_num;
  }

  // Flip the inputs around if the start is greater than the end using absolute value
  var rows = Math.abs(hor_end - hor_start);
  var columns = Math.abs(vert_end - vert_start);
  var content = "";

  // Opening table tags.
  content += "<table>";

  // First row, and put an empty spot in the top left corner.
  content += "<tr><td></td>";

  // Now fill out the rest of the first row.
  for (var a = hor_start; a <= hor_end; a++) {
    content += "<td>" + a + "</td>";
  }

  // Close the first row.
  content += "</tr>";

  // Print out the left most column using this variable.
  var vert = vert_start;

  // Fill in each row after the first.
  for (var x = 0; x <= columns; x++) {
    // Set the left most column first.
    content += "<tr><td>" + vert + "</td>";

    // Add in all the multiplication for this row.
    for (var y = 0; y <= rows; y++) {
      content += "<td>" + matrix["row" + x][y] + "</td>";
    }
    vert++;

    // Close each row.
    content += "</tr>";
  }

  // Ending table tags.
  content += "</table>";

  // Load 
  $("#multiplication_table").html(content);
}
