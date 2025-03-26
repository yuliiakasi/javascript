class Car {

  constructor(model, producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
  }
  drive() {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
  };
  info() {
    for (const key in this) {
      console.log(key, this[key]);
    }
  };
  increaseMaxSpeed(newSpeed) {
    this.maxSpeed = this.maxSpeed + newSpeed;
  };
  changeYear(newValue) {
    this.releaseYear = newValue;
  };
  addDriver(driverObject) {
    if (driverObject) this.driver = driverObject;
  };
}

