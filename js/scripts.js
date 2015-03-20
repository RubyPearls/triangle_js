var triangle = function(length1, length2, length3) {


	if (length1 >= (length2 + length3) || length2 >= (length1 + length3) || length3 >= (length1 + length2)) {
    	
    	return "inexistent shape";
    }

    else if(length1 === length2 && length2 === length3 && length3 === length1) {
		
		return "equilateral";
	}

	else if(length1 === length2 || length2 === length3 || length1 === length3) {
		
		return "isosceles";
	}

	else if(length1 !== length2 && length2 !== length3 && length1 !== length3) {
		
		return "scalene";
	}
	
};



$(function() {
  $("form#triangle").submit(function(event) {

     var length1 = parseInt($("#length1").val());
     var length2 = parseInt($("#length2").val());
     var length3 = parseInt($("#length3").val());

     var result = triangle(length1, length2, length3);

    $(".tritype").text(result)


    $("#result").show();

    event.preventDefault();
  });
});
