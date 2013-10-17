console.log("serialize demo start");

var assert = require('assert');

///// Define a library:

function newBookLib() {
	var demo_library = require('./demo_library');
	return new demo_library.Library(demo_library.Book); 
}
var bookLib = newBookLib();
bookLib.add("book1");
bookLib.add("book2");
console.log(bookLib.string());
assert(bookLib.string() == "Book:book1,Book:book2");

function newPaperLib() { 
	var demo_library = require('./demo_library');
	return new demo_library.Library(demo_library.Paper); 
}
var paperLib = newPaperLib();
paperLib.add("paper1");
paperLib.add("paper2");
console.log(paperLib.string());
assert(paperLib.string() == "Paper:paper1,Paper:paper2");


// Serialize, deserialize and compare the results:

var serialize = require('./');
var bookLibString = serialize.toString(bookLib, newBookLib);
console.dir(bookLibString);
var bookLibCopy = serialize.fromString(bookLibString);
assert(bookLibCopy.string() == "Book:book1,Book:book2");

// toSrc doesn't work 
//var toSrc = require("toSrc");
//var libSrc = toSrc(lib,100);
//eval("var lib2 = "+libSrc);
//assert(lib2.string() == "Paper:MyPaper,Book:MyBook");


console.log("serialize demo end");