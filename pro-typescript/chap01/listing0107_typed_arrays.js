var monuments = [];
monuments.push({
    name: 'Mark',
    heightInMeters: 46,
    location: 'USA' // This field will fail type check
});
monuments.push({
    name: 'Peter the Great',
    heightInMeters: 96
});
monuments.push({
    name: 'Angel of the North',
    heightInMeters: 20
});
// This will prove that as a parameter of Monument, a or b will definitely
// has heightInMeters as a field.
function compareMonumentHeights(a, b) {
    if (a.heightInMeters > b.heightInMeters) {
        return -1;
    }
    if (a.heightInMeters < b.heightInMeters) {
        return 1;
    }
    return 0;
}
// The array.sort method expects a comparer that accepts two Monuments
var monumentsOrderedByHeight = monuments.sort(compareMonumentHeights);
// Get the first element from the array, which is the tallest
var tallestMonument = monumentsOrderedByHeight[0];
console.log(tallestMonument.name); // Peter the Great
