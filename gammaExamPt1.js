var sget = require('sget');
function getUserInput(string){
	return sget(string).trim();
}
var test = getUserInput("this is only a test:");

console.log(test)