var Listing0202Equivalence;
(function (Listing0202Equivalence) {
    var CustomerId = (function () {
        function CustomerId(id) {
            this.id = id;
        }
        CustomerId.prototype.getValue = function () { return this.id; };
        return CustomerId;
    })();
    var ProductId = (function () {
        function ProductId(id) {
            this.id = id;
        }
        ProductId.prototype.getValue = function () { return this.id; };
        return ProductId;
    })();
    var Example = (function () {
        function Example() {
        }
        Example.avoidAccidentalEquivalence = function (id) {
            // Implementation
        };
        Example.useEquivalence = function (id) {
            // Implementation
        };
        return Example;
    })();
    var customerId = new CustomerId(1);
    var productId = new ProductId(5);
    Example.avoidAccidentalEquivalence(customerId);
    // productId is not assignable.
    // Example.avoidAccidentalEquivalence(productId);
    Example.useEquivalence(customerId);
    Example.useEquivalence(productId);
})(Listing0202Equivalence || (Listing0202Equivalence = {}));
