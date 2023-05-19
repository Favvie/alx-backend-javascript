const assert = require('assert')
const calculate = require('./0-calcul')

describe('calculateSum', function () {
    it('should return true of the value is rounded', function () {
        assert.equal(calculate(2.5, 5.2), 8)
    })
})