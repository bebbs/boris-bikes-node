var Dock = require('../js/dock')
var Bike = require('../js/bike')

describe('Dock', function() {

  var dock;

  beforeEach(function() {
    dock = new Dock();
    bike = new Bike();
  });

  it('should have a capacity of 10', function() {
    expect(dock.capacity).toEqual(10);
  });

  it('can dock a bike', function() {
    dock.acceptBike(bike);
    expect(dock.bikes.length).toEqual(1);
  });

  it('can release a bike', function() {
    dock.acceptBike(bike);
    dock.releaseBike();
    expect(dock.bikes.length).toEqual(0);
  });

  it('should know when it\'s full', function() {
    for(i = 0; i < 10; i++) {
      bike = new Bike();
      dock.acceptBike(bike);
    };
    expect(dock.isFull()).toBe(true);
  });

  it('should not accept a bike if it\'s full', function() {
    for(i = 0; i < 10; i++) {
      bike = new Bike();
      dock.acceptBike(bike);
    };
    var error = function() {
    dock.acceptBike(bike);
  };

  expect(error).toThrow('Dock is full!');
  });

});
