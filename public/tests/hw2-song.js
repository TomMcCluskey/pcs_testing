//var assert = require('assert'); //standard with Node

//var generateSong = require('../song.js').generateSong;


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

