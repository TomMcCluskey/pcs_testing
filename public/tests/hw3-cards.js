/* jshint expr: true */

describe('rank', function() {
  it('should return 1 when the card ID is 0', function() {
    expect(cardTools.rank(0)).to.equal(1);
  });
  it('should return 1 when the card ID is 3', function() {
    expect(cardTools.rank(3)).to.equal(1);
  });
  it('should return 13 when the card ID is 51', function() {
    expect(cardTools.rank(51)).to.equal(13);
  });
  it('should return NaN when the card ID is 52', function() {
    expect(cardTools.rank(52)).to.not.be.ok;
  });
  it('should return NaN when the card ID is "0"', function() {
    expect(cardTools.rank('0')).to.not.be.ok;
  });
  it('should return NaN when the card ID is -1', function() {
    expect(cardTools.rank(-1)).to.not.be.ok;
  });
  it('should return NaN when the card ID is 2.5', function() {
    expect(cardTools.rank(2.5)).to.not.be.ok;
  });
  it('should return NaN when the card ID is undefined', function() {
    expect(cardTools.rank(undefined)).to.not.be.ok;
  });
});

describe('suit', function() {
  it('should return 1 when the card ID is 0', function() {
    expect(cardTools.suit(0)).to.equal(1);
  });
  it('should return 2 when the card ID is 5', function() {
    expect(cardTools.suit(5)).to.equal(2);
  });
  it('should return 4 when the card ID is 51', function() {
    expect(cardTools.suit(0)).to.equal(1);
  });
  it('should return NaN when the card ID is 52', function() {
    expect(cardTools.suit(52)).to.not.be.ok;
  });
  it('should return NaN when the card ID is false', function() {
    expect(cardTools.suit(false)).to.not.be.ok;
  });
  it('should return NaN when the card ID is true', function() {
    expect(cardTools.suit(true)).to.not.be.ok;
  });
  it('should return NaN when the card ID is -1', function() {
    expect(cardTools.suit(-1)).to.not.be.ok;
  });
  it('should return NaN when the card ID is 3.14', function() {
    expect(cardTools.suit(3.14)).to.not.be.ok;
  });
});

describe('cardID', function() {
  it('should return 0 when the input is (1,1)', function() {
    expect(cardTools.cardID(1,1)).to.equal(0);
  });
  it('should return 51 when the input is (13,4)', function() {
    expect(cardTools.cardID(13,4)).to.equal(51);
  });
  it('should return 30 when the input is (8,3)', function() {
    expect(cardTools.cardID(8,3)).to.equal(30);
  });
  it('should return NaN when the input is (0,1)', function() {
    expect(cardTools.cardID(0,1)).to.not.be.ok;
  });
  it('should return NaN when the input is ("1",1)', function() {
    expect(cardTools.cardID('1',1)).to.not.be.ok;
  });
  it('should return NaN when the input is (1,5)', function() {
    expect(cardTools.cardID(1,5)).to.not.be.ok;
  });
  it('should return NaN when the input is (14,1)', function() {
    expect(cardTools.cardID(14,1)).to.not.be.ok;
  });
  it('should return NaN when the input is (-1,-1)', function() {
    expect(cardTools.cardID(-1,-1)).to.not.be.ok;
  });
  it('should return NaN when the input is (0.5,1)', function() {
    expect(cardTools.cardID(0.5,1)).to.not.be.ok;
  });
  it('should return NaN when the input is (1,NaN)', function() {
    expect(cardTools.cardID(1,NaN)).to.not.be.ok;
  });
});

describe('color', function() {
  it('should return "red" when the card ID is 0', function() {
    expect(cardTools.color(0)).to.equal('red');
  });
  it('should return "black" when the card ID is 2', function() {
    expect(cardTools.color(2)).to.equal('black');
  });
  it('should return NaN when the card ID is "apple"', function() {
    expect(cardTools.color("apple")).to.not.be.ok;
  });
  it('should return NaN when the card ID is true', function() {
    expect(cardTools.color(true)).to.not.be.ok;
  });
  it('should return NaN when the card ID is false', function() {
    expect(cardTools.color(false)).to.not.be.ok;
  });
});

describe('name', function() {
  it('should return "Two of Diamonds" when the card ID is 5', function() {
    expect(cardTools.name(5)).to.equal('Two of Diamonds');
  });
  it('should return "King of Clubs" when the card ID is 51', function() {
    expect(cardTools.name(51)).to.equal('King of Clubs');
  });
  it('should return NaN when the card ID is -1', function() {
    expect(cardTools.name(-1)).to.not.be.ok;
  });
  it('should return NaN when the card ID is 52', function() {
    expect(cardTools.name(52)).to.not.be.ok;
  });
  it('should return NaN when the card ID is NaN', function() {
    expect(cardTools.name(NaN)).to.not.be.ok;
  });
});
