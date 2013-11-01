var storage = require('../storage.js');
var session = require('../session.js');
var debug = require('../debug.js');

// GET index

exports.index = function(request, response){
	response.send(storage.get('items'));
	debug.log('GET', '/item', 200);
}

exports.show = function (request, response) {
	var body = storage.getItem(request.item);
	if (body) {
		response.send(body);
		debug.log('GET', '/item/' + request.item, 200);
	} else {
		response.send(403, '{}');
		debug.error('GET', '/item/' + request.item, 403);
	}
}

exports.create = function (request, response) {
	var item = {
		amount: Math.floor(Math.random()*4000)/100
	}
	response.send({'id': storage.addItem(item)});
	debug.log('POST', '/item', 200);
}

// /**
//  * POST create.
//  */

// exports.create = function(req, res){
// 	res.send('created');
// };

// exports.show = {
// 	json: function(req, res){
// 		res.send(req.item);
// 	}
// };

// mapping id

exports.load = function(item, fn){
	fn(null, item);
}