/*
function Car(make,model) {
  this.make = make
  this.model = model
  this.price = 0.0
}

Car.prototype.start = function() {
  console.log("Starting car....")
}

let car = new Car('Honda','Accord')
car.make = 'Honda'
car.model = 'Accord'

car.start()
*/

class Car {
  // empty constructor
  /*
  constructor() {

  } */

  constructor(make,model) {
    this.make = make
    this.model = model
    this.speed = 0.0
  }

  start() {
    console.log('Starting the car....')
  }

  accelerate() {
    this.speed = 70
  }

}

// creating car using empty constructor
//let car = new Car()

let car = new Car('Honda','Accord')
car.start()
car.accelerate()

console.log(car)
