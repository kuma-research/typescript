function getAverageSimple(a: number, b: number, c: number): string {
  var total = a + b + c;
  var average = total / 3;
  return 'The average is: ' + average;
}

var result = getAverageSimple(1, 2, 3);