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

	this.returnIndexOfBookInInventory = function(key,value){
		for (var i = 0; i < this.inventory.length; i++) {
			if (this.inventory[i].key === value){
				return i;
			}else {
				return -1;
			}
		};
	}

	this.serchForBook = function(){
		var key = getUserInput("What would you like to serch by? title/author/genre");
		var value = getUserInput("Enter the " + key + " you are searching for:");
		var index = this.returnIndexOfBookInInventory(key,value);
		this.inventory[index].displayAllInfo;
		return this.userMenu;
	};



	this.addBook = function(){
		this.inventory.push(new Book(getUserInput("Enter the info for the book you want to add.\nTitle: "), getUserInput("Author: "), getUserInput("Genre: "), getUserInput("Number of pages: "), true))
	};

	this.displayInventory = function(){
		for (var i = 0; i < this.inventory.length; i++) {
			this.inventory[i].displayAllInfo();
		};
	};

	this.userMenu = function(){
		var userSelection = getUserInput(this.name + " Library\n----------------------\nChoose from the options below\n 1- Display inventory\n 2- Add book to inventory\n 3- search for book\n quit- Log off");
		switch(userSelection) {
		    case '1':
		    	console.log("Ok, display inventory.");
		        this.displayInventory();
		        return this.userMenu();
		        break;
		    case '2':
		    	console.log("Ok, add book to inventory.");
		    	this.addBook();
		        return this.userMenu();
		        break;
		    case '3':
		    	console.log("Ok, search for book.");
		    	this.serchForBook();
		        return this.userMenu();
		        break;
		    case 'quit':
		    	// var isSure = getUserInput("Are you sure you want to log off? y/n")
		    	// if (isSure === "n") {
		    	// 	return this.userMenu;
		    	// } else if (isSure === "y"){
		    		console.log("Goodbye.");
		    		break;
		    	// } else{
		    	// 	console.log("You have not entered a valid option. Try again.");
		     //    return this.userMenu();
		    	// };
		    default:
		        console.log("You have not entered a valid option. Try again.");
		        return this.userMenu();
		}
	}
}

var objectington = new Lib("Objectington");

objectington.userMenu();

// var javaScriptForDummies = new Book("JavaScript For Dummies","Mr. Dummie","non-fiction", 342, true);

// javaScriptForDummies.displayAllInfo();