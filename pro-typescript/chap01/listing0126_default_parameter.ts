
function concatenate(items: string[], separator = ',', beginAt = 0,
	endAt = items.length): string {

	var result = '';
	for (var i = beginAt; i < endAt; i++) {
		result += items[i];
		if (i < endAt - 1) {
			result += separator;
		}
	}
	return result;
}

var items = [ 'A', 'B', 'C' ];

console.log(concatenate(items));
console.log(concatenate(items, ' '));
