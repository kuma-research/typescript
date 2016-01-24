var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Listing0306BodyCleaning;
(function (Listing0306BodyCleaning) {
    var BasicBodyCleaning = (function () {
        function BasicBodyCleaning() {
        }
        BasicBodyCleaning.prototype.cleanBody = function () {
            console.log('Soaping car');
            console.log('Rinsing car');
        };
        return BasicBodyCleaning;
    })();
    Listing0306BodyCleaning.BasicBodyCleaning = BasicBodyCleaning;
    var ExecutiveBodyCleaning = (function (_super) {
        __extends(ExecutiveBodyCleaning, _super);
        function ExecutiveBodyCleaning() {
            _super.apply(this, arguments);
        }
        ExecutiveBodyCleaning.prototype.cleanBody = function () {
            _super.prototype.cleanBody.call(this);
            console.log('Waxing car');
            console.log('Blow drying car');
        };
        return ExecutiveBodyCleaning;
    })(BasicBodyCleaning);
    Listing0306BodyCleaning.ExecutiveBodyCleaning = ExecutiveBodyCleaning;
})(Listing0306BodyCleaning || (Listing0306BodyCleaning = {}));
