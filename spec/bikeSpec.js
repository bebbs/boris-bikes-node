describe("Bike", function() {
  
  it("should not be broken", function() {
    var bike = new Bike();
    expect(bike.isBroken).toBe(false);
  });

});