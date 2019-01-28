


/*
function populateField(obj){
	console.log(obj.id);
	var theField = document.getElementById(obj.id);
	theField.value = "this_is_me";
};
*/



function testField(){
	var firstInput = document.getElementById("diceField").value;
	var secondInput = document.getElementById("answerField");
	/*
	these vars are the id's of our inputs on the general page
	*/

	var holdingStringValue = ""; //stores the number values preparing them
	//to become a number in the future arrays and such

	var holdingArray = [];//holds the values sorted through

	var storageArray = [];//holds finished holding Arrays

	for(var i=0; i < firstInput.length; i++){
		var charFromInput = firstInput[i];
		if (charFromInput == 1 || charFromInput == 2 || charFromInput == 3 ||
			charFromInput == 4 || charFromInput == 5 || charFromInput == 6 ||
			charFromInput == 7 || charFromInput == 8 || charFromInput == 9 ||
			charFromInput == 0){
			holdingStringValue = holdingStringValue + charFromInput;
		} else if (charFromInput == ","){
			if (holdingStringValue != ""){
				holdingArray.push(holdingStringValue);
				holdingStringValue = "";
			};
			storageArray.push(holdingArray);
			holdingArray = [];
		} else {
			if (holdingStringValue != ""){
				holdingArray.push(holdingStringValue);
				holdingStringValue = "";
			};

			holdingArray.push(charFromInput);
		};
	};

	if (holdingStringValue != ""){ //just pushes the remaining string onto the array
				holdingArray.push(holdingStringValue);
				holdingStringValue = "";
	};

	storageArray.push(holdingArray);
	holdingArray = [];

	/*
	since firstInput is a value from a field it requires the javascript
	Number() function to convert it to a number
	*/
	
	//firstInput = Number(firstInput);

	var returningValues = ""; //graps the number from our array, and adds them together
	var storedNumber = 0; //stores total number after rolls, such as 2d4
	// 2, and 2 would equal 4... so storedNumber would equal 4 here
	var totalDiceNumber = 0; //total value of all our var storedNumber's

	for(var i=0;i < storageArray.length; i++){
		if (i >= 1){
			returningValues = returningValues + ", ";
		};

		var rollTimes = storageArray[i][0];
		var dieRolled = storageArray[i][2];

		dieRolled = Number(dieRolled);
		rollTimes = Number(rollTimes);

		

		for(var c = 0; c < rollTimes; c++){
			var rolledNumber = (Math.floor(Math.random() * dieRolled)+1);
			storedNumber += rolledNumber;
		};	
		totalDiceNumber += storedNumber;
		returningValues = returningValues + (storedNumber.toString());
		storedNumber = 0;
	};

	returningValues += " = " + (totalDiceNumber.toString());

	secondInput.value = returningValues;
};