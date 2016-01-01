function getAverage(a, b, c) {
    var total = a;
    var count = 1;
    total += b;
    count++;
    if (typeof c !== 'undefined') {
        total += c;
        count++;
    }
    var average = total / count;
    return 'The average is ' + average;
}
console.log(getAverage(1, 2));
console.log(getAverage(1, 2, 3));
