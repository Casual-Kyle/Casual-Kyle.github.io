

/*
dropdownOver and dropdownOut are used for the dropdown box
on the side of the menu used for social media links and such
*/

function dropdownOver(){
	var hiddenBox = document.getElementsByClassName("dropdown-content");
	console.log(hiddenBox);
	hiddenBox[0].style.display = 'block';
};

function dropdownOut(){
	var hiddenBox = document.getElementsByClassName("dropdown-content");
	console.log(hiddenBox);
	hiddenBox[0].style.display = 'none';
};