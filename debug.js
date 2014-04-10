// require
var colog = require('colog');

var debug = 'log';

exports.log = function (method, resource, status) {
	status = status + '';
	if (debug == 'log') {
		console.log(method + ' ' + resource + ' ' + colog.colorGreen(status));
	}
}
exports.warning = function (method, resource, status) {
	status = status + '';
	if (debug == 'warning' || debug == 'log') {
		console.warn(method + ' ' + resource + ' ' + colog.colorYellow(status));
	}
}
exports.error = function (method, resource, status) {
	status = status + '';
	if (debug) {
		console.error(method + ' ' + resource + ' ' + colog.colorRed(status));
	}
}