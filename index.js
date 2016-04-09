/* jshint esversion: 6, strict: true*/
module.exports = (char, str, cb)=>{
	'use strict';

	char = 	char.toLowerCase();
	str = str.toLowerCase();
	let indexes = [];
	for (let i in str) {

		if (str[i] === char) {

			indexes.push(parseInt(i));
		}
	}
	if (!indexes.length){
		indexes = -1;
	}
	return cb(null, indexes);
};
