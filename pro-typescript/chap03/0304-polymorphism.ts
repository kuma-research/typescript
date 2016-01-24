module Listing0304Polymorphism {
  
  // This is the base interface for navigate to use.
  interface Vehicle {
    moveTo(x: number, y: number): void;
  }
  
  class Car implements Vehicle {
    moveTo(x: number, y: number) {
      console.log('Driving to ' + x + ' ' + y);
    }
  }
  class SportsCar extends Car {}
  
  // Airplane has moveTo, it does not implicitly implement Vehicle.
  class Airplane {
    moveTo(x: number, y: number) {
      console.log('Flying to ' + x + ' ' + y);
    }
  }
  function navigate(vehicle: Vehicle) {
    vehicle.moveTo(59.9436499, 10.7167959);
  }
  
  var airplane = new Airplane();
  navigate(airplane);
  var sportscar = new SportsCar();
  navigate(sportscar);
}