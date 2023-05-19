const sinon = require('sinon')
const chai = require('chai')
const expect = chai.expect
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./4-payment')
describe('sendPaymentRequestToApi', function () {
    it('stub the calculateNumber from Utils', function () {
        const stub = sinon.stub(Utils, 'calculateNumber')
        const logSpy = sinon.spy(console, 'log')
        stub.withArgs('SUM', 100, 20).returns(10)
        sendPaymentRequestToApi(100, 20)
        expect(stub.calledWith('SUM', 100, 20)).to.be.true
        expect(logSpy.args[0][0]).to.be.equal('The total is: 10')
        logSpy.restore()
        stub.restore()
    })
})