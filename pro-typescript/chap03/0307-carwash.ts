module Listing0307CarWashing {
  
  // This class is tightly coupled with concrete classes.
  // Could this be optimised by factory?
  // 1. It is a factory - a car wash program will be created without abstraction.
  // 2. We need to create an interface first(abstract factory), then write contrete ones.
  class CarWashProgram {
    constructor(private washLevel: number) {}
    
    runWash() {
      var wheelWash: Listing0305WheelCleaning.WheelCleaning;
      var bodyWash: Listing0306BodyCleaning.BodyCleaning;
      
      switch (this.washLevel) {
        case 1:
          wheelWash = new Listing0305WheelCleaning.BasicWheelCleaning();
          wheelWash.cleanWheels();
          bodyWash = new Listing0306BodyCleaning.BasicBodyCleaning();
          bodyWash.cleanBody();
          break;
        case 2:
          wheelWash = new Listing0305WheelCleaning.BasicWheelCleaning();
          wheelWash.cleanWheels();
          bodyWash = new Listing0306BodyCleaning.ExecutiveBodyCleaning();
          bodyWash.cleanBody();
          break;
         case 3:
          wheelWash = new Listing0305WheelCleaning.ExecutiveWheelCleaning();
          wheelWash.cleanWheels();
          bodyWash = new Listing0306BodyCleaning.ExecutiveBodyCleaning();
          bodyWash.cleanBody();
          break;
      }
    }
  }
}