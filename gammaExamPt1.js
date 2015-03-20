var sget = require('sget');
function getUserInput(string){
	return sget(string).trim();
}

function Book(title, author, genre, length, isCheckedIn){
	this.title = title;
	this.author = author;
	this.genre = genre;
	this.length = length;
	this.isCheckedIn = isCheckedIn;
	
}