

//Standard.js is Javascript used in all .html pages



/*
These two functions: 
RandomColor() and textChange() are awesome, and used for the header.
Pretty much my introduction into Javascript, on my own without instruction.
Both are simple onclick() functions, that do stuff to the header
*/

function RandomColor(obj){
	var hexLetters = "0123456789ABCDEF"; //all possible letters in hex
	var newColor = "#";  //the start of the hex color ex: #000000

	for(var i = 0; i < 6; i++){
		newColor += hexLetters[Math.floor(Math.random() * 16)];
	};


	console.log("New Title Hex Color: " + newColor);
	obj.style.color = newColor;
};

function textChange(obj){
	var myId = obj.id;

	var currentText = document.getElementById("alsoKnown").innerHTML;

	var newStringArray = [
		"also known as Casual Kyle... yes i'm back...",
		"Click... Click.... Click...", 
		"Programming == Headache", 
		"So JavaScript... Easy? Kinda",
		"Made by Kyle!",
		"Gott im Himmel",
		"Bibbity Bobbity",
		"That's what I'm talking about!",
		"Bingo Bango Bongo",
		"Wait. This isn't a Minecraft splash, is it?"];

	/*This while loop varifies that the current text on the screen is not
	the same as the text that is generated. Thusly */

	while (true){
		var randomNum = (Math.floor(Math.random() * newStringArray.length));
		var newString = newStringArray[randomNum];
		if (newString == currentText){
			continue;
		} else{
			break;
		};
	};

	console.log("New Sub Title Text: " + newString);
	document.getElementById(myId).innerHTML = newString;
};



/////////////////////////////////////////////////////


/*
dropdownOver and dropdownOut are used for the dropdown box
on the side of the menu used for social media links and such
*/

function dropdownOver(){
	var hiddenBox = document.getElementsByClassName("dropdown-content");
	hiddenBox[0].style.display = 'block';
};

function dropdownOut(){
	var hiddenBox = document.getElementsByClassName("dropdown-content");
	hiddenBox[0].style.display = 'none';
};



