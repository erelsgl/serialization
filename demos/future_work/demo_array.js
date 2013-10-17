	console.log("serialize demo start");
	
	var assert = require('assert');
	///// Define some classes:
	
	
	// Paper class:
	
	function Paper(name) {
		this.name = name;
	} 
	Paper.prototype = {
		string: function() { return "Paper:"+this.name; }
	};
	
	
	// Book class:
	
	function Book(name) {
		this.name = name;
	} 
	Book.prototype = {
		string: function() { return "Book:"+this.name; }
	};
	
	
	// Library class:
	
	function Library(name) {
		this.items = [];
	}
	Library.prototype = {
		add: function(item) { this.items.push(item); },
		string: function () {
			var titles = this.items.map(function(item) { return item.string(); });
			return titles.join(",");
		},
	};
	
	
	///// Define a library:
	
	var lib = new Library();
	lib.add(new Paper("MyPaper"));
	lib.add(new Book("MyBook"));
	assert(lib.string() == "Paper:MyPaper,Book:MyBook");
	
	/////
	
	// var libString = serialize.toString(lib);
	// var newLib = serialize.fromString(libString);
	// assert(newLib.string() == "Paper:MyPaper,Book:MyBook");
	
	
	// Serialize:
	//var serialize = require('.');
	//var libString = serialize.toString()
	
	
	// toSrc doesn't work 
	//var toSrc = require("toSrc");
	//var libSrc = toSrc(lib,100);
	//eval("var lib2 = "+libSrc);
	//assert(lib2.string() == "Paper:MyPaper,Book:MyBook");
	
	
	console.log("serialize demo end");