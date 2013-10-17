///// Define some classes for the demo:


// Paper class:

module.exports = require('./demo_classes_without_tojson');

module.exports.Library.prototype.toJSON = function() {
	// keep only the names of the books or papers (the type is kept during initialization):
	var json = this.items.map(function(item) {
		return item.name;
	}, this);
	//console.log('toJSON = '+JSON.stringify(json));
	return json;
}

module.exports.Library.prototype.fromJSON = function(json) {
	//console.log('fromJSON '+JSON.stringify(json));
	// restore the books or papers from their names (the type is kept during initialization):
	json.forEach(function(itemname) {
		this.add(itemname);
	}, this);
}
