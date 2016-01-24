module Listing0305WheelCleaning {
  
  export interface WheelCleaning {
    cleanWheels(): void;
  }
  
  export class BasicWheelCleaning implements WheelCleaning {
    cleanWheels() {
      console.log('Soaping Wheel');
      console.log('Brushing Wheel');
    }
  }
  
  export class ExecutiveWheelCleaning extends BasicWheelCleaning {
    cleanWheels() {
      super.cleanWheels();
      console.log('Waxing Wheel');
      console.log('Rinsing Wheel');
    }
  }
}