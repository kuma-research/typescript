function getAverageOverloaded(a, b, c) {
    var total = parseInt(a, 10) + parseInt(b, 10);
    if (typeof c !== 'undefined') {
        total += parseInt(c, 10);
    }
    return 'The average is ' + (total / 3);
}
console.log(getAverageOverloaded(1, 2));
console.log(getAverageOverloaded(1, 2, 3));
console.log(getAverageOverloaded('1', '2', '3'));
