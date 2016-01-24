module Listing0310AbstractFactoryInUse {
  class CarWashProgram {
    constructor(private cleaningFactory: AbstractFactory.ValetFactory) {}
    runWash() {
      var wheelWash = this.cleaningFactory.getWheelCleaning();
      var bodyWash = this.cleaningFactory.getBodyCleaning();
      
      wheelWash.cleanWheels();
      bodyWash.cleanBody(); 
    }
  }
}