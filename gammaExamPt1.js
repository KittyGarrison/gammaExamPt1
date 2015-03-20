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

	// vvvvvvvvv not working
	this.returnIndexOfBookInInventory = function(key,value){
		for (var i = 0; i < this.inventory.length; i++) {
			if (this.inventory[i].key == value){
				return i;
			}else {
				return -1;
			}
		};
	}

	this.serchForBook = function(){
		var key = getUserInput("What would you like to serch by? title/author/genre");
		var value = getUserInput("Enter the " + key + " you are searching for:");
		console.log(this.returnIndexOfBookInInventory(key,value));
		// vvvvvvvvvvv this part is not working
		//this.displayBookByIndex(this.returnIndexOfBookInInventory(key,value));
		this.displayBookByIndex(0);//test value
		return this.userMenu;
	};

	this.displayBookByIndex = function(index){
		this.inventory[index].displayAllInfo();
	}

	this.addBook = function(){
		this.inventory.push(new Book(getUserInput("Enter the info for the book you want to add.\nTitle: "), getUserInput("Author: "), getUserInput("Genre: "), getUserInput("Number of pages: "), true))
	};

	this.removeBookByTitle = function(){
		var bookToRemove = getUserInput("Enter the title of the book to be removed:")
		var index = this.returnIndexOfBookInInventory(title,bookToRemove);
		console.log(this.inventory[index].title)
		this.inventory.splice(index, 1);
		return this.userMenu();
	}

	this.displayInventory = function(){
		for (var i = 0; i < this.inventory.length; i++) {
			this.inventory[i].displayAllInfo();
		};
	};

	this.displayAllOfGenre = function(){
		var genre = getUserInput("Enter the genre you wish to display:")
		for (var i = 0; i < this.inventory.length; i++) {
			if (this.inventory[i].genre === genre){
			this.inventory[i].displayAllInfo();
			}
		return this.userMenu()	
		};
	}

	this.userMenu = function(){
		var userSelection = getUserInput(this.name + " Library\n----------------------\nChoose from the options below\n 1- Display inventory\n 2- Add book to inventory\n 3- Remove book from inventory\n 4- Search for book\n 5- Display all books in genre\n quit- Log off");
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
		    	console.log("Ok, remove book from inventory.");
		    	this.removeBookByTitle();
		        return this.userMenu();
		        break;
		    case '4':
		    	console.log("Ok, search for book.");
		    	this.serchForBook();
		        return this.userMenu();
		        break;
		    case '5':
		    	console.log("Ok, display all books in genre.");
		    	
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

objectington.inventory.push(new Book("foo","bar","fic", 34, true));
objectington.inventory.push(new Book("this","that","non-fic", 334, true));
objectington.inventory.push(new Book("JavaScript For Dummies","Mr. Dummie","non-fic", 342, true));

objectington.userMenu();
