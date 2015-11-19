var JS = {
    Number: {
        prototype: {

        }
    }
};

JS.Number.prototype.toFixed = Number.prototype.toFixed;

Number.prototype.toFixed = function (digits, string) {
    var self = this;
    if (string) {
        return JS.Number.prototype.toFixed.apply(self, [digits]);
    } else {
        return parseFloat(JS.Number.prototype.toFixed.apply(self, [digits]));
    }
};