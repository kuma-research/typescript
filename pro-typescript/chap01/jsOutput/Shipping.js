define(["require", "exports"], function (require, exports) {
    var Ferry = (function () {
        function Ferry(name, port, displacement) {
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
        return Ferry;
    })();
    exports.Ferry = Ferry;
    var defaultDisplacement = 4000;
    var PrivateShip = (function () {
        function PrivateShip(name, port, displacement) {
            if (displacement === void 0) { displacement = defaultDisplacement; }
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
        return PrivateShip;
    })();
});
