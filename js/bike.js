var Bike = function() {
  this.broken = false;
};

Bike.prototype.isBroken = function() {
  return this.broken;
};

Bike.prototype.break = function() {
  this.broken = true;
};

module.exports = Bike;
