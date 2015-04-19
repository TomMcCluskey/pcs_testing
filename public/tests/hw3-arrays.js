/* jshint expr: true */

var array = [];
describe('Array.push', function() {
  it('should return the number passed in to it', function() {
    expect(array.push(1)).to.equal(1);
  });
  it('should result in an array with a single value when called on an empty array', function() {
    expect(array[0]).to.equal(1);
  });
  it('should append the value passed in to it to the end of the array', function() {
    array.push(2);
    expect(array[1]).to.equal(2);
  });
  it('should increase the length of the array', function() {
    expect(array.length).to.equal(2);
  });
});
describe('Array.pop', function() {
  it('should return the value of the final object in the array', function() {
    expect(array.pop()).to.equal(2);
  });
  it('should remove the last value from the array', function() {
    expect(array[1]).to.be.undefined;
  });
  it('should decrease the length of the array', function() {
    expect(array.length).to.equal(1);
  });
  it('should leave an empty array when called on an array with a single item', function() {
    array.pop();
    expect(array[0]).to.be.undefined;
  });
  it('should return undefined when called on an empty array', function() {
    expect(array.pop()).to.be.undefined;
  });
  it('should not reduce the length of an empty array', function() {
    expect(array.length).to.equal(0);
  });
});
describe('Array.join', function() {
  it('should return an empty string when called on an empty array', function() {
    expect(array.join(' ')).to.equal('');
  });
  it('should return only the contents of the array when called on an array with a single item', function() {
    array.push('a');
    expect(array.join()).to.equal('a');
  });
  it('should use the specified character between array elements', function() {
    array.push('b');
    array.push('c');
    expect(array.join('_')).to.equal('a_b_c');
  });
  it('should use a comma between elements when nothing is specified', function() {
    expect(array.join(',')).to.equal('a,b,c');
  });
  it('should leave the original array unchanged', function() {
    expect(array[0]).to.equal('a');
    expect(array[1]).to.equal('b');
    expect(array[2]).to.equal('c');
  });
});

var array = {
  length:0,

  push: function(val) {
    this[this.length] = val;
    this.length += 1;
    return this.length;
  },

  pop: function() {
    if (this.length<1)
      return undefined; //nothing to pop
    this.length -= 1;
    var lastVal = this[this.length]; //keep copy of last item
    delete this[this.length]; // destroy last item
    return lastVal; //return copy
  },

  join: function(delim) {
    if (delim === undefined)
      delim = ',';  // use comma as default delimiter if none is provided

    var str = ''; //accumulate result string here
    for (var i=0; i<this.length; i++) {
      if (this[i]!==undefined) // unless element is undefined...
        str += this[i];	// append it to str
      if (i < this.length - 1) // if another element follows...
        str += delim;  // append delimiter
    }
    return str;
  }
}; //end array defn


// -------- Part c --------
// To test a custom array implementation (see problem 2), simply
// comment out the initial var array = []; and include your array
// object. Be sure to use a variable name of array to refer to it!
