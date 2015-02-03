var Bike = function() {
  this.broken = false
};

Bike.prototype.isBroken = function() {
  return this.broken
};

module.exports = Bike
