const car = function (make, speed) {
  (this.make = make), (this.speed = speed);
};

car.prototype.accelerate = function () {
  console.log((this.speed = this.speed + 10));
};

const EV = function (make, speed, charge) {
  car.call(this, make, speed), (this.charge = charge);
};

EV.prototype = Object.create(car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  console.log((this.speed = this.speed + 20), (this.charge = this.charge - 1));
  console.log(
    `${this.make} is going at ${this.speed}, with a charge of ${this.charge}`
  );
};

const electric = new EV('Tesla', 120, 23);
electric.accelerate();

EV.prototype.constructor = EV;
