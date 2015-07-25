/* jshint expr: true */

context('Part A: Basic functionality', function() {
  describe('rank function', function() {
    it('should return 1 when the card ID is 0', function() {
      expect(rank(0)).to.equal(1);
    });
    it('should return 1 when the card ID is 3', function() {
      expect(rank(3)).to.equal(1);
    });
    it('should return 13 when the card ID is 51', function() {
      expect(rank(51)).to.equal(13);
    });
  });

  describe('suit function', function() {
    it('should return 1 when the card ID is 0', function() {
      expect(suit(0)).to.equal(1);
    });
    it('should return 2 when the card ID is 5', function() {
      expect(suit(5)).to.equal(2);
    });
    it('should return 4 when the card ID is 51', function() {
      expect(suit(0)).to.equal(1);
    });
  });

  describe('cardID function', function() {
    it('should return 0 when the input is (1,1)', function() {
      expect(cardID(1, 1)).to.equal(0);
    });
    it('should return 51 when the input is (13,4)', function() {
      expect(cardID(13, 4)).to.equal(51);
    });
    it('should return 30 when the input is (8,3)', function() {
      expect(cardID(8, 3)).to.equal(30);
    });
  });

  describe('color function', function() {
    it('should return "red" when the color is 0', function() {
      expect(color(0)).to.equal('red');
    });
    it('should return "black" when the color is 2', function() {
      expect(color(2)).to.equal('black');
    });
  });

  describe('name function', function() {
    it('should return "Two of Diamonds" when the cardID is 5', function() {
      expect(name(5)).to.equal('Two of Diamonds');
    });
    it('should return "King of Clubs" when the cardID is 51', function() {
      expect(name(51)).to.equal('King of Clubs');
    });
  });
});

context('Part B: Defensive coding', function() {
  describe('rank function', function() {
    it('should return a false-ish value when the card ID is 52', function() {
      expect(rank(52)).to.not.be.ok;
    });
    it('should return a false-ish value when the card ID is "0"', function() {
      expect(rank('0')).to.not.be.ok;
    });
    it('should return a false-ish value when the card ID is -1', function() {
      expect(rank(-1)).to.not.be.ok;
    });
    it('should return a false-ish value when the card ID is 2.5', function() {
      expect(rank(2.5)).to.not.be.ok;
    });
    it('should return a false-ish value when the card ID is undefined', function() {
      expect(rank(undefined)).to.not.be.ok;
    });
  });

  describe('suit function', function() {
    it('should return a false-ish value when the card ID is 52', function() {
      expect(suit(52)).to.not.be.ok;
    });
    it('should return a false-ish value when the card ID is false', function() {
      expect(suit(false)).to.not.be.ok;
    });
    it('should return a false-ish value when the card ID is true', function() {
      expect(suit(true)).to.not.be.ok;
    });
    it('should return a false-ish value when the card ID is -1', function() {
      expect(suit(-1)).to.not.be.ok;
    });
    it('should return a false-ish value when the card ID is 3.14', function() {
      expect(suit(3.14)).to.not.be.ok;
    });
  });

  describe('cardID function', function() {
    it('should return a false-ish value when the input is (0,1)', function() {
      expect(cardID(0, 1)).to.not.be.ok;
    });
    it('should return a false-ish value when the input is ("1",1)', function() {
      expect(cardID('1', 1)).to.not.be.ok;
    });
    it('should return a false-ish value when the input is (1,5)', function() {
      expect(cardID(1, 5)).to.not.be.ok;
    });
    it('should return a false-ish value when the input is (14,1)', function() {
      expect(cardID(14, 1)).to.not.be.ok;
    });
    it('should return a false-ish value when the input is (-1,-1)', function() {
      expect(cardID(-1, -1)).to.not.be.ok;
    });
    it('should return a false-ish value when the input is (0.5,1)', function() {
      expect(cardID(0.5, 1)).to.not.be.ok;
    });
    it('should return a false-ish value when the input is (1,NaN)', function() {
      expect(cardID(1, NaN)).to.not.be.ok;
    });
  });

  describe('color function', function() {
    it('should return a false-ish value when the card ID is "apple"', function() {
      expect(color("apple")).to.not.be.ok;
    });
    it('should return a false-ish value when the card ID is true', function() {
      expect(color(true)).to.not.be.ok;
    });
    it('should return a false-ish value when the card ID is false', function() {
      expect(color(false)).to.not.be.ok;
    });
  });

  describe('name function', function() {
    it('should return a false-ish value when the card ID is -1', function() {
      expect(name(-1)).to.not.be.ok;
    });
    it('should return a false-ish value when the card ID is 52', function() {
      expect(name(52)).to.not.be.ok;
    });
    it('should return a false-ish value when the card ID is NaN', function() {
      expect(name(NaN)).to.not.be.ok;
    });
  });
});
