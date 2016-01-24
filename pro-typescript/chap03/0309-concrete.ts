
module ConcreteFactory {

  export class BronzeWashFactory implements AbstractFactory.ValetFactory {
    getWheelCleaning() {
      return new Listing0305WheelCleaning.BasicWheelCleaning();
    }
    getBodyCleaning() {
      return new Listing0306BodyCleaning.BasicBodyCleaning();
    }
  }
  
  export class GoldenWashFactory implements AbstractFactory.ValetFactory {
    getWheelCleaning() {
      return new Listing0305WheelCleaning.ExecutiveWheelCleaning(); 
    }
    getBodyCleaning() {
      return new Listing0306BodyCleaning.ExecutiveBodyCleaning();
    }
  }
}