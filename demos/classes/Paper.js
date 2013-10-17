///// Define some classes for the demo:

function Paper(name) {
	this.name = name;
} 

Paper.prototype = {
	setName: function(newName) { this.name = newName; },
	getName: function() { return this.name; },
	string: function() { return "Paper:"+this.name; }
};

module.exports = Paper;
