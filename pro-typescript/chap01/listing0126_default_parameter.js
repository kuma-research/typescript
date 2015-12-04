function concatenate(items, separator, beginAt, endAt) {
    if (separator === void 0) { separator = ','; }
    if (beginAt === void 0) { beginAt = 0; }
    if (endAt === void 0) { endAt = items.length; }
    var result = '';
    for (var i = beginAt; i < endAt; i++) {
        result += items[i];
        if (i < endAt - 1) {
            result += separator;
        }
    }
    return result;
}
var items = ['A', 'B', 'C'];
console.log(concatenate(items));
console.log(concatenate(items, ' '));
