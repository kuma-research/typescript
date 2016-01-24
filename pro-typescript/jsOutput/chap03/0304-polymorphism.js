var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Listing0304Polymorphism;
(function (Listing0304Polymorphism) {
    var Car = (function () {
        function Car() {
        }
        Car.prototype.moveTo = function (x, y) {
            console.log('Driving to ' + x + ' ' + y);
        };
        return Car;
    })();
    var SportsCar = (function (_super) {
        __extends(SportsCar, _super);
        function SportsCar() {
            _super.apply(this, arguments);
        }
        return SportsCar;
    })(Car);
    // Airplane has moveTo, it does not implicitly implement Vehicle.
    var Airplane = (function () {
        function Airplane() {
        }
        Airplane.prototype.moveTo = function (x, y) {
            console.log('Flying to ' + x + ' ' + y);
        };
        return Airplane;
    })();
    function navigate(vehicle) {
        vehicle.moveTo(59.9436499, 10.7167959);
    }
    var airplane = new Airplane();
    navigate(airplane);
    var sportscar = new SportsCar();
    navigate(sportscar);
})(Listing0304Polymorphism || (Listing0304Polymorphism = {}));
