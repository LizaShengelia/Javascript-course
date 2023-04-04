const constructorFunction = function (make, speed) {
  (this.make = make), (this.speed = speed);
};

constructorFunction.prototype.accelerate = function () {
  console.log((this.speed = this.speed + 10));
};

constructorFunction.prototype.brake = function () {
  console.log((this.speed = this.speed - 5));
};

const BMW = new constructorFunction(0, 120);
const Mercedes = new constructorFunction(0, 95);

BMW.accelerate();
BMW.brake();

Mercedes.accelerate();
Mercedes.brake();
