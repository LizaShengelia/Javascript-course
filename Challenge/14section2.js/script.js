class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  brake() {
    console.log((this.speed = this.speed - 5));
  }

  accelerate() {
    console.log((this.speed = this.speed + 10));
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed * 1.6;
  }
}

const car = new CarCl('FOrd', 120);
console.log(car.speedUS);
console.log(car.speed);

car.brake();
car.accelerate();
