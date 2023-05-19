const sinon = require('sinon')
const chai = require('chai')
const expect = chai.expect
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment')
describe('sendPaymentRequestToApi', function () {
    it('spy on the calculateNumber from Utils', function () {
        const spy = sinon.spy(Utils, 'calculateNumber')
        sendPaymentRequestToApi(100, 20)
        expect(spy.calledWith('SUM', 100, 20)).to.be.true
    })
})