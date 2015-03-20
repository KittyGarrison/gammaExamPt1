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

function Lib(name){
	this.name = name;
	this.inventory = [];

	this.addBook = function(){
		this.inventory.push(new Book(getUserInput("Enter the info for the book you want to add.\nTitle: "), getUserInput("Author: "), getUserInput("Genre: "), getUserInput("Number of pages: "), true))
	};

	this.displayInventory = function(){
		for (var i = 0; i < this.inventory.length; i++) {
			this.inventory[i].displayAllInfo();
		};
	}

}

var objectington = new Lib("Objectington");

objectington.addBook();
objectington.addBook();
console.log(objectington.inventory)
objectington.displayInventory();

// var javaScriptForDummies = new Book("JavaScript For Dummies","Mr. Dummie","non-fiction", 342, true);

// javaScriptForDummies.displayAllInfo();