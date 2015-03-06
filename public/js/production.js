module.exports = { code: '// Error-detecting version\n\n// Helper function:\nfunction isValid(num,low,high) { // Returns--> NaN, true\n    if ((typeof num)!="number") //wrong type\n        return NaN;\n    if (num%1 !== 0) //non-integer\n        return NaN;\n    if (num<low || num>high) //out of range\n        return NaN;\n    return true;\n}\n\n// Card features:\nfunction rank(card) { // --> 1..13, NaN\n    return isValid(card,0,51) &&\n        Math.floor(card/4)+1;\n}\n\nfunction suit(card) { // --> 1..4, NaN\n    return isValid(card,0,51) &&\n        ((card%4)+1);\n}\n\nfunction cardID(rank,suit) { // --> 0..51, NaN\n    return isValid(rank,1,13) &&\n            isValid(suit,1,4) &&\n            ((rank-1)*4 + (suit-1));\n}\nfunction color(card) { // -->"red,"black",NaN\n    var theSuit=suit(card); //may be NaN\n    return theSuit && ((theSuit<3)? "red": "black");\n}\n\n// Both arrays are padded with an unused value ("" but could be anything) in the first position,\n// so that all the other values can be found at the corresponding index (i.e. rankNames[2] is "Two").\nvar rankNames = ["","Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten",\n                "Jack","Queen","King"];\nvar suitNames = ["","Hearts","Diamonds","Spade","Clubs"];\n\nfunction name(card) { //--> string, NaN\n    var theRank = rank(card);\n    var theSuit = suit(card);\n    return theRank && theSuit && //if those are okay...\n        (rankNames[theRank]+" of "+suitNames[theSuit]);//build the name string\n}\n', 
  tests: "// TESTING:\nvar assert = require('assert');\ndescribe('rank', function() {\n  it('should return 1 when the card ID is 0', function() {\n    assert.equal(rank(0), 1);\n  });\n  it('should return 1 when the card ID is 3', function() {\n    assert.equal(rank(3), 1);\n  });\n  it('should return 13 when the card IS is 51', function() {\n    assert.equal(rank(51), 13);\n  });\n});\nassert(isNaN(rank(52)),  'Test 21 failed');\nassert(isNaN(rank('0')), 'Test 22 failed');\nassert(isNaN(rank(-1)),  'Test 23 failed');\nassert(isNaN(rank(2.5)), 'Test 24 failed');\nassert(isNaN(rank(undefined)),'Test 25 failed');\n\ndescribe('suit', function() {\n  it('should return 1 when the card ID is 0', function() {\n    assert.equal(suit(0), 1);\n  });\n  it('should return 2 when the card ID is 5', function() {\n    assert.equal(suit(5), 2);\n  });\n  it('should return 4 when the card ID is 51', function() {\n    assert.equal(suit(0), 1);\n  });\n  it('should return NaN when the card ID is 52', function() {\n    assert.equal(isNaN(suit(52)), true);\n  });\n  it('should return NaN when the card ID is false', function() {\n    assert.equal(isNaN(suit(false)), true);\n  });\n  it('should return NaN when the card ID is true', function() {\n    assert.equal(isNaN(suit(true)), true);\n  });\n  it('should return NaN when the card ID is -1', function() {\n    assert.equal(isNaN(suit(-1)), true);\n  });\n  it('should return NaN when the card ID is 3.14', function() {\n    assert.equal(isNaN(suit(3.14)), true);\n  });\n});\n\ndescribe('cardID', function() {\n  it('should return 0 when the input is (1,1)', function() {\n    assert.equal(cardID(1,1), 0);\n  });\n  it('should return 51 when the input is (13,4)', function() {\n    assert.equal(cardID(13,4), 51);\n  });\n  it('should return 30 when the input is (8,3)', function() {\n    assert.equal(cardID(8,3), 30);\n  });\n  it('should return NaN when the input is (0,1)', function() {\n    assert.equal(isNaN(cardID(0,1)), true);\n  });\n  it('should return NaN when the input is (\"1\",1)', function() {\n    assert.equal(isNaN(cardID(\'1\',1)), true);\n  });\n  it('should return NaN when the input is (1,5)', function() {\n    assert.equal(isNaN(cardID(1,5)), true);\n  });\n  it('should return NaN when the input is (14,1)', function() {\n    assert.equal(isNaN(cardID(14,1)), true);\n  });\n  it('should return NaN when the input is (-1,-1)', function() {\n    assert.equal(isNaN(cardID(-1,-1)), true);\n  });\n  it('should return NaN when the input is (0.5,1)', function() {\n    assert.equal(isNaN(cardID(0.5,1)), true);\n  });\n  it('should return NaN when the input is (1,NaN)', function() {\n    assert.equal(isNaN(cardID(1,NaN)), true);\n  });\n});\n\ndescribe('color', function() {\n  it('should return \"red\" when the color is 0', function() {\n    assert.equal(color(0), 'red');\n  });\n  it('should return \"black\" when the color is 2', function() {\n    assert.equal(color(2), 'black');\n  });\n});\n\ndescribe('name', function() {\n  it('should return \"Two of Diamonds\" when the cardID is 5', function() {\n    assert.equal(name(5), \'Two of Diamonds\');\n  });\n  it('should return \"King of Clubs\" when the cardID is 51', function() {\n    assert.equal(name(51), \'King of Clubs\');\n  });\n});\n"
};
