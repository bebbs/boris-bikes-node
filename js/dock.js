var Dock = function() {
  this.capacity = 10;
  this.bikes = [];
};

Dock.prototype.acceptBike = function(bike) {
  this.bikes.push(bike);
};

module.exports = Dock;
