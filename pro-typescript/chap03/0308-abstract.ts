module AbstractFactory {
 
  export interface ValetFactory {
    getWheelCleaning(): Listing0305WheelCleaning.WheelCleaning;
    getBodyCleaning(): Listing0306BodyCleaning.BodyCleaning;
  }
}