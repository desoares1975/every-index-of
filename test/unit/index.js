/* jshint esversion: 6, strict: true*/
var expect = require('chai').expect,
	everyIndexOf = require('../../index');

describe('everyIndexOf', ()=>{
	'use strict';

	it('Test if returns correctily for "As" in apples', (done)=>{
		everyIndexOf('a', 'apples', (err, indexes)=>{
			if(err) {return cb(err);}
			 expect(indexes).to.be.an('array');
			 expect(indexes.length).equal(1);
			 done();
		});
	});
	it('Test if returns correctily for "Ps" in apples', (done)=>{
		everyIndexOf('p', 'apples', (err, indexes)=>{
			if(err) {return cb(err);}
			 expect(indexes).to.be.an('array');
			 expect(indexes.length).equal(2);
			 done();
		});
	});
	it('Test if returns correctily for "Zs" in apples', (done)=>{
		everyIndexOf('z', 'apples', (err, indexes)=>{
			if(err) {return cb(err);}
			 expect(indexes).to.be.an('number');
			 expect(indexes).equal(-1);
			 done();
		});
	});
	it('Test if returns case sensitivety of "Ss" in aSS', (done)=>{
		everyIndexOf('s', 'aSS', (err, indexes)=>{
			if(err) {return cb(err);}
			 expect(indexes).to.be.an('array');
			 expect(indexes.length).equal(2);
			 done();
		});
	});
	it('Test the "Os" in Onomatopoeic', (done)=>{
		everyIndexOf('o', 'Onomatopoeic', (err, indexes)=>{
			if(err) {return cb(err);}
			 expect(indexes).to.be.an('array');
			 expect(indexes.length).equal(4);
			 done();
		});
	});
});