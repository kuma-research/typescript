var Listing0302Encapsulation;
(function (Listing0302Encapsulation) {
    var Totalizer = (function () {
        function Totalizer() {
            this.total = 0;
            this.taxRateFactor = 0.2;
        }
        Totalizer.prototype.addDomination = function (amount) {
            if (amount <= 0) {
                throw new Error('Donation exception');
            }
            var taxRebate = amount * this.taxRateFactor;
            var totalDonation = amount + taxRebate;
            this.total += totalDonation;
        };
        Totalizer.prototype.getAmountRaised = function () {
            return this.total;
        };
        return Totalizer;
    })();
    var totalizer = new Totalizer();
    totalizer.addDomination(100.0);
    var fundsRaised = totalizer.getAmountRaised();
    console.log(fundsRaised);
})(Listing0302Encapsulation || (Listing0302Encapsulation = {}));
