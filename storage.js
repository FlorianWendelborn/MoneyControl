var fs = require('fs');
var storage = JSON.parse(fs.readFileSync('./storage.json'));

var saveTime = 0;
var storageTimeout;

function save () {
	var currentTime = new Date().getTime();
	
	// limiting saves to once every 30 seconds
	if (currentTime - saveTime > 30000) {
		fs.writeFileSync('./storage.json', JSON.stringify(storage, null, '\t'));
		saveTime = new Date().getTime();
	} else {
		storageTimeout = setTimeout(function () {
			save();
		}, 30000 - currentTime + saveTime);
	}
}

exports.get = function (key) {
	return storage[key];
}
exports.set = function (value) {
	storage = value;
	save();
}
exports.addItem = function (item) {
	var id = storage.items.length;
	storage.items.push(item);
	save();
	return id;
}
exports.getItem = function (id) {
	return storage.items[id];
}