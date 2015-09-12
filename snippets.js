$(document).ready(function() {
  $("form#count-up-to-by").submit(function(event) {
    var countToNumber = parseInt($('input#count-to').val());
    var multiple = parseInt($('input#count-by').val());

    var output = countUpToBy(countToNumber, multiple).join(', ');

    $(".count-to").text(countToNumber);
    $(".count-by").text(multiple);

    if (!output) {
      $(".not").text("not at all a");
    } else {
      $('.output').text(output);
    }

    $("#result").show();
    event.preventDefault();
  });
});
