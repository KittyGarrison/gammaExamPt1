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

	this.displayAllInfo = function(){
		console.log("\nBook Info\n----------------------\nTitle: %s\nAuthor: %s\nGenre: %s\nNumber of pages: %s\nChecked in: %s",this.title, this.author, this.genre, this.length, this.isCheckedIn)
	}
}



var javaScriptForDummies = new Book("JavaScript For Dummies","Mr. Dummie","non-fiction", 342, true);

javaScriptForDummies.displayAllInfo();