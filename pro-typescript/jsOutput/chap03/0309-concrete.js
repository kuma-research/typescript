var ConcreteFactory;
(function (ConcreteFactory) {
    var BronzeWashFactory = (function () {
        function BronzeWashFactory() {
        }
        BronzeWashFactory.prototype.getWheelCleaning = function () {
            return new Listing0305WheelCleaning.BasicWheelCleaning();
        };
        BronzeWashFactory.prototype.getBodyCleaning = function () {
            return new Listing0306BodyCleaning.BasicBodyCleaning();
        };
        return BronzeWashFactory;
    })();
    ConcreteFactory.BronzeWashFactory = BronzeWashFactory;
    var GoldenWashFactory = (function () {
        function GoldenWashFactory() {
        }
        GoldenWashFactory.prototype.getWheelCleaning = function () {
            return new Listing0305WheelCleaning.ExecutiveWheelCleaning();
        };
        GoldenWashFactory.prototype.getBodyCleaning = function () {
            return new Listing0306BodyCleaning.ExecutiveBodyCleaning();
        };
        return GoldenWashFactory;
    })();
    ConcreteFactory.GoldenWashFactory = GoldenWashFactory;
})(ConcreteFactory || (ConcreteFactory = {}));
