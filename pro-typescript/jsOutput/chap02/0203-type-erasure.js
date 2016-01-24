var Listing0203TypeErasure;
(function (Listing0203TypeErasure) {
    var OrderedArray = (function () {
        // ?: this comparer could be void.
        function OrderedArray(comparer) {
            this.comparer = comparer;
            this.items = [];
        }
        OrderedArray.prototype.add = function (item) {
            this.items.push(item);
            this.items.sort(this.comparer);
        };
        OrderedArray.prototype.getItem = function (index) {
            if (this.items.length > index) {
                return this.items[index];
            }
            return null;
        };
        return OrderedArray;
    })();
    var orderedArray = new OrderedArray();
    orderedArray.add(5);
    orderedArray.add(1);
    orderedArray.add(3);
    var firstItem = orderedArray.getItem(0);
    console.log(firstItem);
})(Listing0203TypeErasure || (Listing0203TypeErasure = {}));
