///// Define some classes for the demo:


// Paper class:

function Paper(name) {
	this.name = name;
} 
Paper.prototype = {
	setName: function(newName) { this.name = newName; },
	getName: function() { return this.name; },
	string: function() { return "Paper:"+this.name; }
};


// Book class:

function Book(name) {
	this.name = name;
} 
Book.prototype = {
	setName: function(newName) { this.name = newName; },
	getName: function() { return this.name; },
	string: function() { return "Book:"+this.name; }
};


// Library class:

function Library(itemType) {
	this.items = [];
	this.itemType = itemType;
}
Library.prototype = {
	add: function(name) { this.items.push(new this.itemType(name)); },
	string: function () {
		var titles = [];
		this.items.forEach(function(item) {
			titles.push(item.string());
		});
		return titles.join(",");
	},
};

module.exports = {
		Paper: Paper,
		Book: Book,
		Library: Library,
}