
// It's quite hard to understand this ...
var ScopeLosingExample = {
  text: 'Property from lexical scope',
  run: function () {
    console.log('Losing: ' + this.text);
    setTimeout(function () {
      console.log(this.text);
    }, 1000);
  }
};
ScopeLosingExample.run();

var ScopePreservingExample = {
  text: 'Property from lexical scope',
  run: function () {
    console.log('Preserving: ' + this.text);
    setTimeout(() => {
      console.log(this.text);
    }, 1000);
  }
}
ScopePreservingExample.run();
