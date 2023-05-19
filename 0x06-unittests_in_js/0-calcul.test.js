const assert = require('assert')
const calculate = require('./0-calcul')

describe('calculateSum', function () {
    it('should return true if it equal 4', function () {
        assert.strictEqual(calculate(1, 3), 4)
    })
})