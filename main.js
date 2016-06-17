//Change first two classes to finished. Had to loop from length to 0 because altering the class also changes the class length
var readNextBook = function() {
	var currentClass = document.getElementsByClassName("current");
	for(var i = currentClass.length - 1; i >= 0; i--) {
	
  	currentClass[i].className = "finished";
	}

	//change the third book from next to current; change 4th to next
	var idIsNext = document.getElementById("next");
	idIsNext.className = "current";
	idIsNext.removeAttribute('id');
	var listItems = document.getElementsByTagName('li');
	for (var j = 0; j < listItems.length; j++) {
		if (listItems[j].className === "current") {
			j++;
			listItems[j].setAttribute('id', 'next');
			break;
		}
	}
}
readNextBook();

//Adds cool class to existing class names of li elements
//also if there are fewer than 3 paragraphs adds one with instructions
var liClassCool = function() {
  listItems = document.getElementsByTagName('li');
  for (i = 0; i < listItems.length; i++) {
    listItems[i].className += " cool"
  }
  if (document.getElementsByTagName('p').length < 3) {
  var newPara = document.createElement('p');
  newPara.textContent = "Now click on the first book(Me talk pretty)";
  document.getElementsByTagName('div')[0].appendChild(newPara);
  }
}
var button = document.querySelector('button');
button.addEventListener('click', liClassCool); //the function happens when you click the first button on the page

//Adds a new li to the first unordered list on the page
var addNewLi = function() {
	var newLi = document.createElement('li');
	newLi.textContent = "Book " + (document.getElementsByTagName('li').length + 1); //The content of the new li will be 'book ' followed by a corresponding number
	document.getElementsByTagName('ul')[0].appendChild(newLi);

}
var firstLi = document.querySelector('li');
firstLi.addEventListener('click', addNewLi); //This happens when you click the first list item on the page


var nextButton = document.querySelectorAll('button')[1];
nextButton.addEventListener('click', readNextBook);