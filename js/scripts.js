$(document).ready(function(event) {
  $("form#celebrity").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();



    if (gender === 'male' && age < 30) {
      var celebrity = ("Scarlet Johansen");
  }     else if (gender === 'male' && (age > 30 && age < 70)) {
         var celebrity = ("Angela Basset ");
  }     else {
        var celebrity = ("Betty White");
  }


    $("#name").empty().append(celebrity);
    $("#hidden").show();

    event.preventDefault();
  });
});
