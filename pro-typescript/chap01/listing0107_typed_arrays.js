var monuments = [];
monuments.push({
    name: 'Mark',
    heightInMeters: 46,
    location: 'USA'
});
monuments.push({
    name: 'Peter the Great',
    heightInMeters: 96
});
monuments.push({
    name: 'Angel of the North',
    heightInMeters: 20
});
function compareMonumentHeights(a, b) {
    if (a.heightInMeters > b.heightInMeters) {
        return -1;
    }
    if (a.heightInMeters < b.heightInMeters) {
        return 1;
    }
    return 0;
}
var monumentsOrderedByHeight = monuments.sort(compareMonumentHeights);
var tallestMonument = monumentsOrderedByHeight[0];
console.log(tallestMonument.name);
