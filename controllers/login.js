var storage = require('../storage.js');
var session = require('../session.js');
var debug = require('../debug.js');
var crypto = require('../crypto.js');

// GET index

exports.show = function (request, response) {
	var valid = (session.check(request.login)?true:false);
	if (valid) {
		response.send({"valid":true});
		debug.log('GET', '/login/' + request.login.slice(0,20) + " [...]", 200);
	} else {
		response.send(403, {"valid":false})
		debug.error('GET', '/login/' + request.login.slice(0,20) + " [...]", 403);
	}
}

exports.create = function (request, response) {
	var password = crypto.md5(request.body.password);
	var hashedPassword = storage.get('password');
	if (password == hashedPassword) {
		response.send({authToken:session.add(true)});
		debug.log('POST', '/login', 200);
	} else {
		response.send(403, '{}');
		debug.error('POST', '/login', 403);
	}
}

exports.destroy = function (request, response) {
	var valid = (session.check(request.login)?true:false);
	if (valid) {
		session.remove(request.login);
		response.send({"valid":true});
		debug.log('DELETE', '/login/' + request.login.slice(0,20) + " [...]", 200);
	} else {
		response.send(403, {"valid":true});
		debug.error('DELETE', '/login/' + request.login.slice(0,20) + " [...]", 403);
	}
}

// mapping token

exports.load = function(login, fn){
	fn(null, login);
}