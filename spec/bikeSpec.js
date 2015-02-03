var Bike = require('../js/bike')

describe("Bike", function() {

  describe('by default', function() {

    it("should not be broken", function() {
      var bike = new Bike();
      expect(bike.isBroken()).toBe(false);
    });

  });

  describe('should be able to', function() {

    it('break', function() {
      bike.break()
      expect(bike.isBroken()).toBe(true);
    });

  });

});
