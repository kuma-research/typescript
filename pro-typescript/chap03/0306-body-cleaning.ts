module Listing0306BodyCleaning {
  export interface BodyCleaning {
    cleanBody(): void;
  }
  export class BasicBodyCleaning implements BodyCleaning {
    cleanBody() {
      console.log('Soaping car');
      console.log('Rinsing car');
    }
  }
  export class ExecutiveBodyCleaning extends BasicBodyCleaning {
    cleanBody() {
      super.cleanBody();
      console.log('Waxing car');
      console.log('Blow drying car');
    }
  }
}