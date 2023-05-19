const assert = require('assert')
const calculate = require('./0-calcul')

describe('calculateSum', function () {
    it('should return true if it equal 4', function () {
        assert.strictEqual(calculate(1, 3), 4)
    })
    it('should return true if it equals 5', function () {
        assert.strictEqual(calculate(1, 3.7), 5)
    })
    it('should return true if it equals 5', function () {
        assert.strictEqual(calculate(1.2, 3.7), 5)
    })
    it('should return true if it equals 6', function () {
        assert.strictEqual(calculate(1.5, 3.7), 6)
    })
})