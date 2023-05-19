const assert = require('assert')
const calculateNumber = require('./1-calcul')

describe('type of calculate', function () {
    it('should calculate the arguments based on type SUM', function () {
        assert.equal(calculateNumber('SUM', 1.4, 4.5), 6)
    })
    it('should calculate the arguments based on type SUBTRACT', function () {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
    })
    it('should calculate the arguments based on type DIVIDE', function () {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
    })
    it('should return Error', function () {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error')
    })
})