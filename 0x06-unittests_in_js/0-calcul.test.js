const assert = require('assert')
const calculate = require('./0-calcul.js')
const { it, describe } = require("mocha");

describe('calculateSum', function () {
    it('should return true of the value is rounded4 ', function () {
        assert.equal(calculate(1, 3), 4);
    });
    it('should return true of the value is rounded 5', function () {
        assert.equal(calculate(1, 3.7), 5);
    });
    it('should return true of the value is rounded 5', function () {
        assert.equal(calculate(1.2, 3.7), 5);
    });
    it('should return true of the value is rounded 6', function () {
        assert.equal(calculate(1.5, 3.7), 6);
    });
})