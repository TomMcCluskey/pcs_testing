//var letterTriangle = require('../song.js').letterTriangle;

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
