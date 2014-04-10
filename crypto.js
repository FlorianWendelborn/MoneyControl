/* ┌──────────────────────────────────────────────┐ */
/* │ Copyright © 28.10.2012 by Florian Wendelborn │ */
/* └──────────────────────────────────────────────┘ */

var crypto = require("crypto");

exports.md5 = function (string) {
	string = string + "";
	try {
		x = crypto.createHash('md5').update(string).digest("hex");
		return x;
	} catch (e) {
		return false;
	}
}