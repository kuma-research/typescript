var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DomainId = (function () {
    function DomainId(id) {
        this.id = id;
    }
    Object.defineProperty(DomainId.prototype, "value", {
        get: function () { return this.id; },
        enumerable: true,
        configurable: true
    });
    return DomainId;
})();
var OrderId = (function (_super) {
    __extends(OrderId, _super);
    function OrderId(orderIdValue) {
        _super.call(this, orderIdValue);
        this.orderIdValue = orderIdValue;
    }
    return OrderId;
})(DomainId);
var AccountId = (function (_super) {
    __extends(AccountId, _super);
    function AccountId(accountIdValue) {
        _super.call(this, accountIdValue);
        this.accountIdValue = accountIdValue;
    }
    return AccountId;
})(DomainId);
