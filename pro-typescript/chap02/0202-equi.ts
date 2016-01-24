
module Listing0202Equivalence {
  interface ObjectId {
    getValue(): number;
  }
  class CustomerId {
    constructor(private id: number) { }
    getValue() { return this.id; }
  }

  class ProductId {
    constructor(private id: number) { }
    getValue() { return this.id; }
  }

  class Example {
    static avoidAccidentalEquivalence(id: CustomerId) {
      // Implementation
    }
    static useEquivalence(id: ObjectId) {
      // Implementation
    }
  }

  var customerId = new CustomerId(1);
  var productId = new ProductId(5);

  Example.avoidAccidentalEquivalence(customerId);
  // productId is not assignable.
  // Example.avoidAccidentalEquivalence(productId);
  Example.useEquivalence(customerId);
  Example.useEquivalence(productId);
}