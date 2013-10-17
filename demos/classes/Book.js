///// Define some classes for the demo:

function Book(name) {
	this.name = name;
}
Book.prototype = {
	setName: function(newName) { this.name = newName; },
	getName: function() { return this.name; },
	string: function() { return "Book:"+this.name; }
};

module.exports = Book;
