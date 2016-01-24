var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Listing0305WheelCleaning;
(function (Listing0305WheelCleaning) {
    var BasicWheelCleaning = (function () {
        function BasicWheelCleaning() {
        }
        BasicWheelCleaning.prototype.cleanWheels = function () {
            console.log('Soaping Wheel');
            console.log('Brushing Wheel');
        };
        return BasicWheelCleaning;
    })();
    Listing0305WheelCleaning.BasicWheelCleaning = BasicWheelCleaning;
    var ExecutiveWheelCleaning = (function (_super) {
        __extends(ExecutiveWheelCleaning, _super);
        function ExecutiveWheelCleaning() {
            _super.apply(this, arguments);
        }
        ExecutiveWheelCleaning.prototype.cleanWheels = function () {
            _super.prototype.cleanWheels.call(this);
            console.log('Waxing Wheel');
            console.log('Rinsing Wheel');
        };
        return ExecutiveWheelCleaning;
    })(BasicWheelCleaning);
    Listing0305WheelCleaning.ExecutiveWheelCleaning = ExecutiveWheelCleaning;
})(Listing0305WheelCleaning || (Listing0305WheelCleaning = {}));
