const chai = require('chai')
const expect = chai.expect
const calculateNumber = require('./1-calcul')

describe('type of calculate', function () {
    it('should calculate the arguments based on type SUM', function () {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6)
    })
    it('should calculate the arguments based on type SUBTRACT', function () {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4)
    })
    it('should calculate the arguments based on type DIVIDE', function () {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2)
    })
    it('should return Error', function () {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error')
    })
})