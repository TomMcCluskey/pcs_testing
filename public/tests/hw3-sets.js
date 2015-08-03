

// --- Assertion module: ---
//var assert = require('assert'); //standard with Node
//var should = require('should'); // alternative
//var expect = require('chai').expect; // alternative


// --- The code to be tested: ---
var sets = require('../sets.js'),
    union = sets.union,
    intersection = sets.intersection,
    difference = sets.difference,
    equal = sets.equal,
    similar = sets.similar,
    copy = sets.copy;

// Various helper functions...
var tools = require('../testing-tools.js');
    withRandomSamples = tools.withRandomSamples;


//--- Describe test suite ---

//comparison/copy:
//describe("copy(A)");
describe("copy(A,B)", function() {
    it("should produce objects passing tools.equal(A,B)", function() {
        withRandomSamples(copy,function(abc){
            assert(tools.equal(abc.a,abc.c));
        })
    });
});


describe("equal(A,B)", function() {
    //it("should mimic deepEqual")
    /*
    it("should be false if A has any property not in B", function() {
        withRandomSamples(equal,function(abc){
            for (var key in abc.a) {
                if (!(key in abc.b))
                    assert(abc.c === false);
            }
        })
    });
    it("should be false if B has any property not in A", function() {
        withRandomSamples(equal,function(abc){
            for (var key in abc.b) {
                if (!(key in abc.a))
                    assert(abc.c === false);
            }
        })
    });
    */
    //it("should be false if A and B share a property unequal in value");
    //it("should be true otherwise");
    it("should match results of tools.equal(A,B)", function() {
        withRandomSamples(equal,function(abc){
            assert(abc.c === tools.equal(abc.a,abc.b));
        })
    });
});

describe("similar(A,B)", function() {
    it("should match results of tools.similar(A,B)", function() {
        withRandomSamples(similar,function(abc){
            assert(abc.c === tools.similar(abc.a,abc.b));
        })
    })
})

// set operations
describe("intersection(A,B)", function() {
    it("should have value (A.prop && B.prop) for shared properties", function() {
        withRandomSamples(intersection,function(abc){
            for (var key in abc.c) {
                if ((key in abc.a) && (key in abc.b)) {
                    assert.equal(abc.c[key], abc.a[key] && abc.b[key]);
                }
            }
        });
    });
    it("should have no other properties", function() {
        withRandomSamples(intersection,function(abc){
            for (var key in abc.c) {
                assert(key in abc.a, key);
                assert(key in abc.b, key);
            }
        });
    });
}); // describe intersection

describe("union(A,B)", function() {
    it("should include any property in A", function() {
        withRandomSamples(union,function(abc){
            for (var key in abc.a) {
                assert(key in abc.c);
            }
        });
    });
    it("should include any property in B", function() {
        withRandomSamples(union,function(abc){
            for (var key in abc.b) {
                assert(key in abc.c);
            }
        });
    });
    it("should match A's values for A-only properties", function() {
        withRandomSamples(union,function(abc){
            for (var key in abc.a) {
                if (!(key in abc.b)) {
                    assert.equal(abc.c[key], abc.a[key]);
                }
            }
        });
    });
    it("should match B's values for B-only properties", function() {
        withRandomSamples(union,function(abc){
            for (var key in abc.b) {
                if (!(key in abc.a)) {
                    assert.equal(abc.c[key], abc.b[key]);
                }
            }
        });
    });
    it("should have value (A.prop||B.prop) for shared properties", function() {
        withRandomSamples(union,function(abc){
            for (var key in abc.c) {
                if ((key in abc.a) && (key in abc.b)) {
                    // assert version:
                    assert.equal(abc.c[key], abc.a[key] || abc.b[key]);

                    // chai.expect version:
                    //expect(abc.c[key]).to.equal(abc.a[key] || abc.b[key]);

                    // should version:
                    //abc.c[key].should.equal(abc.a[key] || abc.b[key]);
                }
            }
        });
    });
    it("should have no other properties", function() {
        withRandomSamples(union,function(abc){
            for (var key in abc.c) {
                assert((key in abc.a) || (key in abc.b));
            }
        });
    })
}); // describe union

describe("difference(A,B)", function() {
    it("should match A's values for A-only properties", function() {
        withRandomSamples(difference,function(abc){
            for (var key in abc.a) {
                if (!(key in abc.b)) {
                    assert.equal(abc.a[key], abc.c[key]);
                }
            }
        })
    });
    it("should have no other properties", function() {
        withRandomSamples(difference,function(abc){
            for (var key in abc.c) {
                assert(key in abc.a, key);
                assert(!(key in abc.b), key);
            }
        })
    });
});

/*
// Your assertions will differ, but your implementation should still pass these tests:
var testVar;
assert( equal( union( {a:0,b:0},{b:1,c:0} ),
                        {a:0,b:1,c:0} ),        "Union 1 failed");
assert( equal( union( {1:Infinity}, {1:NaN,2:0} ),
                        {1:Infinity,2:0} ),     "Union 2 failed");
assert( equal( union( {a:undefined}, {} ),
                        {a:undefined} ),        "Union 3 failed");
assert( equal( union( testVar={a:1}, {a:2,b:testVar} ),
                            {a:1,b:testVar} ),  "Union 4 failed");
assert( equal( union( {'1':1},{'2':2} ),
                        {1:1,2:2} ),            "Union 5 failed");

assert( equal( intersection ( {a:0,b:0}, {b:1,c:0} ),
                                {b:0} ),        "Intersection 1 failed");
assert( equal( intersection ( {a:1}, {b:1} ),
                                {} ),           "Intersection 2 failed");
assert( equal( intersection ( {}, {a:1,b:1,c:1,d:1,e:1,f:1} ),
                                {} ),           "Intersection 3 failed");
assert( equal( intersection ( {a:1}, {a:0} ),
                                {a:0} ),        "Intersection 4 failed");
assert( equal( intersection ( {obj:testVar={}}, {obj:testVar} ),
                                {obj:testVar} ),"Intersection 5 failed");

assert( equal( difference ( {a:0,b:0}, {b:1,c:0} ),
                            {a:0} ),        'Difference 1 failed');
assert( equal( difference ( {b:1,c:0}, {a:0,b:0} ),
                            {c:0} ),        'Difference 2 failed');
assert( equal( difference ( {a:1}, {a:0} ),
                            {} ),           'Difference 3 failed');
assert( equal( difference ( {a:1,b:2,c:3}, {d:0,e:0} ),
                            {a:1,b:2,c:3} ),'Difference 4 failed');
assert( equal( difference ( {obj:testVar={}}, {anything:0} ),
                            {obj:testVar} ),'Difference 5 failed');
*/

