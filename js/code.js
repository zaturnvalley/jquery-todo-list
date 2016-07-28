$(document).ready(function() {

  var input = $('#toDo');
  var submit = $('#button');

  $('#button').on('click', function(e) {
    e.preventDefault();
    var newListElem = $('<li></li>').text(input.val());
    var deleteButton = newListElem.append("<div class='x' style='display:inline'><i class='fa fa-times' aria-hidden='true'></i></div>");
    input.val('');

    deleteButton.on('click', function () {
      $(this).remove();
    });

    $('ul').append(newListElem);
  });

  // $( function() {
  //   $( "#sortable" ).sortable();
  //   $( "#sortable" ).disableSelection();
  // });

});