describe("Number.prototype.toFixed", function() {

    it("toFixed returns a Number or String containing this Number value represented in decimal " +
        "fixed-point notation with fractionDigits digits after the decimal point. If fractionDigits " +
        "is undefined, 0 is assumed.", function() {
        assert.equal((2).toFixed(3), 2);
        assert.equal((2).toFixed(3, true), '2.000');
        assert.equal((2.123456789).toFixed(0), 2);
        assert.equal((2.123456789).toFixed(1), 2.1);
        assert.equal((2.123456789).toFixed(2), 2.12);
        assert.equal((2.123456789).toFixed(3), 2.123);
        assert.equal((2.123456789).toFixed(4), 2.1234);
        assert.equal((2.123456789).toFixed(5), 2.12345);
        assert.equal((2.123456789).toFixed(6), 2.123456);
        assert.equal((2.123456789).toFixed(7), 2.1234567);
        assert.equal((2.123456789).toFixed(8), 2.12345678);
        assert.equal((2.123456789).toFixed(9), 2.123456789);
        assert.equal((2.123456789).toFixed(10), 2.123456789);
        assert.equal((2.123456789).toFixed(10, true), '2.1234567890');
    });

});