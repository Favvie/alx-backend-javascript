const { expect } = require('chai')
const sendPaymentRequestToApi = require('./5-payment')
const sinon = require('sinon')
describe('test suite', function () {
    let logSpy
    beforeEach(function () {
        logSpy = sinon.spy(console, 'log')
    })
    this.afterEach(function () {
        expect(logSpy.calledOnce).to.be.true
        logSpy.restore()
    })
    it('should call sendPayment', function () {
        sendPaymentRequestToApi(100, 20)
        expect(logSpy.args[0][0]).to.be.equal('The total is: 120')
    })
    it('should test send payment with 10 and 10', function () {
        sendPaymentRequestToApi(10, 10)
        expect(logSpy.args[0][0]).to.be.equal('The total is: 20')
    })
})