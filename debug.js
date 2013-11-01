// require
var colors = require('colors').setTheme({'error': 'red', 'log': 'green', 'warning': 'yellow'});

var debug = 'log';

exports.log = function (method, resource, status) {
	status = status + '';
	if (debug == 'log') {
		console.log(method + ' ' + resource + ' ' + status.log);
	}
}
exports.warning = function (method, resource, status) {
	status = status + '';
	if (debug == 'warning' || debug == 'log') {
		console.warn(method + ' ' + resource + ' ' + status.log);
	}
}
exports.error = function (method, resource, status) {
	status = status + '';
	if (debug) {
		console.error(method + ' ' + resource + ' ' + status.log);
	}
}