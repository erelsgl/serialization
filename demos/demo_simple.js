console.log("serialize demo start");

var assert = require('assert');

console.log("\nDefine a book");

function newBook() {
	var Book = require(__dirname+'/classes/Book');
	return new Book();
}
var myBook = newBook();
myBook.setName("book1");
assert(myBook.string() == "Book:book1");

console.log("\nSerialize, deserialize and compare the results");

var serialize = require('../');

var bookString = serialize.toString(myBook, newBook);
var bookCopy = serialize.fromString(bookString, __dirname);
assert(bookCopy.string() == "Book:book1");

console.log("\nMake sure we can update the deserialized object");
bookCopy.setName("book2"); 
assert(bookCopy.string() == "Book:book2");

console.log("\nserialize demo end");
