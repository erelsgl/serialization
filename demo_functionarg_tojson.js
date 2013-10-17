console.log("serialize demo start");

var assert = require('assert');

console.log("\nDefine a book library");

function newBookLib() {
	var demo_library = require('./demo_classes_with_tojson');
	var newLib = new demo_library.Library(demo_library.Book);
	if (!newLib.add) throw new Error("newLib.add is not defined");
	return newLib;
}
var bookLib = newBookLib();
bookLib.add("book1");
bookLib.add("book2");
assert(bookLib.string() == "Book:book1,Book:book2");

console.log("\nDefine a paper library");

function newPaperLib() { 
	var demo_library = require('./demo_classes_with_tojson');
	return new demo_library.Library(demo_library.Paper); 
}
var paperLib = newPaperLib();
paperLib.add("paper1");
paperLib.add("paper2");
assert(paperLib.string() == "Paper:paper1,Paper:paper2");


console.log("\nSerialize, deserialize and compare the results");

var serialize = require('./');

var bookLibString = serialize.toString(bookLib, newBookLib);
//console.log(bookLibString);
var bookLibCopy = serialize.fromString(bookLibString);
assert(bookLibCopy.string() == "Book:book1,Book:book2");

var paperLibString = serialize.toString(paperLib, newPaperLib);
var paperLibCopy = serialize.fromString(paperLibString);
assert(paperLibCopy.string() == "Paper:paper1,Paper:paper2");

console.log("\nMake sure we can update the deserialized object");
paperLibCopy.add("paper3"); 
assert(paperLibCopy.string() == "Paper:paper1,Paper:paper2,Paper:paper3");


console.log("serialize demo end");