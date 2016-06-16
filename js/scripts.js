$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    var celebrity1 = ("Scarlet Johansen");
    var celebrity2 = ("Melissa MCarthy")
    if (gender === 'male' && age < 30) {
      celebrity1;
    }

    $("#name").empty().append(hidden);
    $("#celebrity1").show();

    event.preventDefault();
  });
});
