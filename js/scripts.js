var triangle = function(length1, length2, length3) {


	if (length1 >= (length2 + length3) || length2 >= (length1 + length3) || length3 >= (length1 + length2)) {
    	
    	return false;
    }

	else if(length1 === length2 && length2 === length3) {
		return "equilateral";
	}

	else if(length1 === length2 || length2 === length3 || length1 === length3) {
		
		return "isosceles";
	}

	else if(length1 !== length2 & length2 !== length3 & length1 !== length3) {
		
		return "scalene";
	}
	
};

