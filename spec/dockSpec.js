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

});
