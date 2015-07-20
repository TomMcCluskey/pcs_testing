//var assert = require('assert'); //standard with Node

//var letterTriangle = require('../song.js').letterTriangle;
//var generateSong = require('../song.js').generateSong;

describe("letterTriangle()", function() {
	var lens = [1,7,17], strs=[];
	before(function(){
		strs = lens.map(function(n) {
			return letterTriangle(n).replace(/\n$/,'');
		});
	});
	it("should return a string",function() {
		expect(strs.every(function(str) {
			return typeof str ==='string';
		})).to.be.true;
	});
	it("should have N lines when given positive integer N",function() {
		expect(strs.every(function(str,i) {
			return str.split('\n').length === lens[i];
		})).to.be.true;
	});
	//it("should have each line be one letter longer than the previous line");
	it("should have line N start with the Nth letter of the alphabet",function() {
		expect(strs.every(function(triangleStr) {
			return triangleStr.split('\n').every(function(line,i){
				return line.toUpperCase().charCodeAt(0) === 65+i;
			})
		})).to.be.true;
	});
	it("should have each line contain the previous line",function() {
		expect(strs.every(function(triangleStr) {
			return triangleStr.split('\n').reduce(function(prev,curr){
				return  curr.slice(1)===prev && curr;
			})
		})).to.be.true;
	});
})

describe("generateSong()", function() {
	var song;
	before(function(){
		song=generateSong();
		song=song.replace(/\n+$/,'');
	});
    it("should return a string", function() {
    	expect(typeof song).to.equal('string');
    });
    it("should have 12 stanzas, separated by blank lines",function() {
    	var stanzas = song.split('\n\n');
    	expect(stanzas.length).to.equal(12);
    });
    it ("should have each stanza begin with the line 'On the [Nth] day...'",function() {
    	var stanzas = song.split('\n\n');
  		var firstLines = stanzas.map(function(stanza) {
  			return stanza.split('\n')[0];
  		})
  		var rexp = /^On the (\w+(th|st|nd|rd)) day of \w+mas,? my true love gave to me/;
  		expect(firstLines.every(function(line){
  			//console.log(line);
  			return rexp.test(line);
  		})).to.be.true;
   	})
    it ("should have each stanza be one line longer than the last",function() {
    	var stanzas = song.split('\n\n');
    	var lastLen=0;
    	stanzas.forEach(function(stanza,i) {
    		var lines = stanza.split('\n');
    		//console.log(lines);
    		if (i)
    			expect(lines.length).to.equal(lastLen+1);
    		lastLen = lines.length;
    	});
    })
})

