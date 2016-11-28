/* jshint esversion: 6, strict: true*/
module.exports = (char, str, cs, cb) => {
	'use strict';
	if (cs !== true) {
		char = 	char.toLowerCase();
		str = str.toLowerCase();
	}

	if (!cb) {
		cb = cs;
	}

	let indexes = [];
	for (let i = 0; i < str.length; i++) {

		if (str[i] === char) {
			indexes.push(i);
		}
	}
	if (!indexes.length){
		indexes = -1;
	}
	return cb(null, indexes);
};
