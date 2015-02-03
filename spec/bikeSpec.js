var Bike = require('../js/bike')

describe("Bike", function() { 

  var bike;

  beforeEach(function() {
    bike = new Bike();
  });

  describe('by default', function() {

    it("should not be broken", function() {
      expect(bike.isBroken()).toBe(false);
    });

  });

  describe('should be able to', function() {

    it('be broken', function() {
      bike.break();
      expect(bike.isBroken()).toBe(true);
    });

    it('be fixed', function() {
      bike.break();
      bike.fix();
      expect(bike.isBroken()).toBe(false);
    });

  });

});
