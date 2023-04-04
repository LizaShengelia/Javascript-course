class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  brake() {
    console.log((this.speed = this.speed - 5));
    return this;
  }

  accelerate() {
    console.log((this.speed = this.speed + 10));
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    (this.speed = this.speed + 20), (this.#charge = this.#charge - 1);

    console.log(
      `${this.make} is going at ${this.speed}, with a charge of ${this.#charge}`
    );
    return this;
  }
}

const Rivian = new EVCl('Rivian', 100, 24);

//Rivian.accelerate();
console.log(Rivian);
Rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate();
