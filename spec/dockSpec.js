var Dock = require('../js/dock')

describe('Dock', function() {

  it('should have a capacity of 10', function() {
    var dock = new Dock();
    expect(dock.capacity).toEqual(10);
  });

  it('can dock a bike', function() {
    dock.acceptBike(bike);
    expect(dock.bikeCount).toEqual(1);
  });

});
