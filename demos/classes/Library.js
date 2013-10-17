///// Define some classes for the demo:

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

Library.prototype.toJSON = function() {
	// keep only the names of the books or papers (the type is kept during initialization):
	var json = this.items.map(function(item) {
		return item.name;
	}, this);
	//console.log('toJSON = '+JSON.stringify(json));
	return json;
}

Library.prototype.fromJSON = function(json) {
	//console.log('fromJSON '+JSON.stringify(json));
	// restore the books or papers from their names (the type is kept during initialization):
	json.forEach(function(itemname) {
		this.add(itemname);
	}, this);
}


module.exports = Library;