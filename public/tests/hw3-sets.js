/* jshint expr: true */

describe('Object comparison functions', function() {
  var initialObject = {};
  context('copy', function() {
    it('should create a copy of the object passed in to it', function() {
      var obj = {a:1, b:2};
      expect(obj).to.deep.equal(copy(obj));
    });
  });
  context('equal', function() {
    it('should return true when passed two identical objects', function() {
      expect(equal({a:0,b:1,c:2}, {a:0,b:1,c:2})).to.be.true;
    });
    it('should return false when passed two completely different objects', function() {
      expect(equal({a:0,b:1,c:2}, {d:3,e:4,f:5})).to.be.false;
    });
    it('should return false when passed two objects with the same properties and different values', function() {
      expect(equal({a:0,b:1,c:2},{a:3,b:4,c:5})).to.be.false;
    });
    it('should return false when one otherwise identical object has an extra property', function() {
      expect(equal({a:0,b:1,c:2}, {a:0,b:1,c:2,d:3})).to.be.false;
    });
  });
  context('similar', function() {
    it('should return true when passed two identical objects', function() {
      expect(similar({a:0,b:1,c:2}, {a:0,b:1,c:2})).to.be.true;
    });
    it('should return false when passed two completely different objects', function() {
      expect(similar({a:0,b:1,c:2}, {d:3,e:4,f:5})).to.be.false;
    });
    it('should return true when passed two objects with the same properties and different values', function() {
      expect(similar({a:0,b:1,c:2},{a:3,b:4,c:5})).to.be.true;
    });
    it('should return false when one otherwise similar object has an extra property', function() {
      expect(equal({a:0,b:1,c:2}, {a:1,b:2,c:1,d:3})).to.be.false;
    });
  });
  context('union', function() {
    it('should merge objects with different properties', function() {
      expect( union({a:1, b:2}, {c:3, d:4})).to.deep.equal({a:1, b:2, c:3, d:4});
    });
    it('should use the properties of the first parameter if there is a conflict', function() {
      expect( union({a:1, b:1}, {b:0, c:0})).to.deep.equal({a:1, b:1, c:0});
    });
    it('should work with empty objects', function() {
      expect(union({a: undefined}, {})).to.deep.equal({a: undefined});
    });
    it('should work even if the empty object is the first parameter', function() {
      expect(union({}, {a: undefined})).to.deep.equal({a: undefined});
    });
    it('should work when objects contain references to themselves', function() {
      expect(union(testVar = {a:1}, {a:2, b: testVar})).to.deep.equal({a:1, b: testVar});
    });
  });
  context('intersection', function() {
    it('should return an object showing the shared properties of the parameters', function() {
      expect( intersection( {a:0, b:0}, {b:0, c:1})).to.deep.equal({b:0});
    });
    it('should return the value of the first object if they are different', function() {
      expect( intersection( {a:0, b:0}, {b:1, c:1})).to.deep.equal({b:0});
    });
    it('should return an empty object if there are no shared properties', function() {
      expect( intersection( {a:0, b:0}, {c:1, d:1})).to.deep.equal({});
    });
  });
  context('subtract', function() {
    it('should return the properties of the first object not in the second', function() {
      expect(subtract({a:0,b:0}, {b:1,c:0})).to.deep.equal({a:0});
    });
    it('should return an empty object if the objects are similar', function() {
      expect(subtract({a:0,b:0}, {b:1,a:0})).to.deep.equal({});
    });
    it('should return the first object if there are no shared properties', function() {
      expect(subtract({a:0,b:0,c:3}, {x:4,y:1,z:0})).to.deep.equal({a:0,b:0,c:3});
    });
  });
});
