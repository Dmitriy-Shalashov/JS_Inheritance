'use strict'

class Vehicle {
   constructor({ length, width, height }, brand, model, manufactureDate) {
      this.length = length;
      this.width = width;
      this.height = height;
      this.brand = brand;
      this.model = model;
      this.manufactureDate = new Date(manufactureDate);
   }
   getMaxSize() {
      return Math.max(this.length, this.width, this.height);
   }

   getAge() {
      return new Date().getFullYear() - this.manufactureDate.getFullYear();
   }
}

class PassengerTransport extends Vehicle {
   constructor({ length, width, height }, brand, model, manufactureDate, passengerLimit, passengerCount) {
      super({ length, width, height }, brand, model, manufactureDate);
      this.passengerLimit = passengerLimit;
      this.passengerCount = passengerCount;
   }
   addPassenger() {
      if (this.passengerLimit > this.passengerCount) {
         ++this.passengerCount;
         return true;
      }
      return false;
   }
}

class FreightTransport extends PassengerTransport {
   constructor({ length, width, height }, brand, model, manufactureDate, passengerLimit, passengerCount, capacity) {
      super({ length, width, height }, brand, model, manufactureDate, passengerLimit, passengerCount);
      this.capacity = capacity;
   }
   checkLoadingPossibility(weight) {
      if (weight < this.capacity) {
         return true;
      } else {
         return false;
      }
   }
}


const newCar = new Vehicle({ length: 3500, width: 1800, height: 1300 }, 'alfa romeo', 'giulia', [2016, 10, 3]);

const pasCar = new PassengerTransport({ length: 5500, width: 1900, height: 2220 }, 'mercedes', 'w447', [2014, 8, 7], 9, 5);

const freightCar = new FreightTransport({ length: 6300, width: 2100, height: 2320 }, 'renault', 't440', [2020, 1, 1], 2, 2, 12000);

console.log('newCar :>> ', newCar);
console.log('newCar.getMaxSize() :>> ', newCar.getMaxSize());
console.log('newCar.getAge() :>> ', newCar.getAge());

console.log('pasCar :>> ', pasCar);
console.log('pasCar.addPassenger() :>> ', pasCar.addPassenger());
console.log('pasCar.getMaxSize() :>> ', pasCar.getMaxSize());
console.log('pasCar.getAge() :>> ', pasCar.getAge());

console.log('freightCar :>> ', freightCar);
console.log('freightCar.checkLoadingPossibility(13800) :>> ', freightCar.checkLoadingPossibility(13800));
console.log('freightCar.getMaxSize() :>> ', freightCar.getMaxSize());
console.log('freightCar.getAge() :>> ', freightCar.getAge());
console.log('freightCar.addPassenger() :>> ', freightCar.addPassenger());