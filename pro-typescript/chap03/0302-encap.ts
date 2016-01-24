module Listing0302Encapsulation {
  
  class Totalizer {
    private total = 0;
    private taxRateFactor = 0.2;
    
    addDomination(amount: number) {
      if (amount <= 0) {
        throw new Error('Donation exception');
      }
      var taxRebate = amount * this.taxRateFactor;
      var totalDonation = amount + taxRebate;
      this.total += totalDonation;
    }
    
    getAmountRaised() {
      return this.total;
    }
  }
  
  var totalizer = new Totalizer();
  totalizer.addDomination(100.0);
  var fundsRaised = totalizer.getAmountRaised();
  
  console.log(fundsRaised);
}