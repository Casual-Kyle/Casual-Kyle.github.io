


/*
function populateField(obj){
	console.log(obj.id);
	var theField = document.getElementById(obj.id);
	theField.value = "this_is_me";
};
*/



function diceRoller(){
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



function statGenRandom(obj){
	var buttonPressed = obj.id;

	var strengthNum 	= document.getElementById("strNum");
	var constitutionNum = document.getElementById("conNum");
	var dexterityNum 	= document.getElementById("dexNum");
	var intelligenceNum = document.getElementById("intNum");
	var charismaNum 	= document.getElementById("chaNum");
	var wisdomNum 		= document.getElementById("wisNum");

	var strengthBtn 	= document.getElementById("strBtn").id;
	var constitutionBtn = document.getElementById("conBtn").id;
	var dexterityBtn 	= document.getElementById("dexBtn").id;
	var intelligenceBtn = document.getElementById("intBtn").id;
	var charismaBtn 	= document.getElementById("chaBtn").id;
	var wisdomBtn 		= document.getElementById("wisBtn").id;

	var allBtn 	= document.getElementById("allStatsBtn").id;

	//console.log(buttonPressed, allBtn);

	function threeDiceTotal(){
		var rolledNumbers = [];
		for (var i = 0; i < 4; i++){
			var rollNum = (Math.floor(Math.random()*6)) + 1
			rolledNumbers.push(rollNum);
		};
		rolledNumbers = rolledNumbers.sort(function(a,b){return b-a});
		//console.log(rolledNumbers);

		rolledNumbers.pop();
		//console.log(rolledNumbers);

		var statNum = (rolledNumbers[0]) + (rolledNumbers[1]) + (rolledNumbers[2]); 
		return statNum;
	};



	var strStat = strengthNum.innerHTML;
	var conStat = constitutionNum.innerHTML;
	var dexStat = constitutionNum.innerHTML;
	var intStat = constitutionNum.innerHTML;
	var chaStat = constitutionNum.innerHTML;
	var wisStat = constitutionNum.innerHTML;


	if (buttonPressed == allBtn){
		var btnArray = [strengthNum,
						constitutionNum,
						dexterityNum,
						intelligenceNum,
						charismaNum,
						wisdomNum];
		for (var c = 0; c < 6; c++){
			var statHTML 	= btnArray[c];
			var statNum 	= threeDiceTotal();
			statHTML.innerHTML = statNum;

			if (c == 0){
				strStat = statNum;
			} else if (c == 1){
				conStat = statNum;
			} else if (c == 2){
				dexStat = statNum;
			} else if (c == 3){
				intStat = statNum;
			} else if (c == 4){
				chaStat = statNum;
			} else if (c == 5){
				wisStat = statNum;
			};

		};

	} else {

		var statNum = threeDiceTotal();

		if (buttonPressed == strengthBtn){
			//console.log("strengthBtn was pressed");
			strengthNum.innerHTML = statNum;
			
		} else if (buttonPressed == constitutionBtn){
			//console.log("constitutionBtn was pressed");
			constitutionNum.innerHTML = statNum;
			
		} else if (buttonPressed == dexterityBtn){
			//console.log("dexterityBtn was pressed");
			dexterityNum.innerHTML = statNum;
			
		} else if (buttonPressed == intelligenceBtn){
			//console.log("intelligenceBtn was pressed");
			intelligenceNum.innerHTML = statNum;
			
		} else if (buttonPressed == charismaBtn){
			//console.log("charismaBtn was pressed");
			charismaNum.innerHTML = statNum;
			
		} else if (buttonPressed == wisdomBtn){
			//console.log("wisdomBtn was pressed");
			wisdomNum.innerHTML = statNum;
			
		};


		strStat = strengthNum.innerHTML;
		conStat = constitutionNum.innerHTML;
		dexStat = dexterityNum.innerHTML;
		intStat = intelligenceNum.innerHTML;
		chaStat = charismaNum.innerHTML;
		wisStat = wisdomNum.innerHTML;


		




	};

	console.log("Stats: ", strStat, conStat, dexStat, intStat, chaStat, wisStat);
	

	var statArray = [strStat,
						conStat,
						dexStat,
						intStat,
						chaStat,
						wisStat];


	console.log("statArray: ", statArray);


	statArray.sort(function(a,b){return b-a});
	console.log("sorted array: ", statArray);

	var highestStat = statArray[0];
	var highStatsArray = []; //might be relevant, maybe not
	console.log("highest: ", highestStat)

	var secHighestStat = 0
	var secHighStatsArray = []; //might be relevant, maybe not

	if (statArray[1] == highestStat){
		if (statArray[2] == highestStat){
			secHighestStat = statArray[3];
		} else {
			secHighestStat = statArray[2];
		};
		
	} else {
		secHighestStat = statArray[1];
	};


	for (var x = 0; x < 6; x++){
		if (statArray[x] == highestStat){
			console.log("stat vs, highest stat: ", statArray[x], highestStat);
			highStatsArray.push(statArray[x]);
		};

		if (statArray[x] != highestStat && statArray[x] == secHighestStat){
			console.log("secStat vs, second stat: ", statArray[x], secHighestStat);
			secHighStatsArray.push(statArray[x]);
		};
	};




	console.log("High Stats: ", highStatsArray);
	console.log("Secon High: ", secHighStatsArray);

	/*
		basically if highestStat == strStat
			if secondHigh stat == conStat
				barbarian
			elif secondHigh stat == wisStat
				paladin
			elif secondHigh stat == intStat
				fighter - arcane?
	*/


};
