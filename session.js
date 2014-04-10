var sessions = new Object();

function uniqueHash (o, length) {
	var	finished,
		chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	while (!finished) {
		var output = "";
		for (var i = 0; i < length; i++) {
			output += chars[Math.floor(Math.random()*chars.length)];
		}
		if (!o[output]) {
			finished = true;
			return output;
		}
	}
}

exports.check = function (token) {
	return sessions[token];
};
exports.add = function (o) {
	var token = uniqueHash(sessions, 256);
	sessions[token] = o;
	return token;
}
exports.remove = function (token) {
	delete sessions[token];
}