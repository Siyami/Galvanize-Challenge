// Full name: Siyami Avci
// Galvanize Full Stack Web Development Immersive Challenge
// This code returns the credit card number whose digits sum to the largest number.
// If more than one has the same largest sum of digits, it returns the last one in
// the list with that sum.

var sumCardNumber = function(number) {
	var addCCN;
	var change = 0;
	var rotation = -1;
	console.log("The sum of digits for each credit card number in sequence are below.");

	for (var i = 0; i < number.length; i++){
		addCCN = 0;
		var total = number[i];

		for (var j = 0; j < total.length; j++){

			if (total[j] <= 9 && total[j] >=0) {

				var newNum = parseInt(total[j]);
				addCCN += newNum;
			}

		}

		console.log(addCCN); // prints digits for each credit card number in sequence

		if (addCCN >= change && (i !== number.length -1)) {
			change = addCCN;
			rotation++;
		}

		else if (addCCN >= change && (i = number.length -1)) {
			change = addCCN;
			return number[i];
		}

		else if ((addCCN < change) && (i !== number.length -1)) {
			rotation++;
		}

		else if ((addCCN < change) && (i = number.length -1)) {
			return number[rotation];
		}

	}

};

sumCardNumber(['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260']);
