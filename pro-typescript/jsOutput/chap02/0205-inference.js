var Listing0205TypeInference;
(function (Listing0205TypeInference) {
    // result can be inferred as number
    // bottom-up inference
    function add(a, b) {
        return a + b;
    }
    var callsFunction = function (cb) {
        cb('Done');
    };
    // result here is a string, top-down inference
    callsFunction(function (result) {
        return result;
    });
})(Listing0205TypeInference || (Listing0205TypeInference = {}));
