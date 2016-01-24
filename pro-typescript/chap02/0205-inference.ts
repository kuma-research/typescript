module Listing0205TypeInference {
  // result can be inferred as number
  // bottom-up inference
  function add(a: number, b: number) {
    return a + b;
  }
  interface CallsFunction {
    // has one element - a function which takes a function (string -> any)
    // and return void
    (cb: (result: string) => any): void;
  }
  var callsFunction: CallsFunction = function (cb) {
    cb('Done');
  }
  // result here is a string, top-down inference
  callsFunction(function (result) {
    return result;
  });
}