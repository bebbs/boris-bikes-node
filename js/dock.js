var Dock = function() {
  this.capacity = 10;
  this.bikes = [];
};

Dock.prototype.acceptBike = function(bike) {
  if (this.isFull()) {
    throw 'Dock is full!';
  } else {
    this.bikes.push(bike);
  }
};

Dock.prototype.releaseBike = function() {
  this.bikes.pop();
};

Dock.prototype.isFull = function() {
  return this.bikes.length === this.capacity
};

module.exports = Dock;
