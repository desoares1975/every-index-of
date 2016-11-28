/* jshint esversion: 6, strict: true*/
module.exports = (char, str, cb) => {
	'use strict';

	char = 	char.toLowerCase();
	str = str.toLowerCase();
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
